#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'
import { bold, cyan, green, red } from 'kleur/colors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  console.log(bold(cyan('Create Electron + Vite + React App')))
  console.log()

  const targetDir = process.argv[2]
  
  const result = await prompts([
    {
      type: targetDir ? null : 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-electron-app',
      validate: (name) => {
        if (!name) return 'Project name is required'
        if (!/^[a-z0-9-]+$/.test(name)) return 'Project name must be lowercase with hyphens'
        return true
      }
    },
    {
      type: 'text',
      name: 'appName',
      message: 'App display name:',
      initial: (prev) => prev?.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ') || 'My Electron App'
    },
    {
      type: 'text',
      name: 'description',
      message: 'Project description:',
      initial: 'A modern Electron application'
    },
    {
      type: 'text',
      name: 'appId',
      message: 'App ID (reverse domain):',
      initial: 'com.example.app'
    }
  ])

  if (!result.projectName && !targetDir) {
    console.log(red('Operation cancelled.'))
    process.exit(1)
  }

  const projectName = targetDir || result.projectName
  const projectDir = path.resolve(process.cwd(), projectName)

  if (fs.existsSync(projectDir)) {
    console.log(red(`Directory ${projectName} already exists!`))
    process.exit(1)
  }

  console.log()
  console.log(`Creating ${bold(projectName)} in ${green(projectDir)}`)
  console.log()

  // Copy template files
  const templateDir = path.join(__dirname, 'template')
  copyDir(templateDir, projectDir)

  // Replace placeholders
  const replacements = {
    '{{project-name}}': projectName,
    '{{app-name}}': result.appName,
    '{{project-description}}': result.description,
    '{{app-id}}': result.appId
  }

  replaceInFiles(projectDir, replacements)

  console.log(green('✓ Project created successfully!'))
  console.log()
  console.log('Next steps:')
  console.log(`  cd ${projectName}`)
  console.log('  yarn install')
  console.log('  yarn electron:dev')
  console.log()
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function replaceInFiles(dir, replacements) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      replaceInFiles(fullPath, replacements)
    } else if (entry.isFile()) {
      let content = fs.readFileSync(fullPath, 'utf8')
      
      for (const [placeholder, value] of Object.entries(replacements)) {
        content = content.replaceAll(placeholder, value)
      }
      
      fs.writeFileSync(fullPath, content)
    }
  }
}

main().catch(console.error) 