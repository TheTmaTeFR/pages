import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

interface SkillCategory {
  category: string;
  skills: { name: string; icon: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatChipsModule, MatTooltipModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'angular', level: 90 },
        { name: 'TypeScript', icon: 'typescript', level: 95 },
        { name: 'HTML/CSS', icon: 'html', level: 90 },
        { name: 'Material UI', icon: 'design_services', level: 85 },
        { name: 'RxJS', icon: 'cycle', level: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'NestJS', icon: 'nestjs', level: 85 },
        { name: 'Node.js', icon: 'nodejs', level: 80 },
        { name: 'Express', icon: 'javascript', level: 75 },
        { name: 'PostgreSQL', icon: 'database', level: 70 },
        { name: 'MongoDB', icon: 'mongodb', level: 65 },
      ],
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Docker', icon: 'docker', level: 80 },
        { name: 'Kubernetes', icon: 'kubernetes', level: 70 },
        { name: 'GitHub Actions', icon: 'github', level: 75 },
        { name: 'CI/CD', icon: 'build', level: 80 },
        { name: 'Linux', icon: 'linux', level: 75 },
      ],
    },
    {
      category: 'Outils',
      skills: [
        { name: 'Git', icon: 'git', level: 85 },
        { name: 'Webpack', icon: 'settings', level: 60 },
        { name: 'Jest', icon: 'test', level: 70 },
        { name: 'Prettier', icon: 'format_paint', level: 80 },
        { name: 'ESLint', icon: 'check_circle', level: 75 },
      ],
    },
  ];

  getLevelColor(level: number): string {
    if (level >= 80) return 'primary';
    if (level >= 60) return 'accent';
    return 'warn';
  }

  getAnimationDelay(category: string): string {
    const index = this.skillCategories.findIndex((c) => c.category === category);
    return `${index * 0.1}s`;
  }
}
