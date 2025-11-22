# ReadmeCraft CLI Documentation

Complete guide to using ReadmeCraft from the command line.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Commands](#commands)
- [Examples](#examples)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

## Installation

### Global Installation

```bash
npm install -g readmecraft
```

After installation, the `readmecraft` command will be available globally.

### Local Installation

```bash
npm install readmecraft
```

Use with npx:
```bash
npx readmecraft [command]
```

### Development Installation

```bash
git clone https://github.com/osazeejedi/readmecraft.git
cd readmecraft
npm install
npm run build
node dist/cli.js [command]
```

## Getting Started

### Quick Start

Generate a simple README:
```bash
readmecraft create --name "My Project"
```

Generate badges:
```bash
readmecraft badges -u yourusername -r yourrepo
```

View all available commands:
```bash
readmecraft --help
```

## Commands

### `create`

Create a complete README from a template.

**Syntax:**
```bash
readmecraft create [options]
```

**Options:**
- `-t, --template <template>` - Template to use (simple, advanced). Default: simple
- `-n, --name <name>` - Project name. Default: my-project
- `-d, --description <desc>` - Project description. Default: A great project
- `--author <author>` - Author name
- `--repo-url <url>` - Repository URL
- `-o, --output <file>` - Output file. Default: README.md

**Examples:**

Simple README:
```bash
readmecraft create --name "awesome-tool"
```

Advanced README with all details:
```bash
readmecraft create \
  --template advanced \
  --name "awesome-api" \
  --description "A powerful REST API" \
  --author "Jane Doe" \
  --repo-url "https://github.com/janedoe/awesome-api" \
  --output README.md
```

Custom output location:
```bash
readmecraft create -n "my-lib" -o docs/README.md
```

### `badges`

Generate badges for your README.

**Syntax:**
```bash
readmecraft badges [options]
```

**Options:**
- `-u, --username <username>` - GitHub username (required)
- `-r, --repo <repo>` - Repository name (required)
- `-p, --package <package>` - NPM package name
- `-l, --license <license>` - License type (e.g., MIT)
- `--languages <languages>` - Comma-separated list of languages
- `-o, --output <file>` - Output to file

**Examples:**

Basic badges:
```bash
readmecraft badges -u octocat -r hello-world
```

Full badge set:
```bash
readmecraft badges \
  -u octocat \
  -r hello-world \
  -p hello-world \
  -l MIT \
  --languages "TypeScript,JavaScript,Python"
```

Save to file:
```bash
readmecraft badges -u user -r repo -o badges.md
```

### `section`

Generate a specific README section.

**Syntax:**
```bash
readmecraft section <type> [options]
```

**Section Types:**
- `installation` - Installation instructions
- `usage` - Usage examples
- `contributing` - Contributing guidelines
- `license` - License information

**Options:**
- `-n, --name <name>` - Project name
- `-d, --description <description>` - Project description
- `--author <author>` - Author name
- `--repo-url <url>` - Repository URL
- `-o, --output <file>` - Output to file

**Examples:**

Installation section:
```bash
readmecraft section installation --name my-package
```

Contributing section:
```bash
readmecraft section contributing \
  --repo-url "https://github.com/user/repo"
```

License section:
```bash
readmecraft section license --author "John Doe"
```

Usage section:
```bash
readmecraft section usage \
  --name my-tool \
  --description "A helpful CLI tool"
```

### `templates`

List available templates.

**Syntax:**
```bash
readmecraft templates
```

**Output:**
```
📚 Available Templates:

  • simple - Minimalist README for small projects
  • advanced - Comprehensive README with all sections

Usage: readmecraft create --template <name>
```

### `init`

Interactive README generator (coming soon).

**Syntax:**
```bash
readmecraft init
```

This feature will guide you through creating a README with interactive prompts.

## Examples

### Example 1: Complete Project Setup

```bash
# Generate README
readmecraft create \
  --template advanced \
  --name "my-awesome-api" \
  --description "A REST API for awesome things" \
  --author "Jane Developer" \
  --repo-url "https://github.com/jane/my-awesome-api"

# Generate badges
readmecraft badges \
  -u jane \
  -r my-awesome-api \
  -p my-awesome-api \
  -l MIT \
  -o badges.md

# Combine them
cat badges.md README.md > FINAL_README.md
```

### Example 2: Update Only Badges

```bash
# Generate new badges
readmecraft badges \
  -u myusername \
  -r myrepo \
  --languages "TypeScript,React,Node.js" \
  -o new-badges.md

# Replace old badges in README (manual or script)
```

### Example 3: Generate Multiple Sections

```bash
# Installation
readmecraft section installation -n my-tool -o install.md

# Usage
readmecraft section usage -n my-tool -o usage.md

# Contributing
readmecraft section contributing --repo-url "https://github.com/me/repo" -o contrib.md

# Combine
cat install.md usage.md contrib.md > sections.md
```

### Example 4: CI/CD Integration

In `.github/workflows/update-readme.yml`:

```yaml
name: Update README
on:
  push:
    branches: [main]
    
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install -g readmecraft
      - run: |
          readmecraft badges \
            -u ${{ github.repository_owner }} \
            -r ${{ github.event.repository.name }} \
            -o badges.md
      - run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add badges.md
          git commit -m "docs: update badges" || exit 0
          git push
```

## Configuration

### Environment Variables

You can set default values using environment variables:

```bash
export READMECRAFT_AUTHOR="Your Name"
export READMECRAFT_LICENSE="MIT"
export READMECRAFT_TEMPLATE="advanced"
```

### NPM Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "docs": "readmecraft create -n myproject -o README.md",
    "docs:badges": "readmecraft badges -u user -r repo -o badges.md",
    "docs:all": "npm run docs && npm run docs:badges"
  }
}
```

Then run:
```bash
npm run docs
```

## Troubleshooting

### Command Not Found

**Problem:** `readmecraft: command not found`

**Solution:**
```bash
# Install globally
npm install -g readmecraft

# Or use npx
npx readmecraft --help

# Check installation
which readmecraft
```

### Permission Errors

**Problem:** `EACCES: permission denied`

**Solution:**
```bash
# Use sudo (macOS/Linux)
sudo npm install -g readmecraft

# Or configure npm to use a different directory
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

### TypeScript Errors

**Problem:** Build fails with TypeScript errors

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Badge Generation Issues

**Problem:** Badges not displaying correctly

**Solution:**
- Check GitHub username and repo name are correct
- Ensure repository is public
- Verify package name exists on npm (if using -p flag)

### Output File Errors

**Problem:** Cannot write to output file

**Solution:**
```bash
# Check directory exists
mkdir -p docs
readmecraft create -o docs/README.md

# Check permissions
ls -la docs/
chmod 755 docs/
```

## Advanced Usage

### Piping Output

```bash
# Pipe to file
readmecraft badges -u user -r repo > badges.txt

# Pipe to display
readmecraft section usage -n tool | less

# Combine with other tools
readmecraft create -n proj | sed 's/MyName/YourName/g' > README.md
```

### Scripting

```bash
#!/bin/bash
# generate-docs.sh

PROJECTS=("proj1" "proj2" "proj3")

for proj in "${PROJECTS[@]}"; do
  readmecraft create \
    -n "$proj" \
    -d "Documentation for $proj" \
    -o "$proj/README.md"
done
```

### Batch Processing

```bash
# Generate READMEs for all subdirectories
for dir in */; do
  cd "$dir"
  readmecraft create -n "${dir%/}" -o README.md
  cd ..
done
```

## Tips & Best Practices

1. **Version Control:** Always commit generated READMEs to version control
2. **Review Output:** Review generated content before using in production
3. **Customize:** Use generated content as a starting point, then customize
4. **Automation:** Integrate with CI/CD for automatic updates
5. **Templates:** Create custom templates in `templates/` directory
6. **Backup:** Keep backups before overwriting existing READMEs

## Getting Help

- Run `readmecraft --help` for quick reference
- Run `readmecraft <command> --help` for command-specific help
- Check [GitHub Issues](https://github.com/osazeejedi/readmecraft/issues)
- Join [Discussions](https://github.com/osazeejedi/readmecraft/discussions)

## See Also

- [README.md](../README.md) - Project overview
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contributing guidelines
- [QUICK_START.md](../QUICK_START.md) - Quick start guide
- [Web Interface](../web/index.html) - Browser-based generator

---

**Last Updated:** 2025-11-22
