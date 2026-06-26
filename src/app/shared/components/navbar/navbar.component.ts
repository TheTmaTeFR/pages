import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((theme) => {
      this.isDarkTheme = theme === 'dark';
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  navItems = [
    { label: 'Accueil', link: '/', icon: 'home' },
    { label: 'Projets', link: '/projects', icon: 'folder' },
    { label: 'À propos', link: '/about-me', icon: 'person' },
    { label: 'Contact', link: '/contact', icon: 'mail' },
  ];

  getIcon(label: string): string {
    const item = this.navItems.find((item) => item.label === label);
    return item ? item.icon : 'help';
  }
}
