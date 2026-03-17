import { Component, signal } from '@angular/core';
import { Project } from './project';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'projects',
  imports: [CommonModule, DataViewModule, CardModule, ButtonModule, TagModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  projects = signal<Project[]>([
    {
      title: "OCPPConfigurationServer",
      description: "A web application to update or configure a charge point with OCPP protocol.",
      link: "https://github.com/tvelu77/OCPPConfigurationServer",
      technologies: ["Java", "Spring Boot", "React"]
    },
    {
      title: "CloutMetrics",
      description: "A web application for checking a git repository stats.",
      link: "https://github.com/tvelu77/cloutmetrics",
      technologies: ["Java", "Spring Boot", "React"]
    },
    {
      title: "UGEgreed",
      description: "A class project for calculation distribution with TCP/IP communication.",
      link: "https://github.com/tvelu77/ugegreed",
      technologies: ["Java"]
    }
  ]);

  layout = signal<'grid' | 'list'>('grid');

  openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

}
