# Electron Vite React Starter Template

A modern, production-ready Electron application template built with React, Vite, TailwindCSS, shadcn/ui, Storybook, and Vitest.

## 🚀 Quick Start

Create a new Electron app using this template:

```bash
npx create-electron-vite-app@latest my-app
cd my-app
yarn install
yarn electron:dev
```

## ✨ What's Included

- ⚡️ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18** - Modern React with hooks and concurrent features
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🎯 **shadcn/ui** - Beautiful, accessible UI components
- 📦 **Electron** - Cross-platform desktop app framework
- 🔧 **TypeScript** - Full type safety throughout
- 🧹 **ESLint** - Code linting with best practices
- 📚 **Storybook** - Component development and documentation
- 🧪 **Vitest** - Fast unit testing framework
- 🎭 **Testing Library** - Component testing utilities

## 📋 Prerequisites

- **Node.js** 18 or higher
- **Yarn** package manager

## 🎯 Template Usage Options

### Option 1: Using npx (Recommended)
```bash
npx create-electron-vite-app@latest my-awesome-app
```

### Option 2: GitHub Template
1. Click "Use this template" on GitHub
2. Clone your new repository
3. Install dependencies and start developing

### Option 3: Manual Clone
```bash
git clone https://github.com/yourusername/electron-vite-starter.git my-app
cd my-app
rm -rf .git
git init
yarn install
```

## 🏃‍♂️ Development Workflow

```bash
# Install dependencies
yarn install

# Start development (launches both Vite dev server and Electron)
yarn electron:dev

# Run tests
yarn test

# Start Storybook
yarn storybook

# Build for production
yarn electron:build
```

## 📁 Project Structure

```
my-app/
├── electron/          # Electron main process
├── src/              # React application
│   ├── components/   # React components
│   │   └── ui/       # shadcn/ui components
│   └── lib/          # Utilities
├── .storybook/       # Storybook config
└── package.json      # Dependencies & scripts
```

## 🛠️ Customization

After creating your project:

1. **Update package.json** with your app details
2. **Customize Electron settings** in `electron/main.ts`
3. **Add shadcn/ui components**: `npx shadcn-ui@latest add button`
4. **Configure app icon and metadata** for distribution

## 📚 Documentation

For detailed development information, see:
- [DEVELOPMENT.md](DEVELOPMENT.md) - Development guide and available scripts
- [TEMPLATE_USAGE.md](TEMPLATE_USAGE.md) - Advanced template usage and publishing

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and contribution guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Happy building! 🎉** 