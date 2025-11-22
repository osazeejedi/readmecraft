#!/usr/bin/env node

/**
 * ReadmeCraft CLI
 * Command-line interface for generating README components
 * 
 * This CLI tool provides commands for:
 * - Generating README badges (shields.io integration)
 * - Creating README sections (installation, usage, etc.)
 * - Building complete READMEs from templates
 * - Listing available templates
 */

import { Command } from 'commander';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import {
  generateBadgeSet,
  generateCustomBadge,
  generateBuildBadge,
  generateLicenseBadge,
  BadgeOptions
} from './generator/badges';
import {
  generateInstallation,
  generateUsage,
  generateFeatures,
  generateContributing,
  generateLicense,
  generateCompleteREADME,
  ProjectInfo
} from './generator/sections';
import {
  generateFromTemplate,
  substituteVariables,
  listAvailableTemplates,
  getTemplateByName,
  TemplateVariables
} from './generator/templates';

const program = new Command();

// CLI Metadata
program
  .name('readmecraft')
  .description('Generate README sections, badges, and templates')
  .version('1.0.0');

// Generate Badges Command
program
  .command('badges')
  .description('Generate badges for your README')
  .option('-u, --username <username>', 'GitHub username')
  .option('-r, --repo <repo>', 'Repository name')
  .option('-p, --package <package>', 'NPM package name')
  .option('-l, --license <license>', 'License type (e.g., MIT)')
  .option('--languages <languages>', 'Comma-separated list of languages')
  .option('-o, --output <file>', 'Output to file')
  .action((options) => {
    console.log(chalk.blue('\n🎨 Generating badges...\n'));
    
    if (!options.username || !options.repo) {
      console.error(chalk.red('Error: --username and --repo are required'));
      process.exit(1);
    }
    
    const languages = options.languages ? options.languages.split(',').map((l: string) => l.trim()) : [];
    
    const badges = generateBadgeSet({
      username: options.username,
      repo: options.repo,
      packageName: options.package,
      license: options.license,
      languages
    });
    
    if (options.output) {
      fs.writeFileSync(options.output, badges);
      console.log(chalk.green(`✅ Badges saved to ${options.output}`));
    } else {
      console.log(badges);
    }
  });

// Generate Section Command
program
  .command('section <type>')
  .description('Generate a specific README section (installation, usage, contributing, license)')
  .option('-n, --name <name>', 'Project name')
  .option('-d, --description <description>', 'Project description')
  .option('--author <author>', 'Author name')
  .option('--repo-url <url>', 'Repository URL')
  .option('-o, --output <file>', 'Output to file')
  .action((type, options) => {
    console.log(chalk.blue(`\n📝 Generating ${type} section...\n`));
    
    const info: ProjectInfo = {
      name: options.name || 'my-project',
      description: options.description || 'A great project',
      author: options.author,
      repoUrl: options.repoUrl
    };
    
    let section = '';
    
    switch (type.toLowerCase()) {
      case 'installation':
        section = generateInstallation(info);
        break;
      case 'usage':
        section = generateUsage(info);
        break;
      case 'contributing':
        section = generateContributing(info.repoUrl);
        break;
      case 'license':
        section = generateLicense('MIT', undefined, info.author);
        break;
      default:
        console.error(chalk.red(`Unknown section type: ${type}`));
        process.exit(1);
    }
    
    if (options.output) {
      fs.writeFileSync(options.output, section);
      console.log(chalk.green(`✅ Section saved to ${options.output}`));
    } else {
      console.log(section);
    }
  });

// Create README Command
program
  .command('create')
  .description('Create a complete README from template')
  .option('-t, --template <template>', 'Template name (simple, advanced)', 'simple')
  .option('-n, --name <name>', 'Project name', 'my-project')
  .option('-d, --description <description>', 'Project description', 'A great project')
  .option('--author <author>', 'Author name')
  .option('--repo-url <url>', 'Repository URL')
  .option('-o, --output <file>', 'Output file', 'README.md')
  .action((options) => {
    console.log(chalk.blue('\n🚀 Creating README...\n'));
    
    const variables: TemplateVariables = {
      projectName: options.name,
      description: options.description,
      author: options.author || 'Your Name',
      repoUrl: options.repoUrl || ''
    };
    
    const template = getTemplateByName(options.template);
    const readme = substituteVariables(template, variables);
    
    fs.writeFileSync(options.output, readme);
    console.log(chalk.green(`✅ README created: ${options.output}`));
    console.log(chalk.cyan(`\n📋 Template: ${options.template}`));
    console.log(chalk.cyan(`📦 Project: ${options.name}\n`));
  });

// List Templates Command
program
  .command('templates')
  .description('List available templates')
  .action(() => {
    console.log(chalk.blue('\n📚 Available Templates:\n'));
    console.log(chalk.cyan('  • simple') + ' - Minimalist README for small projects');
    console.log(chalk.cyan('  • advanced') + ' - Comprehensive README with all sections');
    console.log(chalk.gray('\nUsage: readmecraft create --template <name>\n'));
  });

// Interactive Mode
program
  .command('init')
  .description('Interactive README generator')
  .action(() => {
    console.log(chalk.blue('\n🎯 Interactive README Generator\n'));
    console.log(chalk.yellow('This feature is coming soon!'));
    console.log(chalk.gray('For now, use: readmecraft create --name "My Project"\n'));
  });

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
