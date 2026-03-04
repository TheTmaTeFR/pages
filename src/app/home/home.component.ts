import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'home',
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  name = signal('Thomas VELU');
  title = signal('Concepteur & Développeur Full-Stack');
  tagline = signal('');

}
