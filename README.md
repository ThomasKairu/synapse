# Synapseflow Solutions - Portfolio Website

A modern, neural network-inspired portfolio website for Synapseflow Solutions, showcasing full-stack development expertise and enterprise-level projects.

## Features

- 🧠 Neural network animated background
- 🎨 Glassmorphism design with aurora gradients
- 📱 Fully responsive design
- 🌙 Dark/Light theme toggle
- ⚡ Built with React, TypeScript, and Tailwind CSS
- 🚀 Optimized for performance

## Live Projects Showcased

- **Jobix** - AI-Powered Resume Analyzer: https://www.jobix.publicvm.com
- **Airnet** - ISP Service Platform: https://airnet.pages.dev
- **Bridges** - NetArchitect Technology Agency: https://www.bridges.linkpc.net
- **Glows** - BrightPath Business Consulting: https://www.glows.work.gd

## Deployment to Cloudflare Pages

### Option 1: Using Cloudflare Dashboard

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Upload the `dist` folder contents
5. Your site will be deployed automatically

### Option 2: Using Wrangler CLI

1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   npm run build
   wrangler pages deploy dist --project-name synapseflow-solutions
   ```

### Option 3: Git Integration

1. Push your code to GitHub/GitLab
2. Connect your repository to Cloudflare Pages
3. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18+

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Hosting**: Cloudflare Pages

## Contact

- **Email**: thomas@synapseflow.dev
- **Location**: Nairobi, Kenya
- **GitHub**: https://github.com/ThomasKairu

---

© 2024 Synapseflow Solutions. All rights reserved.

---

## Original Vite + React + TypeScript Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
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
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```