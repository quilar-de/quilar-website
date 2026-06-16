# Quilar Website

Professional website for Quilar - 3D visualization and virtual tour services for real estate.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Static Export (SSG)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for Production

```bash
npm run build
```

The static export will be generated in the `out/` directory.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── about/page.tsx    # About page
│   ├── services/page.tsx # Services page
│   ├── contact/page.tsx  # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
└── components/
    ├── Header.tsx        # Navigation header
    └── Footer.tsx        # Site footer
```

## Deployment

This site is configured for static export (`output: 'export'` in next.config.ts).
The built `out/` directory can be served by any static hosting or Nginx.
