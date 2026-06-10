import { providePrimeNG } from 'primeng/config';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { OLD_MONEY_PRESET } from './old-money-preset';
import { provideTranslateService } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    providePrimeNG({ theme: { preset: OLD_MONEY_PRESET, options: { ripple: false } } }),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: 'i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'en',
      lang: 'en'
    }),
    provideMarkdown()
  ]
};
