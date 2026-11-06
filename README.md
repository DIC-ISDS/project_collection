# ISDS Website

Marketing and portfolio website for the **Information Systems Development and Database Section (ISDS)**, Digital Innovation Center, University of the Philippines Los Baños.

Built with Astro (static output), TypeScript, Tailwind CSS 4 and Lucide icons. The site ships almost no JavaScript; the only client script is the mobile menu toggle.

## Requirements

- Node.js 22.12 or newer (see `engines` in `package.json`)
- npm

## Setup and development

```sh
npm install
npm run dev        # http://localhost:4321
```

## Build and preview

```sh
SITE_URL=https://your-domain.example npm run build
npm run preview
npx astro check    # type and template checks
```

`SITE_URL` sets the production origin used for canonical URLs, Open Graph tags, `sitemap-index.xml` and `robots.txt`. **Set it for every production build.** Without it, these default to `http://localhost:4321`.

The finished site is written to `dist/`.

## Deployment

`dist/` is plain static HTML, CSS and fonts, so any static host works: a university web server (Apache or Nginx), GitHub Pages, Netlify, Cloudflare Pages or Vercel.

- **Build command:** `npm run build` (with `SITE_URL` set as an environment variable)
- **Output directory:** `dist`
- `404.html` is generated; configure the host to serve it for unknown paths if it doesn’t do so automatically.

## Project structure

```text
src/
├── components/   Header, Footer, Hero, ProjectCard, FeatureCard, ProjectVisual,
│                 SectionHeading, StatusBadge, TechnologyBadge, Button, CallToAction, Logo
├── data/
│   ├── site.ts          Organization details, navigation, contact
│   ├── projects.ts      Project content, highlights and milestones
│   ├── services.ts      Services and expertise
│   └── technologies.ts  Technologies, grouped, with the projects that use each
├── layouts/BaseLayout.astro   <head>, SEO and Open Graph tags, header and footer
├── pages/
│   ├── index.astro, about.astro, services.astro, contact.astro, 404.astro
│   ├── projects/index.astro and projects/[slug].astro
│   └── robots.txt.ts
└── styles/global.css    Tailwind import and design tokens (@theme)
```

## Updating content

All content lives in typed data files in `src/data/`. Pages and components read from those files, so most updates do not touch markup.

| To change | Edit |
| --- | --- |
| Name, mission, vision, contact details | `src/data/site.ts` |
| A project’s copy, features, status or rollout table | `src/data/projects.ts` |
| Homepage highlight numbers and milestones | `highlights` and `milestones` in `src/data/projects.ts` |
| Services | `src/data/services.ts` |
| Technologies | `src/data/technologies.ts` |
| Colors and font | `@theme` in `src/styles/global.css` |

**Adding a project:** add an object to the `projects` array in `src/data/projects.ts`. Its card and its `/projects/<slug>` page are generated automatically. The optional fields (`safeguards`, `stack`, `integrations`, `measures`, `note`) can be left out, and the page hides those sections.

**Adding screenshots:** put images in `src/assets/` and render them with Astro’s `<Image />` component, which optimizes them and sets their size. Write meaningful alt text. Until real screenshots exist, `ProjectVisual.astro` shows a CSS preview of each project’s documented workflow. Do not use mock-ups or stock photos as stand-ins for screenshots.

### Content rules

The copy is written from the project documents in `../docs/`. Those documents are development input only: they are not imported or published, and the site builds without them.

When you update content:

- Only state what the source documents or ISDS confirm. Do not add metrics, users, testimonials, awards or links that are not documented.
- The “How impact will be measured” lists are **proposed** indicators, not results. Replace them with measured results once baselines and pilot data exist.
- Keep the ECMS note that it is a UPLB-only prototype whose intended use does not imply official endorsement or permission to use institutional branding.

## Before launch

- [ ] Set `SITE_URL` to the real domain
- [ ] Confirm with DIC and UPLB how the university’s name may be presented
- [ ] Optionally add a 1200×630 Open Graph image and `og:image` meta tags in `BaseLayout.astro`
- [ ] Add real screenshots when they are cleared for publication
# project_collection
