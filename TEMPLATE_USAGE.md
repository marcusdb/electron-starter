# Using This Project as a Template

This guide shows you different ways to use this Electron + React + Vite boilerplate as a template for new projects.

## 🎯 Quick Options

### Option 1: GitHub Template Repository (Simplest)

1. **Push this code to GitHub**
2. **Mark repository as template:**
   - Go to your GitHub repository
   - Click "Settings" tab
   - Scroll to "Template repository" section
   - Check "Template repository" checkbox

3. **Users can create new projects:**
   ```bash
   # Using GitHub's template feature
   https://github.com/yourusername/electron-vite-template/generate
   
   # Or using degit
   npx degit yourusername/electron-vite-template my-new-app
   cd my-new-app
   yarn install
   ```

### Option 2: Create Package (Like create-react-app)

The `create-electron-vite-app/` folder contains a complete npm create package.

**To publish:**
```bash
cd create-electron-vite-app
npm publish
```

**Users can then use:**
```bash
npm create electron-vite-app my-app
# or
yarn create electron-vite-app my-app
# or  
pnpm create electron-vite-app my-app
```

### Option 3: Direct Clone with Customization Script

Create a simple setup script:

```bash
#!/bin/bash
# setup-project.sh

PROJECT_NAME=$1
APP_NAME=$2
APP_ID=$3

if [ -z "$PROJECT_NAME" ]; then
  echo "Usage: ./setup-project.sh <project-name> [app-name] [app-id]"
  exit 1
fi

# Clone template
git clone https://github.com/yourusername/electron-vite-template.git "$PROJECT_NAME"
cd "$PROJECT_NAME"

# Remove git history
rm -rf .git

# Replace placeholders
sed -i '' "s/{{project-name}}/$PROJECT_NAME/g" package.json index.html
sed -i '' "s/{{app-name}}/${APP_NAME:-$PROJECT_NAME}/g" package.json index.html
sed -i '' "s/{{project-description}}/A modern Electron application/g" package.json
sed -i '' "s/{{app-id}}/${APP_ID:-com.example.app}/g" package.json

# Install dependencies
yarn install

echo "✅ Project $PROJECT_NAME created successfully!"
echo "Next steps:"
echo "  cd $PROJECT_NAME"
echo "  yarn electron:dev"
```

## 🔧 Template Structure

### Placeholder Variables

The template uses these placeholder patterns:

- `{{project-name}}` - Project name (kebab-case)
- `{{app-name}}` - Display name for the application
- `{{project-description}}` - Project description
- `{{app-id}}` - Application ID (reverse domain notation)

### Files with Placeholders

- `package.json` - Name, description, app ID, product name
- `index.html` - Page title
- `README.md` - Project-specific information

## 🚀 Advanced Usage

### Using with Different Package Managers

**For npm:**
```bash
npx create-electron-vite-app my-app
```

**For yarn:**
```bash
yarn create electron-vite-app my-app
```

**For pnpm:**
```bash
pnpm create electron-vite-app my-app
```

**For Bun:**
```bash
bunx create-electron-vite-app my-app
```

### Custom Template Variants

You can create different variants by:

1. **Creating branches for different configurations:**
   ```bash
   git checkout -b minimal  # Minimal version without Storybook
   git checkout -b full     # Full version with all features
   ```

2. **Using directory-based templates:**
   ```
   templates/
   ├── minimal/
   ├── full/
   └── typescript-strict/
   ```

### Integration with Scaffolding Tools

**Using with Yeoman:**
```javascript
// generators/app/index.js
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: this.appname
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      this.answers
    );
  }
};
```

**Using with Plop:**
```javascript
// plopfile.js
module.exports = function (plop) {
  plop.setGenerator('electron-app', {
    description: 'Create Electron app',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Project name:'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: '{{name}}/',
        base: 'templates/electron/',
        templateFiles: 'templates/electron/**/*'
      }
    ]
  });
};
```

## 📦 Publishing Your Create Package

1. **Update package.json in create-electron-vite-app/**
2. **Test locally:**
   ```bash
   cd create-electron-vite-app
   npm link
   npm link create-electron-vite-app
   create-electron-vite-app test-app
   ```

3. **Publish to npm:**
   ```bash
   npm publish
   ```

4. **Update documentation and examples**

## 🎨 Customizing the Template

### Adding New Features

1. **Add to the base template**
2. **Update package.json dependencies**
3. **Add configuration files**
4. **Update README.md template**
5. **Add to create-app prompts if needed**

### Removing Features

1. **Remove from package.json**
2. **Remove configuration files**
3. **Update scripts**
4. **Clean up dependencies**

## 🔍 Testing Your Template

Before publishing, test your template:

```bash
# Test the create package locally
cd create-electron-vite-app
npm pack
npm install -g create-electron-vite-app-1.0.0.tgz
create-electron-vite-app test-project

# Test the generated project
cd test-project
yarn install
yarn test
yarn storybook
yarn electron:dev
```

## 📚 Resources

- [GitHub Template Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
- [npm create packages](https://docs.npmjs.com/cli/v8/commands/npm-init)
- [degit - Straightforward project scaffolding](https://github.com/Rich-Harris/degit)
- [Yeoman - Web app scaffolding tool](https://yeoman.io/)
- [Plop - Micro-generator framework](https://plopjs.com/)

## 💡 Best Practices

1. **Keep placeholders consistent** - Use `{{variable}}` format
2. **Test thoroughly** - Test template generation and resulting projects
3. **Document well** - Provide clear usage instructions
4. **Version appropriately** - Use semantic versioning
5. **Include examples** - Show real usage examples
6. **Keep templates minimal** - Don't over-engineer the base template
7. **Provide variants** - Offer different configurations for different needs 