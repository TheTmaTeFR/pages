import { Component, inject, signal, } from '@angular/core';
import { MenubarComponent } from './menubar/menubar.component';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [MenubarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('tvelu77.frama.io');

  private translate = inject(TranslateService);
  
  constructor() {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use(this.translate.getBrowserLang() ?? 'en');
  }
}
