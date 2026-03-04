import { providePrimeNG } from 'primeng/config';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { OLD_MONEY_PRESET } from './old-money-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    providePrimeNG({ theme: { preset: OLD_MONEY_PRESET, options: { ripple: false } } })
  ]
};
