# Contributing to Electron Vite React Starter Template

Thank you for your interest in contributing to this template! This guide will help you get started.

## 🎯 Project Goals

This template aims to provide:
- A modern, production-ready Electron + React setup
- Best practices and developer experience
- Minimal but comprehensive feature set
- Easy template usage and customization

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- Yarn package manager
- Git

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/electron-vite-starter.git
   cd electron-vite-starter
   ```

2. **Install Dependencies**
   ```bash
   yarn install
   ```

3. **Start Development**
   ```bash
   yarn electron:dev
   ```

4. **Run Tests**
   ```bash
   yarn test
   ```

## 📋 How to Contribute

### Reporting Issues

- Use GitHub Issues to report bugs or suggest features
- Include steps to reproduce bugs
- Specify Node.js and OS versions
- Check existing issues first to avoid duplicates

### Submitting Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make Changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   yarn test
   yarn lint
   yarn electron:build
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve bug description"
   ```

5. **Push and Create PR**
   ```bash
   git push origin your-branch-name
   ```
   Then create a Pull Request on GitHub.

## 🎨 Code Style

### General Guidelines

- Use TypeScript for all new code
- Follow existing naming conventions
- Keep components small and focused
- Add JSDoc comments for public APIs
- Use meaningful commit messages

### React Components

```typescript
// Good
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Testing

- Write tests for new components and utilities
- Use descriptive test names
- Test both happy path and edge cases
- Keep tests simple and focused

```typescript
// Good
describe('Button', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

## 🔧 Development Scripts

```bash
# Development
yarn electron:dev    # Start development server
yarn dev            # Start Vite only
yarn storybook      # Start Storybook

# Testing
yarn test           # Run tests in watch mode
yarn test:run       # Run tests once
yarn test:ui        # Run tests with UI

# Build
yarn build          # Build for production
yarn electron:build # Build Electron app

# Quality
yarn lint           # Run ESLint
yarn type-check     # Check TypeScript
```

## 📁 Project Structure Guidelines

### Adding New Features

- **Components**: Add to `src/components/`
- **Utilities**: Add to `src/lib/`
- **Types**: Add to appropriate files or create new ones
- **Tests**: Co-locate with source files (`.test.tsx`)
- **Stories**: Co-locate with components (`.stories.tsx`)

### Template Variables

When adding features that should be customizable in generated projects, use these template variables:

- `{{project-name}}` - Project name (kebab-case)
- `{{app-name}}` - Application display name
- `{{project-description}}` - Project description
- `{{app-id}}` - Application ID (reverse domain notation)

## 🧪 Testing Guidelines

### What to Test

- Component rendering and behavior
- User interactions (clicks, form submissions)
- Utility functions
- Error handling
- Accessibility features

### Testing Tools

- **Vitest** - Test runner
- **Testing Library** - Component testing
- **jsdom** - DOM environment
- **MSW** - API mocking (if needed)

## 📚 Documentation

### Update Documentation When

- Adding new features or components
- Changing existing APIs
- Adding new scripts or tools
- Fixing bugs that might affect users

### Documentation Files

- `README.md` - Template usage and quick start
- `DEVELOPMENT.md` - Detailed development guide
- `CONTRIBUTING.md` - This file
- `TEMPLATE_USAGE.md` - Template publishing guide

## 🎯 Template Considerations

### Keep It Minimal

- Only include essential features
- Avoid opinionated choices when possible
- Let users customize based on their needs

### Ensure Flexibility

- Use configuration files over hard-coded values
- Provide clear extension points
- Document customization options

### Test Template Generation

Before submitting changes, test that:
- The template can be used to create new projects
- All scripts work in generated projects
- Build process completes successfully
- Documentation is accurate

## 🚀 Release Process

1. **Update Version**
   ```bash
   npm version patch|minor|major
   ```

2. **Update Changelog**
   - Document new features and fixes
   - Follow semantic versioning

3. **Test Release**
   - Test template creation process
   - Verify all examples work

4. **Create Release**
   - Push tags to GitHub
   - Create GitHub release
   - Publish to npm (if applicable)

## 💡 Ideas for Contributions

### Features We'd Love

- Additional UI component examples
- Better error handling examples
- Performance optimization guides
- Additional testing utilities
- CI/CD configuration examples

### Areas for Improvement

- Documentation clarity
- Developer experience enhancements
- Build process optimization
- Template customization options

## 📞 Getting Help

- Create an issue for bugs or questions
- Join discussions on GitHub
- Check existing documentation first

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🙏 