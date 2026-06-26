import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutText = `
    Passionné par le développement logiciel depuis plus de 5 ans, 
    je me spécialise dans la création d'applications backend robustes 
    et performantes avec Java et Spring Boot.
    
    Mon parcours m'a permis de travailler sur des projets variés, 
    allant des API RESTful aux systèmes distribués, en passant par 
    l'intégration de bases de données et la mise en place de pipelines CI/CD.
    
    Ce qui me motive ? Résoudre des problèmes complexes avec des solutions 
    élégantes, scalables et maintenables. Je crois fermement que la qualité 
    du code et l'expérience développeur sont tout aussi importantes que 
    les fonctionnalités livrées.
    
    Hors du travail, je contribue à des projets open source, 
    j'explore de nouvelles technologies et je partage mes connaissances 
    avec la communauté.
  `;

  education = [
    {
      degree: 'Master en Informatique',
      institution: 'Université Paris-Saclay',
      year: '2018 - 2020',
      description: 'Spécialisation en architecture logicielle et systèmes distribués',
    },
    {
      degree: 'Licence MIASHS',
      institution: 'Université Paris 1 Panthéon-Sorbonne',
      year: '2015 - 2018',
      description: 'Mathématiques, Informatique Appliquées aux Sciences Humaines et Sociales',
    },
  ];

  experience = [
    {
      position: 'Ingénieur Logiciel Senior',
      company: 'TechSolutions Inc.',
      period: '2021 - Présent',
      description:
        "Conception et développement d'API backend pour des applications SaaS. Migration de monolithes vers des microservices. Formation des juniors.",
    },
    {
      position: 'Développeur Full-Stack',
      company: 'WebInnovation',
      period: '2019 - 2021',
      description:
        "Développement d'applications web full-stack avec Angular et Spring Boot. Intégration continue et déploiement automatisé.",
    },
    {
      position: 'Stagiaire Développeur',
      company: 'DataSystems',
      period: '2018',
      description:
        "Participation au développement d'une plateforme de gestion de données. Apprentissage des bonnes pratiques de développement.",
    },
  ];

  technologies = [
    { name: 'Java', level: 95 },
    { name: 'Spring Boot', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'TypeScript', level: 85 },
    { name: 'Docker', level: 80 },
    { name: 'Kubernetes', level: 75 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 75 },
  ];
}
