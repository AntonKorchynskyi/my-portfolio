# Portfolio

Portfolio website showcasing my development projects and skills.

Built with React, TypeScript, Vite and Motion, in plain CSS. Light and dark themes, WCAG 2.2 AA.

## Sections

In page order: Hero, Projects, About, Experience, Skills, Education (with a coursework dialog), Certifications, Contact, Footer.

## Styling

- Design tokens (colours for both themes, type sizes, spacing, radii, durations) live in `src/styles/tokens.css`. Change them there, not in component CSS.
- Shared patterns (section layout, buttons, tags, bullets) are in `src/styles/base.css`; each component has its own CSS file next to it.
- Components are grouped in `src/components/`: `layout/` (header, footer), `ui/` (icons and shared helpers), and one folder per page section (`hero/`, `projects/`, `about/`, `experience/`, `skills/`, `education/`, `certifications/`, `contact/`).
- Breakpoints: 1100px, 900px (menu button, one column), 700px and 600px (phones).
- Animations respect `prefers-reduced-motion`.

## Projects

Project cards are data in `src/components/projects/Projects.tsx`. Add `demoUrl` to a project to show its "Live demo" button, and an `image` (600px and 1200px WebP) to replace the placeholder.

## Analytics

Vercel Web Analytics (Hobby plan) is enabled. Hobby has no custom events, so engagement is recorded as virtual page views that appear in the dashboard's **Pages** panel (`src/utils/analytics.ts`):

- `/reached/<section-id>`: the section stayed in view for at least 1 second (`/reached/end` = footer)
- `/time/10s`, `/time/30s`, `/time/60s`, `/time/120s`: visible time on the page
- `/click/<name>`: a click on any element with a `data-track` attribute
- `/from/<source>`: a visit that arrived through a tagged link

Tag links you share with `?ref=`, e.g. `https://anton-korchynskyi-portfolio.vercel.app/?ref=linkedin`. Use one tag per job application (`?ref=acme`) to see whether that company opened the site.

To exclude your own visits, open the site once with `?notrack` in each browser. `?notrack=0` turns tracking back on.
