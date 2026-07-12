import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const threshold = 520;

export default function BackToTopInteractive() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible((document.documentElement.scrollTop || window.scrollY) >= threshold);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    document.addEventListener('astro:page-load', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      document.removeEventListener('astro:page-load', updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={`back-to-top${isVisible ? ' is-visible' : ''}`}
            type="button"
            aria-label="回到頁面頂端"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
            onClick={scrollToTop}
          >
            <ArrowUp aria-hidden="true" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left">回到頁面頂端</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
