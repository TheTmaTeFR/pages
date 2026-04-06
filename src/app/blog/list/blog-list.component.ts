import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h1>Mon Blog</h1>
    <ul>
      <li *ngFor="let article of articles">
        <a [routerLink]="['/blog', article.slug]">{{ article.title }}</a>
        <p>{{ article.description }}</p>
      </li>
    </ul>
  `,
})
export class BlogListComponent implements OnInit {
  private blogService = inject(BlogService);
  articles: any[] = [];

  ngOnInit() {
    this.blogService.getArticlesList().subscribe(articles => {
      this.articles = articles;
    });
  }
}
