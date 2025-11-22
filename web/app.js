// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Tab Management
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
        
        // Hide output section when switching tabs
        document.getElementById('output-section').style.display = 'none';
    });
});

// Badge Generator
document.getElementById('badge-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('badge-username').value;
    const repo = document.getElementById('badge-repo').value;
    const packageName = document.getElementById('badge-package').value;
    const license = document.getElementById('badge-license').value;
    
    const languageCheckboxes = document.querySelectorAll('input[name="language"]:checked');
    const languages = Array.from(languageCheckboxes).map(cb => cb.value);
    
    let badges = [];
    
    // Build badge
    badges.push(`![Build Status](https://github.com/${username}/${repo}/workflows/CI/badge.svg)`);
    
    // Version badge (if package name provided)
    if (packageName) {
        badges.push(`![npm version](https://img.shields.io/npm/v/${packageName}.svg?style=flat)`);
        badges.push(`![npm downloads](https://img.shields.io/npm/dm/${packageName}.svg?style=flat)`);
    }
    
    // License badge
    if (license) {
        const color = license === 'MIT' ? 'green' : 'blue';
        badges.push(`![License](https://img.shields.io/badge/license-${license}-${color}.svg)`);
    }
    
    // Language badges
    if (languages.length > 0) {
        const languageColors = {
            'TypeScript': { logo: 'typescript', color: '3178C6' },
            'JavaScript': { logo: 'javascript', color: 'F7DF1E' },
            'Python': { logo: 'python', color: '3776AB' },
            'Java': { logo: 'java', color: '007396' },
            'Go': { logo: 'go', color: '00ADD8' },
            'Rust': { logo: 'rust', color: 'black' }
        };
        
        languages.forEach(lang => {
            const badge = languageColors[lang];
            if (badge) {
                badges.push(`![${lang}](https://img.shields.io/badge/${lang}-${badge.color}?style=flat-square&logo=${badge.logo})`);
            }
        });
    }
    
    displayOutput(badges.join('\n'));
});

// Section Generator
document.getElementById('section-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const sectionType = document.getElementById('section-type').value;
    const name = document.getElementById('section-name').value;
    const description = document.getElementById('section-description').value;
    const author = document.getElementById('section-author').value;
    const repoUrl = document.getElementById('section-repo').value;
    
    let section = '';
    
    switch (sectionType) {
        case 'installation':
            section = generateInstallationSection(name);
            break;
        case 'usage':
            section = generateUsageSection(name);
            break;
        case 'features':
            section = generateFeaturesSection();
            break;
        case 'contributing':
            section = generateContributingSection(repoUrl);
            break;
        case 'license':
            section = generateLicenseSection(author);
            break;
    }
    
    displayOutput(section);
});

// Template Generator
document.getElementById('template-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const templateType = document.getElementById('template-type').value;
    const name = document.getElementById('template-name').value;
    const description = document.getElementById('template-description').value;
    const author = document.getElementById('template-author').value;
    const repoUrl = document.getElementById('template-repo').value;
    
    let readme = '';
    
    if (templateType === 'simple') {
        readme = generateSimpleTemplate(name, description, author);
    } else {
        readme = generateAdvancedTemplate(name, description, author, repoUrl);
    }
    
    displayOutput(readme);
});

// Section Generators
function generateInstallationSection(name) {
    return `## Installation

\`\`\`bash
npm install ${name}
\`\`\`

For global installation:

\`\`\`bash
npm install -g ${name}
\`\`\``;
}

function generateUsageSection(name) {
    return `## Usage

\`\`\`javascript
import ${name} from '${name}';

// Use the library
${name}.doSomething();
\`\`\``;
}

function generateFeaturesSection() {
    return `## Features

- ✨ Fast and lightweight
- 📦 Easy to use
- 🔧 Highly configurable
- 📝 Well documented
- ✅ Fully tested`;
}

function generateContributingSection(repoUrl) {
    const prUrl = repoUrl ? `${repoUrl}/pulls` : 'your repository';
    const issuesUrl = repoUrl ? `${repoUrl}/issues` : 'the issues page';
    
    return `## Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request at ${prUrl}

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.

### Found a bug?

Please report it by opening an issue at ${issuesUrl}.`;
}

function generateLicenseSection(author) {
    const year = new Date().getFullYear();
    const copyrightHolder = author || 'Project Contributors';
    
    return `## License

This project is licensed under the MIT License.

Copyright © ${year} ${copyrightHolder}

See [LICENSE](LICENSE) file for details.`;
}

// Template Generators
function generateSimpleTemplate(name, description, author) {
    const year = new Date().getFullYear();
    
    return `# ${name}

${description}

## Installation

\`\`\`bash
npm install ${name}
\`\`\`

## Usage

\`\`\`javascript
const ${name} = require('${name}');

// Your code here
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © ${year} ${author || 'Your Name'}`;
}

function generateAdvancedTemplate(name, description, author, repoUrl) {
    const year = new Date().getFullYear();
    const repoPath = repoUrl ? repoUrl.split('github.com/')[1] : 'user/repo';
    
    return `# ${name}

<div align="center">
  
  ![Build Status](https://github.com/${repoPath}/workflows/CI/badge.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![npm version](https://img.shields.io/npm/v/${name}.svg)
  
</div>

## 📖 About

${description}

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
npm install ${name}

# Using yarn
yarn add ${name}

# Using pnpm
pnpm add ${name}
\`\`\`

### Usage

\`\`\`javascript
import ${name} from '${name}';

// Basic usage
const result = ${name}.init({
  // your configuration
});
\`\`\`

## 📚 Documentation

For detailed documentation, visit [our wiki](${repoUrl || '#'}/wiki).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](${repoUrl || '#'}/issues). You can also take a look at the [contributing guide](CONTRIBUTING.md).

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

See the [open issues](${repoUrl || '#'}/issues) for a full list of proposed features.

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © ${year} [${author || 'Your Name'}](${repoUrl || '#'}).

This project is [MIT](LICENSE) licensed.

## 👤 Author

**${author || 'Your Name'}**

- GitHub: [@${author?.toLowerCase().replace(/\s+/g, '') || 'yourusername'}](https://github.com/${author?.toLowerCase().replace(/\s+/g, '') || 'yourusername'})

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by amazing open source projects`;
}

// Display Output
function displayOutput(content) {
    const outputSection = document.getElementById('output-section');
    const outputContent = document.getElementById('output-content');
    const previewContent = document.getElementById('preview-content');
    
    outputContent.textContent = content;
    
    // Simple markdown to HTML conversion for preview
    const htmlPreview = markdownToHTML(content);
    previewContent.innerHTML = htmlPreview;
    
    outputSection.style.display = 'block';
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Copy to Clipboard
document.getElementById('copy-btn').addEventListener('click', () => {
    const content = document.getElementById('output-content').textContent;
    
    navigator.clipboard.writeText(content).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.textContent;
        
        btn.textContent = '✅ Copied!';
        btn.classList.add('success-pulse');
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('success-pulse');
        }, 2000);
    });
});

// Simple Markdown to HTML converter
function markdownToHTML(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" target="_blank">$1</a>');
    
    // Images
    html = html.replace(/!\[([^\]]+)\]\(([^\)]+)\)/gim, '<img src="$2" alt="$1" style="max-width: 100%;">');
    
    // Code blocks
    html = html.replace(/```([a-z]*)\n([\s\S]*?)```/gim, '<pre><code>$2</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    
    return html;
}
