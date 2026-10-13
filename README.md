# Portfolio

Portfolio website showcasing my development projects and skills.

Built with React, TypeScript, and Vite.

## Description

- **Hero Section**: An introduction
- **About Me**: My story
- **Projects**: My projects
- **Skills**: Categorized technical skills
- **Work Experience**: Timeline of professional projects
- **Resume Download**: Easy access to resume PDF from multiple locations
- **Footer**: Social links and site information

## Contact form

The Contact section sends messages through [Web3Forms](https://web3forms.com) (free, no backend). Get an access key by entering your email on their site, then set it:

- locally in `.env.local`: `VITE_WEB3FORMS_KEY=your-access-key`
- on Vercel: Project Settings → Environment Variables → `VITE_WEB3FORMS_KEY`, then redeploy

Without the key the form is hidden, and the section only shows the copy-email, LinkedIn and resume options.

## Analytics

Vercel Web Analytics (Hobby plan) is enabled. Hobby has no custom events, so engagement is recorded as virtual page views that appear in the dashboard's **Pages** panel (`src/utils/analytics.ts`):

- `/reached/<section-id>`: the section stayed in view for at least 1 second (`/reached/end` = footer)
- `/time/10s`, `/time/30s`, `/time/60s`, `/time/120s`: visible time on the page
- `/click/<name>`: a click on any element with a `data-track` attribute
- `/sent/contact`: a contact form message was delivered (the main conversion metric)
- `/from/<source>`: a visit that arrived through a tagged link

Tag links you share with `?ref=`, e.g. `https://anton-korchynskyi-portfolio.vercel.app/?ref=linkedin`. Use one tag per job application (`?ref=acme`) to see whether that company opened the site.

To exclude your own visits, open the site once with `?notrack` in each browser. `?notrack=0` turns tracking back on.
