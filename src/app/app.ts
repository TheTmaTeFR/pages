import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { registerCustomIcons } from '../assets/icons/custom-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  protected readonly title = 'Thomas Velu - Développeur Full Stack';

  private translate = inject(TranslateService);
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);
  
  constructor() {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use(this.translate.getBrowserLang() ?? 'en');
  }

  ngOnInit(): void {
    registerCustomIcons(this.iconRegistry, this.sanitizer);
  }
}
