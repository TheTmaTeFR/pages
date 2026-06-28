import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsPageComponent) },
  { path: 'about-me', loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'contact', loadComponent: () => import('./shared/components/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' },
];
