import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export interface TocItem {
  id: string;
  label: string;
}

interface Props {
  items: TocItem[];
}

function TocLinks({
  items,
  activeId,
  onSelect,
}: {
  items: TocItem[];
  activeId: string;
  onSelect?: () => void;
}) {
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const link = activeLinkRef.current;
    const container = link?.closest<HTMLElement>('.toc');
    if (!link || !container) return;

    const linkTop = link.offsetTop;
    const linkBottom = linkTop + link.offsetHeight;
    const visibleTop = container.scrollTop;
    const visibleBottom = visibleTop + container.clientHeight;

    if (linkTop < visibleTop || linkBottom > visibleBottom) {
      container.scrollTo({
        top: Math.max(0, linkTop - (container.clientHeight - link.offsetHeight) / 2),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    }
  }, [activeId]);

  return (
    <nav className="toc-links" aria-label="文章章節">
      {items.map((item) => (
        <a
          key={item.id}
          className={item.id === activeId ? 'is-active' : undefined}
          href={`#${item.id}`}
          aria-current={item.id === activeId ? 'location' : undefined}
          onClick={onSelect}
          ref={item.id === activeId ? activeLinkRef : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default function ArticleToc({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const setupScrollSpy = () => {
      const headings = Array.from(document.querySelectorAll<HTMLElement>('.article-prose h2'))
        .slice(0, items.length);

      headings.forEach((heading, index) => {
        const item = items[index];
        if (item) heading.id = item.id;
      });

      const updateActiveHeading = () => {
        animationFrame = 0;
        const readingLine = window.scrollY + Math.min(180, window.innerHeight * 0.28);
        let currentId = headings[0]?.id ?? items[0]?.id ?? '';

        headings.forEach((heading) => {
          const headingTop = heading.getBoundingClientRect().top + window.scrollY;
          if (headingTop <= readingLine) currentId = heading.id;
        });

        setActiveId(currentId);
      };

      const requestActiveHeadingUpdate = () => {
        if (animationFrame) return;
        animationFrame = window.requestAnimationFrame(updateActiveHeading);
      };

      updateActiveHeading();
      window.addEventListener('scroll', requestActiveHeadingUpdate, { passive: true });
      window.addEventListener('resize', requestActiveHeadingUpdate);

      return () => {
        window.removeEventListener('scroll', requestActiveHeadingUpdate);
        window.removeEventListener('resize', requestActiveHeadingUpdate);
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
      };
    };

    let cleanup = setupScrollSpy();
    const handlePageLoad = () => {
      cleanup?.();
      cleanup = setupScrollSpy();
    };
    document.addEventListener('astro:page-load', handlePageLoad);

    return () => {
      cleanup?.();
      document.removeEventListener('astro:page-load', handlePageLoad);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <>
      <aside className="toc" aria-label="本文導覽">
        <p>本文導覽</p>
        <TocLinks items={items} activeId={activeId} />
      </aside>

      <div className="toc-mobile">
        <Collapsible open={mobileOpen} onOpenChange={setMobileOpen}>
          <CollapsibleTrigger className="toc-mobile-trigger">
            <span>本文導覽</span>
            <ChevronDown aria-hidden="true" />
          </CollapsibleTrigger>
          <CollapsibleContent className="toc-mobile-content">
            <TocLinks items={items} activeId={activeId} onSelect={() => setMobileOpen(false)} />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
}
