import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  image?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'API de Gestion de Projets',
      description:
        'Une API REST complète pour la gestion de projets avec authentification JWT, gestion des tâches, commentaires et notifications en temps réel.',
      technologies: ['Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'WebSocket', 'Docker'],
      githubUrl: 'https://github.com/tvelu77/project-management-api',
      demoUrl: 'https://demo.tvelu.dev/projects',
      featured: true,
      image: 'assets/images/project-1.jpg',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description:
        'Un tableau de bord interactif pour visualiser des données analytiques avec des graphiques dynamiques et des filtres avancés.',
      technologies: ['Angular', 'TypeScript', 'Recharts', 'NgRx', 'SCSS', 'Bootstrap'],
      githubUrl: 'https://github.com/tvelu77/analytics-dashboard',
      demoUrl: 'https://demo.tvelu.dev/analytics',
      featured: true,
      image: 'assets/images/project-2.jpg',
    },
    {
      id: 3,
      title: 'Système de Monitoring Distribué',
      description:
        'Un système de monitoring pour surveiller la santé des microservices avec des alertes en temps réel et des tableaux de bord personnalisables.',
      technologies: ['Spring Boot', 'Spring Cloud', 'Prometheus', 'Grafana', 'Kafka', 'Docker'],
      githubUrl: 'https://github.com/tvelu77/distributed-monitoring',
      featured: true,
      image: 'assets/images/project-3.jpg',
    },
    {
      id: 4,
      title: 'Application Mobile Cross-Platform',
      description:
        'Une application mobile pour la gestion de tâches personnelles avec synchronisation cloud et notifications push.',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com/tvelu77/task-manager-mobile',
      featured: false,
      image: 'assets/images/project-4.jpg',
    },
    {
      id: 5,
      title: 'Blog Technique',
      description:
        'Un blog technique avec gestion de contenu, commentaires et système de tags pour organiser les articles.',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT', 'Markdown'],
      githubUrl: 'https://github.com/tvelu77/tech-blog',
      demoUrl: 'https://blog.tvelu.dev',
      featured: false,
      image: 'assets/images/project-5.jpg',
    },
    {
      id: 6,
      title: 'Boutique en Ligne',
      description:
        'Une boutique en ligne complète avec panier, paiement en ligne, gestion des produits et tableau de bord administrateur.',
      technologies: ['Spring Boot', 'Angular', 'Stripe API', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/tvelu77/ecommerce-platform',
      featured: false,
      image: 'assets/images/project-6.jpg',
    },
  ];

  filteredProjects: Project[] = this.projects;
  filter: 'all' | 'featured' = 'all';

  filterProjects(filter: 'all' | 'featured'): void {
    this.filter = filter;
    this.filteredProjects =
      filter === 'all' ? this.projects : this.projects.filter(p => p.featured);
  }

  getIcon(tech: string): string {
    const icons: Record<string, string> = {
      'Spring Boot': '🌱',
      Angular: '⚡',
      TypeScript: '🔷',
      Java: '☕',
      PostgreSQL: '🐘',
      MongoDB: '🍃',
      Docker: '🐳',
      Kubernetes: '⚓',
      Redis: '🔴',
      Kafka: '📡',
      WebSocket: '🔗',
      JWT: '🔑',
      Recharts: '📊',
      NgRx: '🔄',
      Bootstrap: '👢',
      SCSS: '🎨',
      Ionic: '📱',
      Capacitor: '⚡',
      Firebase: '🔥',
      'Stripe API': '💳',
      Prometheus: '📈',
      Grafana: '📉',
      'Spring Security': '🔒',
      'Spring Cloud': '☁️',
      JPA: '🗃️',
    };
    return icons[tech] || '💻';
  }
}
