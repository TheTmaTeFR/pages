import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  links: { icon: string; label: string; url: string }[];
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Mon Portfolio',
      description: 'Un site vitrine pour présenter mes projets et compétences. Développé avec Angular et Angular Material.',
      image: 'https://via.placeholder.com/400x250/87cf3e/ffffff?text=Portfolio',
      links: [
        { icon: 'code', label: 'Code', url: 'https://codeberg.org/tvelu77/pages' },
        { icon: 'language', label: 'Site', url: 'https://tvelu77.codeberg.page/' },
      ],
      tags: ['Angular', 'TypeScript', 'Material UI', 'Responsive'],
    },
    {
      id: 2,
      title: 'Gestion de Tâches',
      description: 'Une application de gestion de tâches avec authentification et synchronisation en temps réel.',
      image: 'https://via.placeholder.com/400x250/4a992e/ffffff?text=Todo+App',
      links: [
        { icon: 'code', label: 'Code', url: 'https://github.com/TheTmaTeFR/todo-app' },
        { icon: 'launch', label: 'Demo', url: 'https://todo.tvelu77.fr' },
      ],
      tags: ['Angular', 'Firebase', 'RxJS', 'PWA'],
    },
    {
      id: 3,
      title: 'API REST avec NestJS',
      description: 'Une API REST pour gérer des utilisateurs et des articles, avec documentation Swagger.',
      image: 'https://via.placeholder.com/400x250/333333/ffffff?text=NestJS+API',
      links: [
        { icon: 'code', label: 'Code', url: 'https://github.com/TheTmaTeFR/nestjs-api' },
        { icon: 'description', label: 'Docs', url: 'https://api.tvelu77.fr/docs' },
      ],
      tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Swagger'],
    },
  ];

  getAnimationDelay(index: number): string {
    return `${index * 0.1}s`;
  }
}
