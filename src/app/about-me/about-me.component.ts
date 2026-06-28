import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../shared/components/about/about.component';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  template: '<app-about></app-about>',
  styles: '',
})
export class AboutMeComponent {}
