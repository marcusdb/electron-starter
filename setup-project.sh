#!/bin/bash

# setup-project.sh - Simple script to create a new project from this template

PROJECT_NAME=$1
APP_NAME=$2
DESCRIPTION=$3
APP_ID=$4

# Function to show usage
show_usage() {
    echo "Usage: ./setup-project.sh <project-name> [app-name] [description] [app-id]"
    echo ""
    echo "Examples:"
    echo "  ./setup-project.sh my-electron-app"
    echo "  ./setup-project.sh my-electron-app \"My Electron App\""
    echo "  ./setup-project.sh my-electron-app \"My Electron App\" \"A cool desktop app\""
    echo "  ./setup-project.sh my-electron-app \"My Electron App\" \"A cool desktop app\" \"com.example.myapp\""
    echo ""
    echo "Arguments:"
    echo "  project-name    Required. Project folder name (kebab-case)"
    echo "  app-name        Optional. Display name for the app"
    echo "  description     Optional. Project description"
    echo "  app-id          Optional. App identifier (reverse domain notation)"
}

# Check if project name provided
if [ -z "$PROJECT_NAME" ]; then
    echo "❌ Error: Project name is required"
    echo ""
    show_usage
    exit 1
fi

# Validate project name format
if [[ ! "$PROJECT_NAME" =~ ^[a-z0-9-]+$ ]]; then
    echo "❌ Error: Project name must contain only lowercase letters, numbers, and hyphens"
    exit 1
fi

# Set defaults
if [ -z "$APP_NAME" ]; then
    # Convert kebab-case to Title Case
    APP_NAME=$(echo "$PROJECT_NAME" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
fi

if [ -z "$DESCRIPTION" ]; then
    DESCRIPTION="A modern Electron application"
fi

if [ -z "$APP_ID" ]; then
    APP_ID="com.example.$PROJECT_NAME"
fi

# Check if directory already exists
if [ -d "$PROJECT_NAME" ]; then
    echo "❌ Error: Directory '$PROJECT_NAME' already exists"
    exit 1
fi

echo "🚀 Creating new Electron project..."
echo "📁 Project name: $PROJECT_NAME"
echo "🏷️  App name: $APP_NAME"
echo "📝 Description: $DESCRIPTION"
echo "🆔 App ID: $APP_ID"
echo ""

# Create project directory
mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME"

# Copy all files except this script, git, and build artifacts
rsync -av \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='dist' \
    --exclude='dist-electron' \
    --exclude='release' \
    --exclude='storybook-static' \
    --exclude='coverage' \
    --exclude='setup-project.sh' \
    --exclude="$PROJECT_NAME" \
    ../ ./

# Replace placeholders in files
echo "🔧 Configuring project..."

# Function to replace placeholders in a file
replace_in_file() {
    local file=$1
    if [ -f "$file" ]; then
        sed -i.bak "s/{{project-name}}/$PROJECT_NAME/g" "$file"
        sed -i.bak "s/{{app-name}}/$APP_NAME/g" "$file"
        sed -i.bak "s/{{project-description}}/$DESCRIPTION/g" "$file"
        sed -i.bak "s/{{app-id}}/$APP_ID/g" "$file"
        rm "$file.bak"
    fi
}

# Replace placeholders in key files
replace_in_file "package.json"
replace_in_file "index.html"
replace_in_file "README.md"

# Initialize new git repository
echo "📦 Initializing Git repository..."
git init
git add .
git commit -m "Initial commit: $PROJECT_NAME

Generated from electron-vite-template with:
- Project: $PROJECT_NAME
- App: $APP_NAME
- Description: $DESCRIPTION
- App ID: $APP_ID"

echo ""
echo "✅ Project '$PROJECT_NAME' created successfully!"
echo ""
echo "Next steps:"
echo "  cd $PROJECT_NAME"
echo "  yarn install"
echo "  yarn electron:dev"
echo ""
echo "Optional:"
echo "  yarn test          # Run tests"
echo "  yarn storybook     # Start component development"
echo ""
echo "Happy coding! 🎉" 