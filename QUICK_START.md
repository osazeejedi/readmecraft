# ReadmeCraft Quick Start Guide

Get up and running with ReadmeCraft in minutes!

## 📋 Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

Check your versions:
```bash
node --version
npm --version
```

## 🚀 Installation & Setup

### Option 1: Use Without Installation (Recommended for trying)

```bash
npx readmecraft --help
```

### Option 2: Global Installation

```bash
npm install -g readmecraft
readmecraft --help
```

### Option 3: Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/readmecraft.git
cd readmecraft

# Install dependencies
npm install

# Build the project
npm run build

# Test the CLI
node dist/cli.js --help
```

## 🎯 Common Use Cases

### 1. Generate a Complete README

```bash
readmecraft create \
  --name "My Awesome Project" \
  --description "A tool that does amazing things" \
  --template advanced \
  --author "Your Name" \
  --repo-url "https://github.com/user/repo"
```

### 2. Generate Badges Only

```bash
readmecraft badges \
  -u your-github-username \
  -r your-repo-name \
  -l MIT \
  --languages "TypeScript,JavaScript"
```

### 3. Generate a Specific Section

```bash
# Installation section
readmecraft section installation --name my-package

# Contributing section
readmecraft section contributing --repo-url "https://github.com/user/repo"

# License section
readmecraft section license --author "Your Name"
```

### 4. Use the Web Interface

```bash
# Serve the web app locally
npx serve web

# Then open http://localhost:3000 in your browser
```

## 📂 Project Structure After Setup

```
readmecraft/
├── README.md              # This file (or generated README)
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
├── LICENSE                # MIT License
├── .gitignore            # Git ignore rules
├── CONTRIBUTING.md        # Contribution guidelines
├── ACHIEVEMENT_GUIDE.md   # GitHub achievements guide
├── src/                   # TypeScript source
│   ├── cli.ts            # CLI entry point
│   └── generator/        # Generator modules
├── web/                   # Web interface
│   ├── index.html        # Web app
│   ├── style.css         # Styles
│   └── app.js            # JavaScript
├── templates/            # README templates
│   ├── simple.md         # Simple template
│   └── advanced.md       # Advanced template
└── .github/              # GitHub configuration
    ├── workflows/        # CI/CD
    ├── ISSUE_TEMPLATE.md
    └── PULL_REQUEST_TEMPLATE.md
```

## 🔄 Development Workflow

### Making Changes

1. **Start development mode:**
   ```bash
   npm run dev
   ```
   This watches for TypeScript changes and rebuilds automatically.

2. **Make your changes** in the `src/` directory

3. **Test your changes:**
   ```bash
   node dist/cli.js [command]
   ```

### Building for Production

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

## 🌐 Using the Web Interface

1. **Open locally:**
   ```bash
   open web/index.html
   ```

2. **Or serve it:**
   ```bash
   npx serve web
   ```

3. **Use the three tabs:**
   - **Badges**: Generate repository badges
   - **Sections**: Create README sections
   - **Templates**: Generate complete READMEs

## 🎨 Customizing Templates

### Create Your Own Template

1. Add a new file in `templates/`:
   ```bash
   templates/my-template.md
   ```

2. Use variable placeholders:
   ```markdown
   # {{projectName}}
   
   {{description}}
   
   ## Custom Section
   
   Author: {{author}}
   ```

3. The CLI will automatically detect it!

## 🚢 Publishing to GitHub

### Initial Setup

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial ReadmeCraft project setup"

# Add remote
git remote add origin https://github.com/yourusername/readmecraft.git

# Push to GitHub
git push -u origin main
```

### Enable GitHub Features

1. **Enable Discussions:**
   - Settings → Features → Check "Discussions"

2. **Add Topics:**
   - Click ⚙️ next to "About"
   - Add: `hacktoberfest`, `readme-generator`, `cli-tool`, `typescript`, `developer-tools`

3. **Set up Branch Protection:**
   - Settings → Branches → Add rule
   - Require PR reviews before merging

## 🎯 Next Steps

### For Users

1. ⭐ Star the repository if you find it useful
2. 📖 Read the full [README.md](README.md)
3. 🐛 Report bugs via [Issues](https://github.com/yourusername/readmecraft/issues)
4. 💡 Share feature ideas in [Discussions](https://github.com/yourusername/readmecraft/discussions)

### For Contributors

1. 📚 Read [CONTRIBUTING.md](CONTRIBUTING.md)
2. 🎯 Check [ACHIEVEMENT_GUIDE.md](ACHIEVEMENT_GUIDE.md) for GitHub achievements
3. 🔍 Look at [open issues](https://github.com/yourusername/readmecraft/issues)
4. 🚀 Submit your first PR!

### For Achievement Hunters

Follow the [ACHIEVEMENT_GUIDE.md](ACHIEVEMENT_GUIDE.md) to unlock:
- ✅ Automator (via CI)
- 🦈 Pull Shark (5 PRs)
- 🎲 YOLO (quick merge)
- ⚡ Quickdraw (close PR fast)
- 👥 Pair Extraordinaire (co-authored commits)
- 🧠 Galaxy Brain (discussion answer)
- ⭐ Starstruck (16+ stars)
- 🌍 Open Sourcerer (hacktoberfest topic)

## 🆘 Troubleshooting

### "command not found: readmecraft"

If globally installed and getting this error:
```bash
npm install -g readmecraft
# or
npx readmecraft --help
```

### TypeScript Errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Permission Errors

On macOS/Linux, you might need:
```bash
sudo npm install -g readmecraft
```

### CI Workflow Issues

Ensure you have:
1. Pushed code to GitHub
2. The `.github/workflows/ci.yml` file is present
3. Dependencies are correctly listed in `package.json`

## 📚 Additional Resources

- [Full Documentation](README.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Achievement Guide](ACHIEVEMENT_GUIDE.md)
- [GitHub Discussions](https://github.com/yourusername/readmecraft/discussions)
- [Issue Tracker](https://github.com/yourusername/readmecraft/issues)

## 💡 Pro Tips

1. **Use npx for one-time usage** - no installation needed
2. **Save commonly used commands** as npm scripts
3. **Customize templates** for your organization's style
4. **Integrate with CI/CD** for automated documentation updates
5. **Use the web interface** for visual feedback

## 🎉 You're Ready!

You now have everything you need to start using ReadmeCraft. Happy documenting! 📝

---

**Need Help?** Open an issue or start a discussion. We're here to help!
