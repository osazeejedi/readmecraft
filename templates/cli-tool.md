# {{projectName}}

<div align="center">

![Build Status](https://github.com/{{repoUrl}}/workflows/CI/badge.svg)
![npm version](https://img.shields.io/npm/v/{{projectName}}.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**{{description}}**

A powerful command-line tool for developers

</div>

## 🚀 Quick Start

```bash
# Install globally
npm install -g {{projectName}}

# Run
{{projectName}} --help
```

## 📦 Installation

### Global Installation (Recommended)

```bash
npm install -g {{projectName}}
```

### Local Installation

```bash
npm install {{projectName}}
```

### Using npx (No Installation)

```bash
npx {{projectName}} [command]
```

## 📚 Commands

### Main Command

```bash
{{projectName}} [options] [command]
```

**Global Options:**
- `-h, --help` - Display help information
- `-v, --version` - Show version number
- `--verbose` - Enable verbose output
- `--quiet` - Suppress non-error output

### Available Commands

#### `init`
Initialize a new project

```bash
{{projectName}} init [project-name]

Options:
  -t, --template <type>    Template to use
  -y, --yes               Skip prompts, use defaults
  -f, --force             Overwrite existing files
```

**Example:**
```bash
{{projectName}} init my-project --template basic
```

#### `build`
Build the project

```bash
{{projectName}} build [options]

Options:
  -w, --watch             Watch for changes
  -p, --production        Production build
  -o, --output <dir>      Output directory
```

**Example:**
```bash
{{projectName}} build --production --output dist
```

#### `dev`
Start development server

```bash
{{projectName}} dev [options]

Options:
  -p, --port <number>     Port number (default: 3000)
  -h, --host <address>    Host address
  --hot                   Enable hot reload
```

**Example:**
```bash
{{projectName}} dev --port 8080 --hot
```

#### `deploy`
Deploy your project

```bash
{{projectName}} deploy [target]

Targets:
  production              Deploy to production
  staging                 Deploy to staging
  preview                 Create preview deployment
```

## ⚙️ Configuration

Create a `{{projectName}}.config.js` in your project root:

```javascript
module.exports = {
  // Build settings
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: true
  },
  
  // Development settings
  dev: {
    port: 3000,
    hot: true
  },
  
  // Deployment settings
  deploy: {
    target: 'production',
    region: 'us-east-1'
  }
};
```

### JSON Configuration

Or use `{{projectName}}.json`:

```json
{
  "build": {
    "outDir": "dist",
    "minify": true
  },
  "dev": {
    "port": 3000
  }
}
```

## 🎯 Examples

### Example 1: Quick Project Setup

```bash
# Initialize new project
{{projectName}} init my-app --template react

# Start development
cd my-app
{{projectName}} dev

# Build for production
{{projectName}} build --production
```

### Example 2: CI/CD Integration

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install -g {{projectName}}
      - run: {{projectName}} build --production
      - run: {{projectName}} deploy production
```

### Example 3: Scripting

```bash
#!/bin/bash

# Build and deploy script
set -e

echo "Building project..."
{{projectName}} build --production

echo "Running tests..."
npm test

echo "Deploying..."
{{projectName}} deploy production

echo "✅ Deployment complete!"
```

## 🔌 Plugins

{{projectName}} supports plugins for extending functionality:

```javascript
// {{projectName}}.config.js
module.exports = {
  plugins: [
    '@{{projectName}}/plugin-typescript',
    '@{{projectName}}/plugin-sass',
    ['@{{projectName}}/plugin-custom', {
      option: 'value'
    }]
  ]
};
```

## 🐛 Troubleshooting

### Common Issues

**Issue:** Command not found

**Solution:**
```bash
# Ensure global installation
npm install -g {{projectName}}

# Or use npx
npx {{projectName}} --version
```

**Issue:** Permission denied

**Solution:**
```bash
# macOS/Linux
sudo npm install -g {{projectName}}

# Or configure npm prefix
npm config set prefix ~/.npm-global
```

### Debug Mode

Enable verbose output for troubleshooting:

```bash
{{projectName}} --verbose [command]
```

## 📖 Documentation

- [Full Documentation](https://{{projectName}}.dev/docs)
- [API Reference](https://{{projectName}}.dev/api)
- [Examples](https://{{projectName}}.dev/examples)
- [Changelog](CHANGELOG.md)

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT © {{year}} {{author}}

## 👥 Authors

**{{author}}**
- GitHub: [@{{author}}](https://github.com/{{author}})
- Website: https://{{author}}.dev

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by modern CLI tools
- Built with Commander.js

## ⭐ Show Support

If {{projectName}} helps you, please ⭐ star the repository!

---

<div align="center">
Made with ❤️ by {{author}}
</div>
