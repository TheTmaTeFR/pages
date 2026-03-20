import { Component, computed, effect, inject, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'menubar',
  imports: [MenubarModule, ButtonModule, SelectModule, FormsModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {

  private readonly translate = inject(TranslateService);
  private readonly _homeLabel = signal('');
  private readonly _aboutLabel = signal('');
  private readonly _projectsLabel = signal('');

  readonly homeLabel = this._homeLabel.asReadonly();
  readonly aboutLabel = this._aboutLabel.asReadonly();
  readonly projectsLabel = this._projectsLabel.asReadonly();
  
  readonly selectedLanguage = signal(this.translate.getBrowserLang() ?? this.translate.getFallbackLang());
  readonly languages = [
    { flag: '🇫🇷', code: 'fr' },
    { flag: '🇬🇧', code: 'en' },
  ];

  items = computed(() => ([
    {
      label: this.homeLabel(),
      routerLink: '/',
      icon: 'pi pi-home'
    },
    {
      label: this.aboutLabel(),
      routerLink: '/about-me',
      icon: 'pi pi-user'
    },
    {
      label: this.projectsLabel(),
      routerLink: '/projects',
      icon: 'pi pi-folder'
    }
  ]));


  constructor() {
    this.translate.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
    this.updateTranslations();
  }

  currentCodeToFlag() {
    const language = this.languages.find(lang => lang.code === this.selectedLanguage());
    return language ? language.flag : '';
  }

  changeLanguage(code: string) {
    this.translate.use(code).subscribe({
      next: () => {
        this.selectedLanguage.set(code);
      }
    });
  }

  private updateTranslations() {
    this.translate.get('menu.home').subscribe((res) => this._homeLabel.set(res));
    this.translate.get('menu.about').subscribe((res) => this._aboutLabel.set(res));
    this.translate.get('menu.projects').subscribe((res) => this._projectsLabel.set(res));
  }
}
