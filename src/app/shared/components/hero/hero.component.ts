import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  profileImage = 'https://www.gravatar.com/avatar/2c7d99fe281ecd3b966d315460f66040?s=200';
  name = 'Thomas Velu';
  title = 'Développeur Full Stack | DevOps | Open Source';
  description = `Passionné par le développement logiciel, l'automatisation et les technologies open source. 
  Je crée des applications modernes, performantes et accessibles.`;
  
  buttons = [
    { label: 'Voir mes projets', link: '/projects', icon: 'folder' },
    { label: 'Me contacter', link: '/contact', icon: 'mail' },
  ];
  
  socialLinks = [
    { icon: 'github', link: 'https://github.com/TheTmaTeFR', label: 'GitHub' },
    { icon: 'code', link: 'https://codeberg.org/tvelu77', label: 'Codeberg' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/thomas-velu/', label: 'LinkedIn' },
  ];
}
