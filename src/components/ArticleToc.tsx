import { useEffect, useState } from 'react';
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
  return (
    <nav className="toc-links" aria-label="文章章節">
      {items.map((item) => (
        <a
          key={item.id}
          className={item.id === activeId ? 'is-active' : undefined}
          href={`#${item.id}`}
          onClick={onSelect}
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
    let observer: IntersectionObserver | undefined;

    const setupScrollSpy = () => {
      observer?.disconnect();

      const headings = Array.from(document.querySelectorAll<HTMLElement>('.article-prose h2'))
        .slice(0, items.length);

      headings.forEach((heading, index) => {
        const item = items[index];
        if (item) heading.id = item.id;
      });

      setActiveId(headings[0]?.id ?? items[0]?.id ?? '');
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visible[0]) setActiveId((visible[0].target as HTMLElement).id);
        },
        { rootMargin: '-12% 0px -70% 0px', threshold: [0, 1] },
      );

      headings.forEach((heading) => observer?.observe(heading));
    };

    setupScrollSpy();
    document.addEventListener('astro:page-load', setupScrollSpy);

    return () => {
      observer?.disconnect();
      document.removeEventListener('astro:page-load', setupScrollSpy);
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
