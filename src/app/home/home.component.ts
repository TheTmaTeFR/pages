import { Component } from '@angular/core';
import { Hero } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [Hero, AboutComponent, SkillsComponent, ProjectsComponent],
})
export class HomeComponent {}
