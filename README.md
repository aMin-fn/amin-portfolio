# Amin FOROUZANDEH — Portfolio

A polished, responsive portfolio built with Next.js, React, and TypeScript. The visual direction uses a clean editorial layout, Orbitron display typography, Inter body text, light/dark themes, scroll reveals, an animated skills marquee, and real product screenshots.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build checks

```bash
npm run lint
npm run build
```

## Edit portfolio content

All personal content is centralized in `data/portfolio.ts`:

- `siteConfig`: contact details and profile links
- `experiences`: work history, highlights, and technologies
- `projects`: project cards, links, outcomes, and status
- `skillGroups`: categorized technical stack
- `marqueeSkills`: animated day-to-day technology rail

## Add a project screenshot

1. Put an optimized image in `public/projects/`, preferably WebP or AVIF.
2. Add an `image` object to the project inside `data/portfolio.ts`:

```ts
image: {
  src: "/projects/project-name.webp",
  alt: "A useful description of the project screen",
  width: 1600,
  height: 1000,
},
```

If no image is supplied, the site renders a custom animated dashboard mockup automatically.

## Theme and animation

- The theme switch persists the visitor preference in local storage.
- Scroll reveals use a small native Intersection Observer instead of a large animation dependency.
- `prefers-reduced-motion` is respected for accessibility.

## Resume

The downloadable PDF is stored at `public/Amin_Farouzandeh_Resume.pdf`.
