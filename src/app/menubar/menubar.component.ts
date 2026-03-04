import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'menubar',
  imports: [MenubarModule, ButtonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {

  items = signal<MenuItem[]>([
    {
      label: 'Accueil',
      routerLink: '/',
      icon: 'pi pi-home'
    },
    {
      label: 'À propos',
      routerLink: '/about-me',
      icon: 'pi pi-user'
    },
    {
      label: 'Projets',
      routerLink: '/projects',
      icon: 'pi pi-folder'
    }
  ])

}
