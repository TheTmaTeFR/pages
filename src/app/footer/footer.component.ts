import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterLink],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = [
    { label: 'Accueil', path: '/home' },
    { label: 'Projets', path: '/projects' },
    { label: 'Compétences', path: '/skills' },
    { label: 'Contact', path: '/contact' },
  ];

  socialLinks = [
    { url: 'https://github.com/TheTmaTeFR', icon: '🐙', label: 'GitHub' },
    { url: 'https://codeberg.org/TheTmaTe', icon: '🔷', label: 'Codeberg' },
    { url: 'https://www.linkedin.com/in/thomas-velu/', icon: '🔗', label: 'LinkedIn' },
  ];
}
