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

type Theme = 'dark' | 'light';
type ThemeWindow = Window & { __willChengTheme?: Theme };

const themeStorageKey = 'will-cheng-theme';

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
    const themeWindow = window as ThemeWindow;

    const getStoredTheme = () => {
      try {
        const storedTheme = window.localStorage.getItem(themeStorageKey);
        return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null;
      } catch {
        return themeWindow.__willChengTheme ?? null;
      }
    };
    const syncState = () => setIsDark(root.dataset.theme === 'dark');
    const applySystemTheme = () => {
      if (getStoredTheme()) {
        syncState();
        return;
      }

      root.dataset.theme = mediaQuery.matches ? 'dark' : 'light';
      syncState();
    };
    const handleThemeChange = () => applySystemTheme();

    syncState();
    mediaQuery.addEventListener('change', handleThemeChange);
    document.addEventListener('astro:page-load', syncState);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
      document.removeEventListener('astro:page-load', syncState);
    };
  }, []);

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname);

    syncPath();
    document.addEventListener('astro:page-load', syncPath);
    return () => document.removeEventListener('astro:page-load', syncPath);
  }, []);

  const toggleTheme = (pressed: boolean) => {
    const nextTheme = pressed ? 'dark' : 'light';
    const themeWindow = window as ThemeWindow;
    document.documentElement.dataset.theme = nextTheme;
    themeWindow.__willChengTheme = nextTheme;
    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Keep the current page usable when storage is unavailable.
    }
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
