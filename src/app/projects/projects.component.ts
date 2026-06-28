import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedProjectsComponent } from '../shared/components/projects/projects.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, SharedProjectsComponent],
  template: '<app-projects></app-projects>',
  styles: '',
})
export class ProjectsPageComponent {}
