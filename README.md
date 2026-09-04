# Agent OS Design System

Interactive design system showcase for Agent OS, featuring shadcn/ui foundation components with semantic design tokens across 8 brand themes in both light and dark modes.

## Features

- **8 Brand Themes**: Midnight Aubergine, Together, Airtable, Claude, Discord, ElevenLabs, IBM, Meta
- **Light & Dark Mode**: Full theme switching support
- **shadcn/ui Components**: Button, Badge, Input, Card, Dialog, Tabs, Select, Checkbox
- **Semantic Design Tokens**: CSS custom properties for consistent theming
- **Interactive Showcase**: Live theme switching and component exploration

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** with custom design tokens
- **shadcn/ui** component foundation
- **CSS Custom Properties** for theme variables

## Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to see the design system in action.

## Design Tokens

The design system uses CSS custom properties for consistent theming:

- Surface colors: `--bg-deep`, `--bg-mid`, `--bg-card`, `--bg-elev`
- Text colors: `--cream`, `--cream-soft`, `--cream-dim`, `--cream-mute`
- Accent colors: `--gold`, `--emerald`, `--plum`, `--rust`
- Borders & lines: `--line`, `--line-soft`, `--line-deep`

## Theme Switching

Themes are applied via data attributes on the `<body>` element:

```html
<body data-design-system="claude" data-color-mode="light">
```

## Deployment

Deploy to Vercel with one click or connect your GitHub repository.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/uxokdc2025/agent-os-design-system)

## License

MIT License - see LICENSE file for details.