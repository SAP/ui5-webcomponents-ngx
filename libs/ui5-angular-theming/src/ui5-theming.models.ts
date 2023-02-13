import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
// TODO: This should come from somewhere.
export interface ThemingConfig {
  defaultTheme: string;
}
export const UI5_THEMING_CONFIGURATION = new InjectionToken<ThemingConfig>(
  'Ui5 global theming configuration.'
);

export interface Ui5ThemingProvider {
  getAvailableThemes(): string[] | Observable<string[]>;
  setTheme(themeName: string): Observable<boolean>;
}

export interface Ui5ThemingConsumer extends Ui5ThemingProvider {
  registerProvider(provider: Ui5ThemingProvider): void;
  unregisterProvider(provider: Ui5ThemingProvider): void;
}
