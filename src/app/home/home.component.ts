import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { ProjectsComponent } from '../shared/components/projects/projects.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';
import { AboutComponent } from '../shared/components/about/about.component';
import { ContactComponent } from '../shared/components/contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
