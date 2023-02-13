import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
// TODO: This should come from somewhere.
export type AvailableThemes =
  | 'sap_fiori_3'
  | 'sap_fiori_3_dark'
  | 'sap_fiori_3_hcb'
  | 'sap_fiori_3_hcw'
  | 'sap_horizon'
  | 'sap_horizon_dark'
  | 'sap_horizon_hcb'
  | 'sap_horizon_hcw';
export interface ThemingConfig {
  defaultTheme: AvailableThemes;
}
export const UI5_THEMING_CONFIGURATION = new InjectionToken<ThemingConfig>(
  'Ui5 global theming configuration.'
);

export interface Ui5ThemingProvider {
  setTheme(themeName: AvailableThemes): Observable<boolean>;
}

export interface Ui5ThemingConsumer extends Ui5ThemingProvider {
  registerProvider(provider: Ui5ThemingProvider): void;
  unregisterProvider(provider: Ui5ThemingProvider): void;
}
