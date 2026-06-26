import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatListModule, MatDividerModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  aboutText = `
    Je suis un développeur Full Stack passionné par la création d'applications modernes et performantes. 
    Avec plusieurs années d'expérience dans le développement logiciel, j'ai travaillé sur divers projets, 
    allant des applications web aux solutions DevOps.
    
    Mon approche est axée sur la qualité du code, l'expérience utilisateur et l'automatisation des processus. 
    Je suis également un grand partisan de l'open source et contribue régulièrement à des projets communautaires.
  `;

  experiences: Experience[] = [
    {
      title: 'Développeur Full Stack',
      company: 'Freelance',
      period: '2022 - Présent',
      description: 'Développement d\'applications web pour divers clients, en utilisant Angular, NestJS et Docker.',
      icon: 'work',
    },
    {
      title: 'Développeur Frontend',
      company: 'Startup Tech',
      period: '2020 - 2022',
      description: 'Création d\'interfaces utilisateur réactives avec Angular et RxJS. Intégration avec des API REST.',
      icon: 'computer',
    },
    {
      title: 'Stagiaire DevOps',
      company: 'Entreprise X',
      period: '2019 - 2020',
      description: 'Automatisation des déploiements avec Docker et Kubernetes. Configuration de pipelines CI/CD.',
      icon: 'build',
    },
  ];

  education = [
    {
      degree: 'Master en Informatique',
      school: 'Université de Paris',
      period: '2017 - 2019',
      description: 'Spécialisation en développement logiciel et architectures distribuées.',
    },
    {
      degree: 'Licence en Informatique',
      school: 'Université de Lyon',
      period: '2014 - 2017',
      description: 'Formation en algorithmique, bases de données et développement web.',
    },
  ];
}
