import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  @Output() toggleTerminal = new EventEmitter<void>();

  navItems = [
    { path: '/accueil', label: 'Accueil', icon: '🏠' },
    { path: '/projets', label: 'Projets', icon: '💻' },
    { path: '/competences', label: 'Compétences', icon: '🛠️' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  socialLinks = [
    { url: 'https://github.com/TheTmaTeFR', icon: 'github', label: 'GitHub' },
    { url: 'https://codeberg.org/TheTmaTe', icon: 'codeberg', label: 'Codeberg' },
    { url: 'https://www.linkedin.com/in/thomas-velu/', icon: 'linkedin', label: 'LinkedIn' }
  ];

  onToggleTerminal(): void {
    this.toggleTerminal.emit();
  }

  getIcon(icon: string): string {
    const icons: Record<string, string> = {
      github: '🐙',
      codeberg: '🔷',
      linkedin: '🔗'
    };
    return icons[icon] || '🔗';
  }

}
