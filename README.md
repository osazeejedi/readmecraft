# ReadmeCraft

<div align="center">
  
  ![Build Status](https://github.com/yourusername/readmecraft/workflows/CI/badge.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![npm version](https://img.shields.io/npm/v/readmecraft.svg)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript)
  
  **A powerful CLI and web tool for easily generating professional README files, badges, and templates**
  
  [CLI Documentation](#cli-usage) • [Web App](#web-interface) • [Templates](#templates) • [Contributing](#contributing) • [Discussions](https://github.com/yourusername/readmecraft/discussions)
  
</div>

---

## 📖 About

ReadmeCraft simplifies the process of creating beautiful, comprehensive README files for your projects. Whether you prefer command-line tools or a visual interface, ReadmeCraft has you covered.

### Why ReadmeCraft?

- ⚡ **Fast**: Generate complete READMEs in seconds
- 🎨 **Customizable**: Multiple templates and flexible options
- 🛠️ **Dual Interface**: CLI for power users, web app for visual editing
- 📦 **Zero Config**: Works out of the box
- 🔧 **CI/CD Ready**: Perfect for automation workflows
- 🎯 **TypeScript**: Full type safety and IntelliSense support

---

## ✨ Features

### CLI Tool
- 🎨 Generate badges (build, version, license, languages)
- 📝 Create README sections (installation, usage, contributing, etc.)
- 🚀 Complete README generation from templates
- 💾 Output to file or console
- 🔄 Easy CI/CD integration

### Web Interface
- 🌐 Browser-based README generator
- 🎨 Real-time preview
- 📋 One-click copy to clipboard
- 🌗 Light/dark mode support
- 📱 Fully responsive design
- ♿ Accessible (WCAG compliant)

### Templates
- 📄 **Simple**: Minimalist README for small projects
- 📚 **Advanced**: Comprehensive README with all sections
- 🎯 Custom variable substitution
- 📦 Extensible template system

---

## 🚀 Quick Start

### Installation

```bash
# Install globally
npm install -g readmecraft

# Or use with npx (no installation required)
npx readmecraft --help
```

### Basic Usage

```bash
# Generate a complete README
readmecraft create --name "My Project" --description "A great project"

# Generate badges
readmecraft badges -u github-username -r repo-name

# Generate a specific section
readmecraft section installation --name my-package

# List available templates
readmecraft templates
```

---

## 📚 CLI Usage

### Commands

#### `create`
Create a complete README from a template

```bash
readmecraft create [options]

Options:
  -t, --template <template>     Template to use (simple, advanced) (default: "simple")
  -n, --name <name>            Project name (default: "my-project")
  -d, --description <desc>     Project description (default: "A great project")
  --author <author>            Author name
  --repo-url <url>             Repository URL
  -o, --output <file>          Output file (default: "README.md")
```

**Example:**
```bash
readmecraft create \
  --template advanced \
  --name "awesome-project" \
  --description "An awesome open source tool" \
  --author "Your Name" \
  --repo-url "https://github.com/user/awesome-project"
```

#### `badges`
Generate badges for your README

```bash
readmecraft badges [options]

Options:
  -u, --username <username>    GitHub username (required)
  -r, --repo <repo>           Repository name (required)
  -p, --package <package>     NPM package name
  -l, --license <license>     License type (e.g., MIT)
  --languages <languages>     Comma-separated list of languages
  -o, --output <file>         Output to file
```

**Example:**
```bash
readmecraft badges \
  -u octocat \
  -r hello-world \
  -p hello-world \
  -l MIT \
  --languages "TypeScript,JavaScript,Python"
```

#### `section`
Generate a specific README section

```bash
readmecraft section <type> [options]

Types: installation, usage, contributing, license

Options:
  -n, --name <name>           Project name
  -d, --description <desc>    Project description
  --author <author>           Author name
  --repo-url <url>            Repository URL
  -o, --output <file>         Output to file
```

**Example:**
```bash
readmecraft section contributing --repo-url "https://github.com/user/repo"
```

#### `templates`
List available templates

```bash
readmecraft templates
```

---

## 🌐 Web Interface

The web interface provides a visual way to generate README content.

### Local Usage

1. Open `web/index.html` in your browser
2. Or serve it locally:
   ```bash
   npx serve web
   # Visit http://localhost:3000
   ```

### Features

- **Three Tabs**: Badges, Sections, Templates
- **Real-time Preview**: See your markdown rendered as HTML
- **Copy to Clipboard**: One-click copy functionality
- **Dark Mode**: Toggle between light and dark themes
- **Mobile Responsive**: Works on all devices

### Screenshots

#### Badges Generator
Generate badges with a simple form interface.

#### Section Generator
Create individual README sections.

#### Template Generator
Generate complete READMEs from templates.

---

## 📦 Templates

### Simple Template
Minimalist README perfect for:
- Small utility projects
- Personal repositories
- Quick prototypes
- Learning projects

### Advanced Template
Comprehensive README including:
- Feature highlights with emojis
- Multiple installation methods
- Detailed usage examples
- Contributing guidelines
- Roadmap section
- Author information
- Acknowledgments

### Custom Templates

You can create custom templates in the `templates/` directory:

```markdown
# {{projectName}}

{{description}}

## Your Custom Sections Here

Use {{variables}} for dynamic content.
```

---

## 🔧 CI/CD Integration

### GitHub Actions

```yaml
- name: Generate README
  run: |
    npx readmecraft create \
      --name "${{ github.event.repository.name }}" \
      --author "${{ github.repository_owner }}" \
      --repo-url "${{ github.event.repository.html_url }}"
```

### Pre-commit Hook

```bash
#!/bin/sh
# .git/hooks/pre-commit
npx readmecraft badges -u username -r repo -o badges.md
git add badges.md
```

### NPM Script

```json
{
  "scripts": {
    "docs": "readmecraft create --template advanced -o README.md"
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! We love to receive contributions from the community.

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests
- 💬 Join discussions

### Getting Started

1. Fork the repository
2. Clone your fork
   ```bash
   git clone https://github.com/your-username/readmecraft.git
   cd readmecraft
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Make your changes
5. Build the project
   ```bash
   npm run build
   ```
6. Test your changes
   ```bash
   npm run typecheck
   node dist/cli.js --help
   ```
7. Create a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Development Scripts

```bash
npm run build       # Compile TypeScript
npm run dev         # Watch mode for development
npm run typecheck   # Type checking without emit
```

---

## 🗺️ Roadmap

- [x] CLI tool with badge and section generators
- [x] Web interface with live preview
- [x] Simple and advanced templates
- [x] GitHub Actions integration
- [x] TypeScript support
- [ ] Interactive CLI with prompts
- [ ] More templates (API, library, tool-specific)
- [ ] Export to PDF
- [ ] VS Code extension
- [ ] Template marketplace
- [ ] AI-powered suggestions

See the [open issues](https://github.com/yourusername/readmecraft/issues) for a full list of proposed features and known issues.

---

## 🎯 GitHub Achievements

ReadmeCraft is designed to help you unlock GitHub achievements! Check out [ACHIEVEMENT_GUIDE.md](ACHIEVEMENT_GUIDE.md) for strategies to earn:

- ✅ Automator
- 🦈 Pull Shark
- 🎲 YOLO
- ⚡ Quickdraw
- 👥 Pair Extraordinaire
- 🧠 Galaxy Brain
- ⭐ Starstruck
- 🌍 Open Sourcerer

---

## 💬 Community

- [GitHub Discussions](https://github.com/yourusername/readmecraft/discussions) - Ask questions, share ideas
- [Issue Tracker](https://github.com/yourusername/readmecraft/issues) - Report bugs, request features
- [Twitter](https://twitter.com/readmecraft) - Follow for updates

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright © 2025 ReadmeCraft Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Author

**ReadmeCraft Contributors**

- GitHub: [@yourusername](https://github.com/yourusername)
- Website: [readmecraft.dev](https://readmecraft.dev)

---

## 🙏 Acknowledgments

- [Shields.io](https://shields.io) for the awesome badge service
- [Commander.js](https://github.com/tj/commander.js) for CLI framework
- [Chalk](https://github.com/chalk/chalk) for terminal colors
- All our [contributors](https://github.com/yourusername/readmecraft/graphs/contributors)

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you! Share it with other developers who might find it useful.

---

<div align="center">
  Made with ❤️ by the ReadmeCraft community
</div>
