# Project: Modern Marketing and Portfolio Website Using Astro

Act as a **Senior Frontend Developer, UI/UX Designer, Brand Strategist, and Astro Framework Expert**.

Design and develop a **modern, professional, visually appealing, responsive static marketing website** using **Astro**. Its purpose is to showcase and market our projects, products, services, achievements, and professional work to prospective clients, partners, and collaborators.

## 1. Markdown Files Are References Only

We will provide Markdown (`.md`) files describing our work. **Read and analyze them as source material; do not render them into website pages.**

- Extract verified project descriptions, problems solved, key features, technologies, results, achievements, links, and services.
- Rewrite technical descriptions into clear, engaging, benefit-oriented marketing copy without changing their meaning.
- Organize the information into designed marketing sections, project cards, and dedicated project showcase pages.
- Preserve factual accuracy. Do not invent customers, testimonials, metrics, awards, features, or links.
- Avoid copying long paragraphs verbatim.
- Keep the Markdown files outside the public website output; the completed site must run independently of them.

**Do not build:** a Markdown viewer, documentation portal, blog, or automatic Markdown-to-page renderer.

**Build instead:** a polished marketing and portfolio site with curated content and custom Astro layouts.

## 2. Technology Stack

- Astro (latest stable release) with TypeScript
- Tailwind CSS
- Lucide icons
- Static Site Generation (SSG)
- Minimal client-side JavaScript; prefer Astro components and native browser capabilities
- Static-hosting-compatible production output

Avoid unnecessary dependencies, client-side frameworks, and overengineering.

## 3. Design Direction

Create a modern, minimalist, premium-looking interface inspired by professional technology and software company websites.

- Clear typography, strong hierarchy, generous whitespace, consistent spacing
- Clean project showcases, responsive cards, subtle borders, restrained shadows
- Subtle hover states and transitions, accessible controls
- Professional color palette: navy/deep slate, white, light gray, and a restrained blue accent
- Suggested fonts: Inter, Geist, or Plus Jakarta Sans
- Avoid generic templates, excessive gradients, decorative clutter, irrelevant stock imagery, and heavy animations

Suggested tokens:

| Role | Color |
| --- | --- |
| Primary | Navy / deep slate |
| Background | `#FFFFFF` |
| Secondary background | `#F8FAFC` |
| Text | `#0F172A` |
| Muted text | `#64748B` |
| Accent | `#2563EB` |
| Border | `#E2E8F0` |

## 4. Audience and Message

Communicate:

- **Who we are:** identity, background, expertise, mission (when documented)
- **What we do:** products, projects, capabilities, and verified services
- **What we have built:** completed or ongoing work, software, research, contributions
- **Why it matters:** challenges addressed, user benefits, practical applications, demonstrated impact
- **How to reach us:** provided contact information and professional links

Do not invent organizational information.

## 5. Site Structure

### Header

Brand/logo, Home, About, Projects, Services/Expertise, Contact, and an appropriate primary CTA. Provide responsive mobile navigation and active states.

### Homepage Hero

A compelling, specific headline derived from the references, concise supporting copy, primary and secondary CTAs, and a relevant visual or project preview. Avoid empty marketing buzzwords.

### About

Concise professional introduction covering identity, background, competencies, and mission where supported.

### Featured Projects

Select high-value projects from the references. Each card should include project name, brief value-focused description, problem addressed, relevant features or technologies, suitable image/screenshot when supplied, and a working detail-page link.

### Project Detail Pages

For projects with sufficient source information, include:

1. Project overview and intended users
2. Challenge or problem
3. Solution and approach
4. Key features and benefits
5. Technology stack
6. Screenshots or interface previews, when available
7. Verified results or impact, when available
8. Relevant CTA or verified external link

Omit unsupported sections rather than filling them with invented content.

### Services and Expertise

Present only confirmed services and skills, using concise feature cards that explain practical value.

### Technologies

Display verified languages, frameworks, databases, infrastructure tools, and platforms in a clean, grouped layout.

### Achievements

Highlight documented milestones, publications, open-source contributions, recognitions, or measurable outcomes. Never fabricate numbers.

### Contact and Collaboration

Use a clear invitation for project inquiries or collaboration, plus only contact channels actually provided.

### Footer

Brand, short description, navigation, available contact/professional links, and copyright.

## 6. Marketing Copy Rules

- Write naturally, professionally, and accessibly.
- Explain benefits and practical applications, not just implementation details.
- Use short paragraphs, meaningful headings, and concrete descriptions.
- Avoid unsupported superlatives, exaggerated claims, repetitive copy, and excessive jargon.

**Example source note:**

> The system uses Laravel, PostgreSQL, Redis, and Kafka to manage distributed data processing and asynchronous synchronization.

**Possible website copy:**

> **Scalable Data Integration** — Streamlines information exchange between connected systems through reliable synchronization and efficient backend processing.

The rewritten version must remain faithful to the supplied references.

## 7. Visual Content

Prioritize authentic project screenshots, product UI previews, technology icons, simple diagrams, and thoughtful typography. Use supplied assets when available. When no imagery exists, create polished CSS-based compositions or icon-led layouts; do not fabricate screenshots or use unrelated stock photos.

## 8. Responsive Behavior

- **Desktop:** spacious sections, multi-column grids, clear navigation
- **Tablet:** adaptive grids and spacing
- **Mobile:** single-column reading flow, accessible menu, touch-friendly controls, no horizontal overflow

## 9. Performance, SEO, and Accessibility

- Static generation and minimal JavaScript
- Optimized images, lazy loading for noncritical imagery, efficient font loading
- Avoid layout shifts and unnecessary dependencies
- Unique page titles and meta descriptions, canonical URLs, Open Graph metadata
- XML sitemap and `robots.txt`
- Semantic HTML, correct heading hierarchy, keyboard navigation, visible focus states
- Meaningful image alt text, sufficient contrast, reduced-motion support
- Aim for WCAG 2.2 AA and strong Core Web Vitals

## 10. Suggested Architecture

```text
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── ProjectCard.astro
│   ├── FeatureCard.astro
│   ├── TechnologyBadge.astro
│   ├── SectionHeading.astro
│   └── CallToAction.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── projects/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── contact.astro
├── data/
│   ├── projects.ts
│   ├── services.ts
│   └── technologies.ts
└── styles/
    └── global.css
public/
└── images/
references/
└── *.md
astro.config.mjs
package.json
tsconfig.json
```

The `references/` directory is for **development input only**. Do not publish its raw files or generate public routes from them. Curate the extracted information into typed data and reusable Astro components. Adapt the structure to current Astro conventions where necessary.

## 11. Implementation Workflow

1. **Analyze references:** identify brand, projects, services, technologies, achievements, links, audience, and contact details.
2. **Plan the site:** choose navigation, page hierarchy, featured projects, categories, and CTAs based on available evidence.
3. **Establish the design system:** colors, typography, spacing, buttons, cards, responsive patterns.
4. **Build with Astro:** reusable components, clean TypeScript data, static pages, accessible interactions.
5. **Integrate curated content:** transform reference notes into accurate marketing copy; never display raw Markdown.
6. **Optimize:** performance, responsive behavior, SEO, accessibility, visual consistency.
7. **Validate:** run the production build; check links, pages, assets, and content accuracy; fix errors.

## 12. Deliverables

A complete, production-ready Astro project with:

- Modern marketing homepage
- About page/section
- Portfolio overview and dedicated project pages
- Services/expertise and technologies showcases
- Verified achievements/highlights
- Contact/collaboration area
- Responsive, accessible, SEO-friendly design
- Reusable components and maintainable source code
- Successful static production build
- README with setup, build, deployment, and content-update instructions

## 13. Inspiration

Take inspiration from the design quality of **Linear**, **Vercel**, **Stripe**, and **Raycast**: refined typography, clean structure, strong product storytelling, and polished presentation. Do not copy their branding or layouts.

## 14. Non-Negotiable Final Direction

**This is a marketing and portfolio website, not a Markdown documentation website.** The Markdown files exist solely to inform the website's content. Turn that material into a compelling, truthful, custom-designed Astro experience that shows who we are, what we build, why it matters, and how to collaborate with us.

Prioritize **professional presentation over documentation layout**, **project value over technical complexity**, **clarity over decoration**, **user experience over unnecessary features**, and **performance over excessive animation**.
