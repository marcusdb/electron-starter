# Development Guide

This guide covers detailed development information for working with this Electron Vite React template.

## Available Scripts

### Development
- `yarn dev` - Start Vite development server only
- `yarn electron:dev` - Start Electron in development mode (recommended)
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

## Detailed Project Structure

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

### Running Tests

```bash
# Run tests in watch mode
yarn test

# Run tests once
yarn test:run

# Run tests with UI interface
yarn test:ui
```

## Storybook

**Storybook** is configured for component development and documentation:
- Stories are co-located with components as `.stories.tsx` files
- TailwindCSS styles are automatically loaded
- All shadcn/ui components can be documented and tested in isolation

Access Storybook at `http://localhost:6006` when running `yarn storybook`.

### Creating Stories

Create story files alongside your components:

```typescript
// src/components/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from './MyComponent'

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  title: 'Components/MyComponent'
}

export default meta
type Story = StoryObj<typeof MyComponent>

export const Default: Story = {
  args: {
    // component props
  }
}
```

## Adding shadcn/ui Components

To add new shadcn/ui components, you can manually create them in `src/components/ui/` or use the shadcn CLI:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
```

The CLI will automatically:
- Add the component to `src/components/ui/`
- Install any required dependencies
- Update the component registry

## Building for Production

To build the application for production:

```bash
yarn electron:build
```

This will create distributable packages in the `release/` directory.

### Build Configuration

The build process is configured in:
- `vite.config.ts` - Vite build settings
- `electron-builder` configuration in `package.json`

## Development Workflow

1. **Start Development Server**
   ```bash
   yarn electron:dev
   ```

2. **Make Changes**
   - Edit React components in `src/`
   - Hot reload will update the UI instantly
   - Electron main process changes require restart

3. **Add Components**
   ```bash
   # Add shadcn/ui components
   npx shadcn-ui@latest add button
   
   # Create custom components in src/components/
   ```

4. **Write Tests**
   ```bash
   # Create test files alongside components
   # MyComponent.test.tsx
   ```

5. **Document in Storybook**
   ```bash
   # Create story files
   # MyComponent.stories.tsx
   ```

6. **Build for Production**
   ```bash
   yarn electron:build
   ```

## Technologies Used

- [Electron](https://electronjs.org/) - Desktop app framework
- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [TypeScript](https://typescriptlang.org/) - Type safety
- [Storybook](https://storybook.js.org/) - Component development
- [Vitest](https://vitest.dev/) - Unit testing framework

## Troubleshooting

### Common Issues

**Electron app doesn't start:**
- Check if Node.js version is 18+
- Try `yarn install` to refresh dependencies
- Check console for error messages

**Hot reload not working:**
- Ensure you're running `yarn electron:dev`
- Check if ports 5173 (Vite) and 5174 (Electron) are available

**Build failures:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && yarn install`
- Check TypeScript errors: `yarn tsc --noEmit`

**Tests not running:**
- Check Vitest configuration in `vitest.config.ts`
- Ensure test files have `.test.tsx` or `.spec.tsx` extension

### Performance Tips

- Use React DevTools for component debugging
- Profile with Chrome DevTools in Electron
- Optimize bundle size with Vite bundle analyzer
- Use lazy loading for large components

## Contributing

When contributing to this template:

1. Keep the template minimal but functional
2. Ensure all scripts work correctly
3. Update documentation for any changes
4. Test the template creation process
5. Follow the existing code style and patterns 