import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  categories = [
    {
      name: 'Backend',
      icon: '🖥️',
      skills: [
        {
          name: 'Java 17+',
          level: 95,
          description: 'Maîtrise complète du langage et de ses fonctionnalités avancées',
        },
        {
          name: 'Spring Boot 3.x',
          level: 90,
          description: "Développement d'API REST, sécurité, JPA, cache, etc.",
        },
        {
          name: 'Spring Security',
          level: 85,
          description: 'Authentification, autorisation, OAuth2, JWT',
        },
        { name: 'Spring Data JPA', level: 88, description: 'Accès aux données avec Hibernate' },
        {
          name: 'Spring Cloud',
          level: 75,
          description: 'Microservices, service discovery, gateway',
        },
        {
          name: 'Microservices',
          level: 80,
          description: 'Architecture distribuée, communication inter-services',
        },
      ],
    },
    {
      name: 'Frontend',
      icon: '🎨',
      skills: [
        {
          name: 'Angular 16+',
          level: 85,
          description: 'Applications SPA, modules, services, RxJS',
        },
        { name: 'TypeScript', level: 85, description: 'Typage statique, bonnes pratiques' },
        { name: 'HTML5/CSS3', level: 90, description: 'Sémantique, flexbox, grid, animations' },
        { name: 'SCSS', level: 85, description: 'Préprocesseur CSS, mixins, variables' },
        { name: 'Bootstrap', level: 75, description: 'Framework CSS pour un développement rapide' },
      ],
    },
    {
      name: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Docker', level: 80, description: "Conteneurisation d'applications" },
        { name: 'Kubernetes', level: 75, description: 'Orchestration de conteneurs' },
        { name: 'GitHub Actions', level: 85, description: 'CI/CD automatisée' },
        { name: 'GitLab CI', level: 80, description: 'Pipelines de build et déploiement' },
        { name: 'AWS', level: 65, description: 'Services cloud (EC2, S3, RDS, etc.)' },
        { name: 'Linux', level: 85, description: 'Administration système, scripting bash' },
      ],
    },
    {
      name: 'Bases de données',
      icon: '🗃️',
      skills: [
        { name: 'PostgreSQL', level: 85, description: 'Base de données relationnelle avancée' },
        { name: 'MongoDB', level: 75, description: 'Base de données NoSQL' },
        { name: 'Redis', level: 70, description: 'Cache et stockage clé-valeur' },
        { name: 'H2 Database', level: 80, description: 'Base de données embarquée pour les tests' },
        { name: 'JPA/Hibernate', level: 88, description: 'ORM pour Java' },
      ],
    },
    {
      name: 'Outils & Méthodologies',
      icon: '🔧',
      skills: [
        { name: 'Git', level: 90, description: 'Contrôle de version' },
        { name: 'Maven/Gradle', level: 85, description: 'Gestion de dépendances et build' },
        { name: 'JUnit/Mockito', level: 85, description: "Tests unitaires et d'intégration" },
        { name: 'Postman', level: 80, description: "Tests d'API" },
        { name: 'Agile/Scrum', level: 85, description: 'Méthodologies de développement' },
        { name: 'Clean Code', level: 90, description: 'Bonnes pratiques de développement' },
      ],
    },
  ];
}
