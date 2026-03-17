import { Component, signal } from '@angular/core';
import { CardModule } from "primeng/card";
import { TimelineModule } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { Experience } from './data/experience';
import { Skill } from './data/skill';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'about-me',
  imports: [CardModule, TimelineModule, ProgressBarModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {

    academicPath = signal<Experience[]>([
      {
        year: '2021 - 2024',
        title: 'Diplôme d’Ingénieur en Informatique',
        location: 'ESIEE Paris, Marne-la-Vallée',
        description: 'Spécialisation en développement logiciel et algorithmes.'
      },
      {
        year: '2023',
        title: 'Programme d’Échange Universitaire',
        location: 'Université Laval, Québec',
        description: 'Semestre d’études à l’étranger axé sur le génie logiciel et la collaboration internationale.'
      },
      {
        year: '2019 - 2021',
        title: 'Cycle Préparatoire',
        location: 'ESIEE Paris, Marne-la-Vallée',
        description: 'Formation en mathématiques, physique et informatique pour préparer le cycle d’ingénieur.'
      }
    ]);

    professionalPath = signal<Experience[]>([
      {
        year: '2024 - Présent',
        title: 'Ingénieur Logiciel',
        location: 'Aubay - Solutec, Paris',
        description: 'Prestataire pour la Société Générale CIB, développement d’une application de gestion de données financières en Angular et Java.'
      },
      {
        year: '2021 - 2024',
        title: 'Développeur Full Stack, Alternant',
        location: 'Orange, Paris',
        description: 'Développement et maintenance d\'une application web de monitoring réseau 3G.'
      }
    ]);

  skills = signal<Skill[]>([
    { name: 'Java/Spring Boot', level: 85 },
    { name: 'Git', level: 85 },
    { name: 'Typescript/Angular', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'Agile', level: 65 }
  ]);
}
