import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function registerCustomIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
  // Angular
  iconRegistry.addSvgIcon(
    'angular',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg')
  );

  // TypeScript
  iconRegistry.addSvgIcon(
    'typescript',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/typescript.svg')
  );

  // NestJS
  iconRegistry.addSvgIcon(
    'nestjs',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/nestjs.svg')
  );

  // Node.js
  iconRegistry.addSvgIcon(
    'nodejs',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/nodejs.svg')
  );

  // MongoDB
  iconRegistry.addSvgIcon(
    'mongodb',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mongodb.svg')
  );

  // Docker
  iconRegistry.addSvgIcon(
    'docker',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/docker.svg')
  );

  // Kubernetes
  iconRegistry.addSvgIcon(
    'kubernetes',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/kubernetes.svg')
  );

  // Git
  iconRegistry.addSvgIcon(
    'git',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/git.svg')
  );

  // GitHub
  iconRegistry.addSvgIcon(
    'github',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
  );

  // LinkedIn
  iconRegistry.addSvgIcon(
    'linkedin',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
  );

  // HTML
  iconRegistry.addSvgIcon(
    'html',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/html.svg')
  );

  // Codeberg
  iconRegistry.addSvgIcon(
    'code',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/codeberg.svg')
  );

  // Linux
  iconRegistry.addSvgIcon(
    'linux',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linux.svg')
  );
}
