import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'github', label: 'GitHub', url: 'https://github.com/TheTmaTeFR' },
    { icon: 'code', label: 'Codeberg', url: 'https://codeberg.org/tvelu77' },
    { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/thomas-velu/' },
  ];
}
