# Contributing to ReadmeCraft

First off, thank you for considering contributing to ReadmeCraft! It's people like you that make ReadmeCraft such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible using our issue template.

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

The process described here has several goals:

- Maintain ReadmeCraft's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible ReadmeCraft
- Enable a sustainable system for ReadmeCraft's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in the template
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all status checks are passing

## Development Setup

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher
- Git

### Setting Up Your Development Environment

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   
   ```bash
   git clone https://github.com/your-username/readmecraft.git
   cd readmecraft
   ```

3. **Add upstream remote**
   
   ```bash
   git remote add upstream https://github.com/original-owner/readmecraft.git
   ```

4. **Install dependencies**
   
   ```bash
   npm install
   ```

5. **Create a branch**
   
   ```bash
   git checkout -b feature/my-new-feature
   # or
   git checkout -b fix/bug-description
   ```

### Building the Project

```bash
# Compile TypeScript
npm run build

# Watch mode for development
npm run dev

# Type check without emitting files
npm run typecheck
```

### Testing Your Changes

```bash
# Test the CLI
node dist/cli.js --help

# Test creating a README
node dist/cli.js create --name "Test Project"

# Test badge generation
node dist/cli.js badges -u octocat -r hello-world

# Test the web interface
open web/index.html
# or
npx serve web
```

## Project Structure

```
readmecraft/
├── src/                  # TypeScript source code
│   ├── cli.ts           # CLI entry point
│   └── generator/       # Generator modules
│       ├── badges.ts    # Badge generation
│       ├── sections.ts  # Section generation
│       └── templates.ts # Template handling
├── web/                 # Web interface
│   ├── index.html      # HTML structure
│   ├── style.css       # Styles
│   └── app.js          # JavaScript logic
├── templates/          # README templates
│   ├── simple.md      # Simple template
│   └── advanced.md    # Advanced template
├── .github/           # GitHub specific files
│   ├── workflows/    # CI/CD workflows
│   └── *.md         # Issue/PR templates
└── dist/            # Compiled output (generated)
```

## Styleguides

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that don't affect the meaning of the code
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to the build process or auxiliary tools

**Examples:**

```
feat: add support for custom badge colors
fix: resolve template variable substitution bug
docs: update CLI usage examples
refactor: simplify badge generation logic
```

### TypeScript Styleguide

- Use TypeScript for all new files
- Follow existing code style (we use 2 spaces for indentation)
- Add JSDoc comments for public functions
- Use meaningful variable and function names
- Prefer `const` over `let`
- Use explicit types when not obvious
- Avoid `any` type

**Example:**

```typescript
/**
 * Generates a badge for the given repository
 * @param username GitHub username
 * @param repo Repository name
 * @returns Markdown badge string
 */
export function generateBuildBadge(username: string, repo: string): string {
  return `![Build Status](https://github.com/${username}/${repo}/workflows/CI/badge.svg)`;
}
```

### JavaScript Styleguide (Web)

- Use modern ES6+ syntax
- Keep functions small and focused
- Add comments for complex logic
- Maintain consistent formatting
- Avoid global variables

### CSS Styleguide

- Use CSS custom properties for theming
- Follow BEM naming convention when appropriate
- Keep selectors simple
- Group related properties
- Use meaningful class names

## Making Changes

### Before You Start

1. Check if there's already an issue for what you want to work on
2. If not, create one to discuss your idea
3. Wait for approval from maintainers before starting major work

### While Working

1. Write clear, commented code
2. Follow the existing code style
3. Keep commits focused and atomic
4. Test your changes thoroughly
5. Update documentation as needed

### Submitting Changes

1. **Ensure your code builds**
   
   ```bash
   npm run build
   npm run typecheck
   ```

2. **Update documentation**
   
   If you've added features or changed behavior, update:
   - README.md
   - Code comments
   - Any relevant documentation files

3. **Push to your fork**
   
   ```bash
   git push origin feature/my-new-feature
   ```

4. **Create a Pull Request**
   
   - Use a clear title
   - Fill out the PR template completely
   - Link to any related issues
   - Add screenshots for UI changes

5. **Respond to feedback**
   
   - Be open to suggestions
   - Make requested changes
   - Keep the conversation constructive

## Types of Contributions We Love

### Code Contributions

- Bug fixes
- New features
- Performance improvements
- Code refactoring
- Test coverage improvements

### Non-Code Contributions

- Documentation improvements
- Tutorial writing
- Template creation
- Design improvements
- Answering questions in Discussions
- Reviewing pull requests
- Reporting bugs
- Suggesting features

## Recognition

Contributors will be:
- Listed in the project's contributors page
- Mentioned in release notes (for significant contributions)
- Credited in the README (for major features)

## Getting Help

If you need help:

- Check the [README](README.md) for basic information
- Search through [existing issues](https://github.com/yourusername/readmecraft/issues)
- Ask in [GitHub Discussions](https://github.com/yourusername/readmecraft/discussions)
- Reach out to maintainers in your PR or issue

## Additional Notes

### Branch Naming

Use descriptive branch names:

- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation changes
- `refactor/` for code refactoring
- `test/` for test additions

Examples:
- `feature/add-markdown-lint`
- `fix/badge-encoding-issue`
- `docs/update-installation-guide`

### Commit Frequency

- Commit early and often
- Keep commits logical and focused
- Don't commit generated files (like `dist/`)
- Commits should tell a story of your changes

### Code Review Process

1. At least one maintainer must review all PRs
2. Reviews focus on:
   - Code quality
   - Adherence to guidelines
   - Functionality
   - Test coverage
   - Documentation
3. Address all review comments
4. Once approved, a maintainer will merge

## Release Process

ReadmeCraft follows semantic versioning (MAJOR.MINOR.PATCH):

- MAJOR: Breaking changes
- MINOR: New features (backwards compatible)
- PATCH: Bug fixes

Releases are created by maintainers and include:
- Version bump
- Changelog update
- Git tag
- npm publish (when applicable)

## Questions?

Don't hesitate to ask! We're here to help. Open an issue or start a discussion if you're unsure about anything.

---

Thank you for contributing to ReadmeCraft! 🎉
