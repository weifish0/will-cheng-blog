## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## UI libraries

This project uses the following UI foundation:

- `shadcn/ui` for source-owned React components in `src/components/ui/`.
- `radix-ui` as the accessible primitive layer behind shadcn components.
- `lucide-react` for hydrated React icons and `@lucide/astro` for static Astro icons.

When adding UI, compose an existing shadcn/Radix component before writing custom interaction markup. Use the shadcn CLI with pnpm:

```bash
pnpm dlx shadcn@latest docs <component>
pnpm dlx shadcn@latest add <component>
```

Keep the site's editorial visual language in `src/styles/global.css`; UI libraries own interaction behavior, focus management, keyboard support, and icon consistency, while the blog's open list layout, typography, colors, and Liquid Glass treatment remain project-specific.

Current component responsibilities:

- Header navigation: shadcn Navigation Menu backed by Radix.
- Theme switcher: shadcn Toggle, Radix state, and Lucide Sun/Moon icons.
- Article table of contents: shadcn Collapsible on mobile and Intersection Observer scrollspy.
- Tooltips: shadcn Tooltip with Radix Tooltip primitives.
- Back-to-top, list arrows, reference links, and series navigation: Lucide icons rendered through Astro.

Do not introduce another component library for the same surface. Do not hand-write inline SVG icons when a matching Lucide icon exists. For new interactive components, verify desktop and mobile behavior plus keyboard focus before considering the work complete.
