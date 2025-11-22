/**
 * Badge Generator Module
 * Generates shields.io badge markdown for various metrics
 */

export interface BadgeOptions {
  label: string;
  message: string;
  color?: string;
  style?: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' | 'social';
  logo?: string;
  logoColor?: string;
}

/**
 * Generates a custom badge using shields.io
 */
export function generateCustomBadge(options: BadgeOptions): string {
  const { label, message, color = 'blue', style = 'flat', logo, logoColor } = options;
  
  let url = `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${color}`;
  
  const params: string[] = [];
  if (style !== 'flat') params.push(`style=${style}`);
  if (logo) params.push(`logo=${logo}`);
  if (logoColor) params.push(`logoColor=${logoColor}`);
  
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }
  
  return `![${label}](${url})`;
}

/**
 * Generates a build status badge
 */
export function generateBuildBadge(username: string, repo: string, branch: string = 'main'): string {
  return `![Build Status](https://github.com/${username}/${repo}/workflows/CI/badge.svg?branch=${branch})`;
}

/**
 * Generates a version badge from npm
 */
export function generateVersionBadge(packageName: string): string {
  return `![npm version](https://img.shields.io/npm/v/${packageName}.svg?style=flat)`;
}

/**
 * Generates a license badge
 */
export function generateLicenseBadge(license: string): string {
  const color = license === 'MIT' ? 'green' : 'blue';
  return `![License](https://img.shields.io/badge/license-${license}-${color}.svg)`;
}

/**
 * Generates a downloads badge
 */
export function generateDownloadsBadge(packageName: string): string {
  return `![npm downloads](https://img.shields.io/npm/dm/${packageName}.svg?style=flat)`;
}

/**
 * Generates a coverage badge
 */
export function generateCoverageBadge(coverage: number): string {
  const color = coverage >= 80 ? 'brightgreen' : coverage >= 60 ? 'yellow' : 'red';
  return `![Coverage](https://img.shields.io/badge/coverage-${coverage}%25-${color}.svg)`;
}

/**
 * Generates language badges
 */
export function generateLanguageBadges(languages: string[]): string {
  return languages.map(lang => {
    const badges: Record<string, { logo: string; color: string }> = {
      TypeScript: { logo: 'typescript', color: '3178C6' },
      JavaScript: { logo: 'javascript', color: 'F7DF1E' },
      Python: { logo: 'python', color: '3776AB' },
      Java: { logo: 'java', color: '007396' },
      Go: { logo: 'go', color: '00ADD8' },
      Rust: { logo: 'rust', color: 'black' },
      Ruby: { logo: 'ruby', color: 'CC342D' },
    };
    
    const badge = badges[lang] || { logo: '', color: 'blue' };
    return generateCustomBadge({
      label: lang,
      message: '',
      color: badge.color,
      logo: badge.logo,
      style: 'flat-square'
    });
  }).join(' ');
}

/**
 * Generates a security audit badge
 */
export function generateSecurityBadge(username: string, repo: string): string {
  return `![Security](https://img.shields.io/snyk/vulnerabilities/github/${username}/${repo}.svg)`;
}

/**
 * Generates a package size badge
 */
export function generatePackageSizeBadge(packageName: string): string {
  return `![Package Size](https://img.shields.io/bundlephobia/minzip/${packageName}.svg)`;
}

/**
 * Generates a code quality badge
 */
export function generateCodeQualityBadge(username: string, repo: string): string {
  return `![Code Quality](https://img.shields.io/codacy/grade/${username}/${repo}.svg)`;
}

/**
 * Generates a complete badge set for a project
 */
export function generateBadgeSet(config: {
  username: string;
  repo: string;
  packageName?: string;
  license?: string;
  languages?: string[];
}): string {
  const badges: string[] = [];
  
  // Build badge
  badges.push(generateBuildBadge(config.username, config.repo));
  
  // Version badge (if npm package)
  if (config.packageName) {
    badges.push(generateVersionBadge(config.packageName));
    badges.push(generateDownloadsBadge(config.packageName));
  }
  
  // License badge
  if (config.license) {
    badges.push(generateLicenseBadge(config.license));
  }
  
  // Language badges
  if (config.languages && config.languages.length > 0) {
    badges.push(generateLanguageBadges(config.languages));
  }
  
  return badges.join('\n');
}
