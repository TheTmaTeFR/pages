import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private readonly http: HttpClient) {}

  getArticlesList() {
    return this.http.get<any[]>('/blog/blog-list.json');
  }

  getArticleContent(slug: string) {
    return this.http.get(`/blog/${slug}.md`, { responseType: 'text' });
  }
  
}
