# julianschievelkamp.github.io

Personal project overview, published at <https://julianschievelkamp.github.io/>.

Built with React, TypeScript, Vite and styled-components.

## Getting started

Requires Node.js and Yarn 4.

```sh
yarn install
yarn start
```

## Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `yarn start`        | Start the Vite dev server                |
| `yarn build`        | Type-check and create a production build |
| `yarn preview`      | Serve the production build locally       |
| `yarn lint`         | Run ESLint                               |
| `yarn format`       | Format all files with Prettier           |
| `yarn format:check` | Check formatting without changing files  |
| `yarn deploy`       | Build and publish `dist` to GitHub Pages |

## Project structure

```
src/
├── assets/      Fonts, icons and images
├── data/        Content (texts, projects)
├── elements/
│   ├── components/   Reusable building blocks (Text, Link, Icon, ...)
│   ├── layout/       Page sections (Header, ProjectList, ...)
│   └── pages/        Top-level pages (App)
└── styles/      Design tokens, global styles and animations
```

Every component lives in its own folder as `Name.tsx` plus `Name.styles.ts`.
Colors, transitions and media queries are defined once in `src/styles/variables.ts`.

## Adding a project

Add an entry to `projectData` in `src/data/projectData.ts`.
