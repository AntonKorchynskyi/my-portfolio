# Portfolio

A modern, accessible portfolio website showcasing full-stack development projects and skills.

Built with React, TypeScript, and Vite.

## Features

- **Hero Section**: Enhanced value proposition with clear CTAs and career goals
- **About Me**: Personal narrative and career journey
- **Projects**: Case studies with problem/process/outcome structure
- **Skills**: Categorized technical skills with proficiency indicators
- **Work Experience**: Timeline of professional projects
- **Contact Form**: Integrated contact form with backend service support
- **Resume Download**: Easy access to resume PDF from multiple locations
- **Footer**: Social links and site information

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your information in `src/config.ts`:
   - Update GitHub, LinkedIn URLs
   - Add your email address
   - Customize career goals statement
   - Configure contact form service (EmailJS/Formspree)

3. Add assets:
   - Place resume PDF in `public/resume.pdf`
   - Add professional headshot to `src/assets/`
   - Add project screenshots to `src/assets/`

4. Run development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS (Custom design system with CSS variables)

## Project Structure

```
src/
├── components/     # React components
├── config.ts       # Configuration file (URLs, email, etc.)
├── App.tsx         # Main app component
└── index.css       # Global styles
```

## Configuration

All site-specific content is centralized in `src/config.ts` for easy updates.