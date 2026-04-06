import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'about-me', loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent) },
    { path: 'blog', loadComponent: () => import('./blog/list/blog-list.component').then(m => m.BlogListComponent) },
    { path: 'blog/:slug', loadComponent: () => import('./blog/article/blog-article.component').then(m => m.BlogArticleComponent) },
];
