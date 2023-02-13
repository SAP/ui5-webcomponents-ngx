import { Injectable, OnDestroy, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ui5ThemingProvider, Ui5ThemingService } from '@ui5/theming-ngx';
import { registerThemePropertiesLoader } from '@ui5/webcomponents-base/dist/asset-registries/Themes.js';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
/**
 * Theming service specifically for the ui5/webcomponents-ngx components.
 */
@Injectable({
  providedIn: 'root',
})
export class Ui5WebcomponentsThemingService
  implements Ui5ThemingProvider, OnDestroy
{
  /** @hidden */
  constructor(
    @Optional() private readonly _globalThemingService: Ui5ThemingService
  ) {
    this._globalThemingService?.registerProvider(this);
  }

  /** @hidden */
  ngOnDestroy(): void {
    this._globalThemingService?.unregisterProvider(this);
  }

  getAvailableThemes(): Observable<string[]> {
    return of([
      'sap_belize',
      'sap_belize_hcb',
      'sap_belize_hcw',
      'sap_fiori_3',
      'sap_fiori_3_dark',
      'sap_fiori_3_hcb',
      'sap_fiori_3_hcw',
      'sap_horizon',
      'sap_horizon_dark',
      'sap_horizon_exp',
      'sap_horizon_hcb',
      'sap_horizon_hcw',
    ]);
  }

  setTheme(theme: string): Observable<boolean> {
    registerThemePropertiesLoader(
      '@ui5/webcomponents-theming',
      theme,
      this.loadTheme as any
    );
    setTheme(theme);
    return of(true);
  }

  private async loadTheme(theme: string): Promise<any> {
    return (
      await import(
        `@ui5/webcomponents-theming/dist/generated/assets/themes/${theme}/parameters-bundle.css.json`
      )
    ).default;
  }
}
