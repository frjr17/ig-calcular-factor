# Economic Calculator

This web application is built with **React**, **TypeScript** and **Vite** to quickly compute common financial factors and interest rates. It is useful for engineering economics courses and basic calculations related to interest and equivalence factors.

## Technology stack

- **React 19** and **Vite 6** for the UI.
- **TypeScript 5** for static typing.
- **Tailwind CSS 4** for styling.
- **Radix UI** and **react-hook-form** for accessible forms.
- **Zod** for validations.
- Automated deployment to **GitHub Pages** using **GitHub Actions**.

## Main features

- **Factor calculator**: computes values such as A/P, P/A, P/F, etc. from the interest rate and number of periods.
- **Interest calculator**: determines nominal, effective and annual interest based on the provided data.
- Reactive interface built with reusable components and dynamic forms.
- Styling with [Tailwind CSS](https://tailwindcss.com/).
- Automatic deployment to GitHub Pages via GitHub Actions.

## Requirements

- [Node.js](https://nodejs.org/) 18 or later
- [npm](https://www.npmjs.com/)

## Installation

Clone this repository and install the dependencies:

```bash
npm install
```

## Development

Start the development server with hot reloading:

```bash
npm run dev
```

Vite serves the app by default at `http://localhost:5173`.

## Build and preview

Create the production build with:

```bash
npm run build
```

Then preview the output locally:

```bash
npm run preview
```

The static files are generated in the `dist/` folder.

## Project structure

- `src/` – main source code.
  - `components/` – reusable form fields and other components.
  - `features/` – main views such as the factor and interest calculators.
  - `lib/` – utilities, constants and validation schemas.
- `public/` – static assets and the app icon.
- Configuration files: `vite.config.ts`, `tsconfig*.json`, `package.json`, `eslint.config.js`.

## Deployment

A GitHub Actions workflow builds the application and automatically publishes it to GitHub Pages every time there is a push to `master`.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
