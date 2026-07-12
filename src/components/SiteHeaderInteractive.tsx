import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Toggle } from '@/components/ui/toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Props {
  path: string;
}

const links = [
  { href: '/writing', label: '寫作' },
  { href: '/series', label: '系列' },
  { href: '/about', label: '關於' },
];

function isCurrentPath(path: string, href: string) {
  if (href === '/writing') return path.startsWith('/writing') || path.startsWith('/posts');
  return path.startsWith(href);
}

export default function SiteHeaderInteractive({ path }: Props) {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState(path);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const syncState = () => setIsDark(root.dataset.theme === 'dark');
    const applySystemTheme = () => {
      root.dataset.theme = mediaQuery.matches ? 'dark' : 'light';
      syncState();
    };
    const handleThemeChange = () => applySystemTheme();

    syncState();
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname);

    syncPath();
    document.addEventListener('astro:page-load', syncPath);
    return () => document.removeEventListener('astro:page-load', syncPath);
  }, []);

  const toggleTheme = (pressed: boolean) => {
    document.documentElement.dataset.theme = pressed ? 'dark' : 'light';
    setIsDark(pressed);
  };

  return (
    <div className="header-actions">
      <NavigationMenu className="site-nav-menu" viewport={false}>
        <NavigationMenuList className="site-nav-list">
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                href={link.href}
                active={isCurrentPath(currentPath, link.href)}
                className="site-nav-link"
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <TooltipProvider delayDuration={250}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              variant="outline"
              size="lg"
              pressed={isDark}
              onPressedChange={toggleTheme}
              className="theme-toggle"
              aria-label={isDark ? '切換為亮色模式' : '切換為暗色模式'}
            >
              <Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
              <Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent side="bottom">{isDark ? '亮色模式' : '暗色模式'}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
