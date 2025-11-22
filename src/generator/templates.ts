/**
 * Template Generator Module
 * Loads and customizes README templates
 */

import * as fs from 'fs';
import * as path from 'path';

export interface TemplateVariables {
  projectName: string;
  description: string;
  author?: string;
  year?: string;
  repoUrl?: string;
  [key: string]: string | undefined;
}

/**
 * Replaces template variables with actual values
 */
export function substituteVariables(template: string, variables: TemplateVariables): string {
  let result = template;
  
  // Replace {{variable}} patterns
  Object.keys(variables).forEach(key => {
    const value = variables[key] || '';
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
    result = result.replace(regex, value);
  });
  
  // Set default year if not provided
  const currentYear = new Date().getFullYear().toString();
  result = result.replace(/\{\{\s*year\s*\}\}/g, currentYear);
  
  return result;
}

/**
 * Loads a template from file
 */
export function loadTemplate(templatePath: string): string {
  try {
    return fs.readFileSync(templatePath, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to load template from ${templatePath}: ${error}`);
  }
}

/**
 * Generates README from a template file
 */
export function generateFromTemplate(templatePath: string, variables: TemplateVariables): string {
  const template = loadTemplate(templatePath);
  return substituteVariables(template, variables);
}

/**
 * Lists available templates in a directory
 */
export function listAvailableTemplates(templatesDir: string): string[] {
  try {
    const files = fs.readdirSync(templatesDir);
    return files.filter(file => file.endsWith('.md')).map(file => path.basename(file, '.md'));
  } catch (error) {
    return [];
  }
}

/**
 * Creates a simple template programmatically
 */
export function createSimpleTemplate(variables: TemplateVariables): string {
  return `# ${variables.projectName}

${variables.description}

## Installation

\`\`\`bash
npm install ${variables.projectName}
\`\`\`

## Usage

\`\`\`javascript
const ${variables.projectName} = require('${variables.projectName}');

// Your code here
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © ${variables.year || new Date().getFullYear()} ${variables.author || 'Your Name'}
`;
}

/**
 * Creates an advanced template with all sections
 */
export function createAdvancedTemplate(variables: TemplateVariables): string {
  const year = variables.year || new Date().getFullYear().toString();
  
  return `# ${variables.projectName}

<div align="center">
  
  ![Build Status](https://github.com/${variables.repoUrl?.split('github.com/')[1] || 'user/repo'}/workflows/CI/badge.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![npm version](https://img.shields.io/npm/v/${variables.projectName}.svg)
  
</div>

## 📖 About

${variables.description}

## ✨ Features

- 🚀 Fast and lightweight
- 📦 Easy to use
- 🔧 Highly configurable
- 📝 Well documented
- ✅ Fully tested

## 🚀 Quick Start

### Installation

\`\`\`bash
# Using npm
npm install ${variables.projectName}

# Using yarn
yarn add ${variables.projectName}

# Using pnpm
pnpm add ${variables.projectName}
\`\`\`

### Usage

\`\`\`javascript
import ${variables.projectName} from '${variables.projectName}';

// Basic usage
const result = ${variables.projectName}.init({
  // your configuration
});
\`\`\`

## 📚 Documentation

For detailed documentation, visit [our wiki](${variables.repoUrl || '#'}/wiki).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](${variables.repoUrl || '#'}/issues). You can also take a look at the [contributing guide](CONTRIBUTING.md).

### Development Setup

1. Fork the repo
2. Clone your fork
3. Install dependencies
   \`\`\`bash
   npm install
   \`\`\`
4. Create a branch
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
5. Make your changes
6. Run tests
   \`\`\`bash
   npm test
   \`\`\`
7. Commit and push
8. Open a Pull Request

## 🗺️ Roadmap

- [x] Initial release
- [x] Core functionality
- [ ] Enhanced features
- [ ] Performance improvements
- [ ] Extended documentation

See the [open issues](${variables.repoUrl || '#'}/issues) for a full list of proposed features.

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © ${year} [${variables.author || 'Your Name'}](${variables.repoUrl || '#'}).

This project is [MIT](LICENSE) licensed.

## 👤 Author

**${variables.author || 'Your Name'}**

- GitHub: [@${variables.author?.toLowerCase().replace(/\s+/g, '') || 'yourusername'}](https://github.com/${variables.author?.toLowerCase().replace(/\s+/g, '') || 'yourusername'})

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by amazing open source projects
`;
}

/**
 * Gets template content by name
 */
export function getTemplateByName(templateName: string, templatesDir?: string): string {
  if (templatesDir) {
    const templatePath = path.join(templatesDir, `${templateName}.md`);
    if (fs.existsSync(templatePath)) {
      return loadTemplate(templatePath);
    }
  }
  
  // Return built-in templates
  const variables: TemplateVariables = {
    projectName: '{{projectName}}',
    description: '{{description}}',
    author: '{{author}}',
    year: '{{year}}',
    repoUrl: '{{repoUrl}}'
  };
  
  switch (templateName.toLowerCase()) {
    case 'simple':
      return createSimpleTemplate(variables);
    case 'advanced':
      return createAdvancedTemplate(variables);
    default:
      return createSimpleTemplate(variables);
  }
}
