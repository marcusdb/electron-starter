# create-electron-vite-app

Create Electron applications with React, Vite, TailwindCSS, shadcn/ui, Storybook, and Vitest.

## Usage

```bash
# With npm
npm create electron-vite-app my-app

# With yarn  
yarn create electron-vite-app my-app

# With pnpm
pnpm create electron-vite-app my-app

# With Bun
bunx create-electron-vite-app my-app
```

## What's Included

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🖥️ **Electron** - Cross-platform desktop apps
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful and accessible components
- 📚 **Storybook** - Component development environment  
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 📝 **TypeScript** - Type safety out of the box
- 🔍 **ESLint** - Code linting and formatting

## Development Workflow

After creating your app:

```bash
cd my-app
yarn install
yarn electron:dev  # Start development mode
```

Additional commands:
- `yarn dev` - Start Vite dev server only
- `yarn test` - Run tests
- `yarn test:ui` - Run tests with UI
- `yarn storybook` - Start Storybook
- `yarn build` - Build for production
- `yarn electron:build` - Build Electron app

## Publishing

To publish this create package:

1. Update version in `package.json`
2. Run `npm publish`
3. Users can then use `npm create electron-vite-app`

## License

MIT 