import { Component, inject, OnInit } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'blog-article',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, ButtonModule, RouterLink],
  template: `
  <a routerLink="/blog" severity="secondary" styleClass="secondary">
  <span pButtonLabel class="pi pi-angle-left"></span>
  </a>
    <article>
      <markdown [data]="articleContent"></markdown>
    </article>
  `,
})
export class BlogArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  articleContent = '';

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getArticleContent(slug).subscribe(content => {
      this.articleContent = content.split('---')[2];
    });
  }
}
