# Botanic Energy Website

This project is a modern web application built with React, TypeScript, and Vite, styled using Tailwind CSS and the shadcn/ui component library. It features custom animations and is configured for deployment to GitHub Pages.

## Technologies Used

*   **Framework:** [React](https://reactjs.org/) (v18)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:**
    *   [Tailwind CSS](https://tailwindcss.com/) (v3)
    *   [shadcn/ui](https://ui.shadcn.com/) (Component library built on Radix UI & Tailwind)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **State Management:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) resolver
*   **Linting:** [ESLint](https://eslint.org/)
*   **Package Manager:** [npm](https://www.npmjs.com/) (using `package-lock.json`)
*   **Deployment:** [GitHub Actions](https://github.com/features/actions) for [GitHub Pages](https://pages.github.com/)

## Project Structure

```
bontaic-energy-website/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow for deployment
├── docs/                   # Build output directory (configured in vite.config.ts)
├── public/                 # Static assets served directly
├── src/
│   ├── components/         # Reusable UI components (including shadcn/ui)
│   │   └── ui/             # Default location for shadcn/ui components
│   ├── lib/                # Utility functions (e.g., `cn` from shadcn/ui)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # (Assumed) Page-level components/views
│   ├── assets/             # (Assumed) Project-specific assets like images
│   └── index.css           # Global styles and Tailwind directives
│   └── main.tsx            # Main application entry point
├── .gitignore              # Specifies intentionally untracked files
├── components.json         # shadcn/ui configuration
├── index.html              # HTML entry point for Vite
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Exact dependency versions
├── postcss.config.js       # PostCSS configuration (for Tailwind)
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.app.json       # TypeScript config for the application code
├── tsconfig.node.json      # TypeScript config for Node.js scripts (like Vite config)
└── vite.config.ts          # Vite build tool configuration
```

**Key Configuration Points:**

*   **`vite.config.ts`**:
    *   Configures Vite build settings.
    *   Sets the `base` path to `/bontaic-energy-website/` when building for GitHub Pages (`DEPLOY_TARGET=ghpages`).
    *   Sets the output directory (`build.outDir`) to `docs`.
    *   Defines path alias `@` resolving to `./src`.
    *   Organizes built assets (JS, CSS, images, videos) into subdirectories within `docs/assets`.
*   **`tailwind.config.ts`**:
    *   Defines custom fonts: `Inter` (sans-serif) and `Poppins` (display).
    *   Includes custom color palette (`botanicRed`, `botanicPurple`, etc.).
    *   Configures custom animations: `fade-in`, `fade-in-right`, `fade-in-left`, `slide-in-bottom`, `float`, `pulse-subtle`.
    *   Uses the `tailwindcss-animate` plugin.
*   **`components.json`**:
    *   Specifies shadcn/ui settings (style: `default`, baseColor: `slate`).
    *   Defines aliases used by the shadcn/ui CLI (`@/components`, `@/lib/utils`, etc.).

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended, as used in deployment workflow)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Lochy2000/botanic-website.git
    cd botanic-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Note: The deployment workflow uses `npm ci` which installs based on `package-lock.json`. Using `npm install` locally is standard practice.)*

### Running the Development Server

*   To start the Vite development server with hot module replacement:
    ```bash
    npm run dev
    ```
    This will typically open the application in your default browser at `http://localhost:5173` (or the next available port).

### Building for Production

*   **Standard Build:**
    ```bash
    npm run build
    ```
    This builds the application into the `docs/` directory using standard settings.
*   **GitHub Pages Build:**
    ```bash
    npm run build:ghpages
    ```
    This script specifically sets the `DEPLOY_TARGET=ghpages` environment variable before running `vite build`. This ensures the correct `base` path (`/bontaic-energy-website/`) is used in the build output, making it suitable for deployment to `https://Lochy2000.github.io/botanic-website/`.

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Creates a production build in the `docs/` folder.
*   `npm run build:ghpages`: Creates a production build specifically configured for GitHub Pages deployment.
*   `npm run lint`: Runs ESLint to check for code style and potential errors.
*   `npm run preview`: Starts a local server to preview the production build from the `docs/` folder.

## Deployment

This project is automatically deployed to GitHub Pages via a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

*   **Trigger:** The workflow runs on every `push` to the `main` branch.
*   **Process:**
    1.  Checks out the repository.
    2.  Sets up Node.js v18.
    3.  Installs dependencies using `npm ci`.
    4.  Builds the application using `npm run build:ghpages`.
    5.  Uploads the contents of the `docs/` directory as a GitHub Pages artifact.
    6.  Deploys the artifact to GitHub Pages.

The deployed site will be available at the URL specified in your repository's Pages settings (likely `https://Lochy2000.github.io/botanic-website/`).
