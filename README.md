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

---

# React + TypeScript + Vite

This project uses Vite for fast development and builds.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
