# Electron React Vite Starter

A modern Electron application built with React, Vite, TailwindCSS, shadcn/ui, Storybook, and Vitest.

## Features

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🎯 **shadcn/ui** - Beautiful and accessible UI components
- 📦 **Electron** - Cross-platform desktop app framework
- 🔧 **TypeScript** - Type safety and better DX
- 🧹 **ESLint** - Code linting and formatting
- 📚 **Storybook** - Component development and documentation
- 🧪 **Vitest** - Fast unit testing with Vite

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Yarn package manager

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Start the development server:
```bash
yarn electron:dev
```

This will start both the Vite dev server and Electron application.

## Available Scripts

### Development
- `yarn dev` - Start Vite development server
- `yarn electron:dev` - Start Electron in development mode
- `yarn preview` - Preview production build

### Testing
- `yarn test` - Run tests in watch mode
- `yarn test:run` - Run tests once
- `yarn test:ui` - Run tests with UI interface

### Storybook
- `yarn storybook` - Start Storybook development server
- `yarn build-storybook` - Build Storybook for production

### Build & Production
- `yarn build` - Build for production
- `yarn electron:build` - Build Electron app for production
- `yarn lint` - Run ESLint

## Project Structure

```
├── .storybook/        # Storybook configuration
├── electron/          # Electron main process files
│   ├── main.ts        # Main Electron process
│   └── preload.ts     # Preload script
├── src/              # React application source
│   ├── components/   # React components
│   │   └── ui/       # shadcn/ui components
│   ├── lib/          # Utility functions
│   ├── test/         # Test setup and utilities
│   ├── App.tsx       # Main React component
│   ├── main.tsx      # React entry point
│   └── index.css     # Global styles with Tailwind
├── package.json      # Dependencies and scripts
├── vite.config.ts    # Vite configuration
├── vitest.config.ts  # Vitest configuration
├── tailwind.config.js # Tailwind configuration
└── components.json   # shadcn/ui configuration
```

## Testing

The project uses **Vitest** for unit testing with:
- **@testing-library/react** for component testing
- **@testing-library/jest-dom** for custom matchers
- **jsdom** environment for DOM testing

Example test files are located alongside components with `.test.tsx` extension.

## Storybook

**Storybook** is configured for component development and documentation:
- Stories are co-located with components as `.stories.tsx` files
- TailwindCSS styles are automatically loaded
- All shadcn/ui components can be documented and tested in isolation

Access Storybook at `http://localhost:6006` when running `yarn storybook`.

## Adding shadcn/ui Components

To add new shadcn/ui components, you can manually create them in `src/components/ui/` or use the shadcn CLI:

```bash
npx shadcn-ui@latest add button
```

## Building for Production

To build the application for production:

```bash
yarn electron:build
```

This will create distributable packages in the `release/` directory.

## Technologies Used

- [Electron](https://electronjs.org/) - Desktop app framework
- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [TypeScript](https://typescriptlang.org/) - Type safety
- [Storybook](https://storybook.js.org/) - Component development
- [Vitest](https://vitest.dev/) - Unit testing framework 