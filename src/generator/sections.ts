/**
 * README Sections Generator Module
 * Generates common README sections with customizable content
 */

export interface ProjectInfo {
  name: string;
  description: string;
  installCommand?: string;
  usageExample?: string;
  testCommand?: string;
  author?: string;
  repoUrl?: string;
}

/**
 * Generates an Installation section
 */
export function generateInstallation(info: ProjectInfo): string {
  const command = info.installCommand || `npm install ${info.name}`;
  
  return `## Installation

\`\`\`bash
${command}
\`\`\`

For global installation:

\`\`\`bash
npm install -g ${info.name}
\`\`\`
`;
}

/**
 * Generates a Usage section
 */
export function generateUsage(info: ProjectInfo): string {
  const example = info.usageExample || `import ${info.name} from '${info.name}';\n\n// Use the library\n${info.name}.doSomething();`;
  
  return `## Usage

\`\`\`javascript
${example}
\`\`\`
`;
}

/**
 * Generates a Features section
 */
export function generateFeatures(features: string[]): string {
  const featureList = features.map(f => `- ✨ ${f}`).join('\n');
  
  return `## Features

${featureList}
`;
}

/**
 * Generates a Contributing section
 */
export function generateContributing(repoUrl?: string): string {
  const prUrl = repoUrl ? `${repoUrl}/pulls` : 'your repository';
  const issuesUrl = repoUrl ? `${repoUrl}/issues` : 'the issues page';
  
  return `## Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request at ${prUrl}

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Found a bug?

Please report it by opening an issue at ${issuesUrl}.
`;
}

/**
 * Generates a License section
 */
export function generateLicense(license: string = 'MIT', year?: string, author?: string): string {
  const currentYear = year || new Date().getFullYear().toString();
  const copyrightHolder = author || 'Project Contributors';
  
  return `## License

This project is licensed under the ${license} License.

Copyright © ${currentYear} ${copyrightHolder}

See [LICENSE](LICENSE) file for details.
`;
}

/**
 * Generates an API Documentation section
 */
export function generateAPISection(methods: { name: string; description: string; params?: string; returns?: string }[]): string {
  let apiDoc = `## API Reference\n\n`;
  
  methods.forEach(method => {
    apiDoc += `### \`${method.name}\`\n\n`;
    apiDoc += `${method.description}\n\n`;
    
    if (method.params) {
      apiDoc += `**Parameters:** ${method.params}\n\n`;
    }
    
    if (method.returns) {
      apiDoc += `**Returns:** ${method.returns}\n\n`;
    }
    
    apiDoc += `---\n\n`;
  });
  
  return apiDoc;
}

/**
 * Generates a Testing section
 */
export function generateTesting(testCommand?: string): string {
  const command = testCommand || 'npm test';
  
  return `## Testing

Run the test suite:

\`\`\`bash
${command}
\`\`\`

For coverage report:

\`\`\`bash
npm run test:coverage
\`\`\`
`;
}

/**
 * Generates a Roadmap section
 */
export function generateRoadmap(items: { title: string; status: 'completed' | 'in-progress' | 'planned' }[]): string {
  let roadmap = `## Roadmap\n\n`;
  
  items.forEach(item => {
    const icon = item.status === 'completed' ? '✅' : item.status === 'in-progress' ? '🚧' : '📋';
    roadmap += `- ${icon} ${item.title}\n`;
  });
  
  roadmap += `\nSee the [open issues](issues) for a full list of proposed features and known issues.\n`;
  
  return roadmap;
}

/**
 * Generates an Acknowledgments section
 */
export function generateAcknowledgments(credits: string[]): string {
  const creditList = credits.map(c => `- ${c}`).join('\n');
  
  return `## Acknowledgments

${creditList}
`;
}

/**
 * Generates a Support section
 */
export function generateSupport(info: ProjectInfo): string {
  const issuesUrl = info.repoUrl ? `${info.repoUrl}/issues` : 'the issues page';
  const discussionsUrl = info.repoUrl ? `${info.repoUrl}/discussions` : 'discussions';
  
  return `## Support

- 📚 Documentation: Check out our [Wiki](wiki)
- 💬 Discussions: Join our [GitHub Discussions](${discussionsUrl})
- 🐛 Issues: Report bugs at ${issuesUrl}
- ⭐ Star: If you find this project useful, please star it!
`;
}

/**
 * Generates a complete README boilerplate
 */
export function generateCompleteREADME(info: ProjectInfo, options?: {
  features?: string[];
  includeAPI?: boolean;
  includeRoadmap?: boolean;
}): string {
  let readme = `# ${info.name}\n\n`;
  readme += `${info.description}\n\n`;
  readme += generateInstallation(info);
  readme += generateUsage(info);
  
  if (options?.features && options.features.length > 0) {
    readme += generateFeatures(options.features);
  }
  
  if (options?.includeRoadmap) {
    readme += generateRoadmap([
      { title: 'Initial release', status: 'completed' },
      { title: 'Add more features', status: 'planned' }
    ]);
  }
  
  readme += generateContributing(info.repoUrl);
  readme += generateLicense('MIT', undefined, info.author);
  
  return readme;
}
