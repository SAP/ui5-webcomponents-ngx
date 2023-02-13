import { Injectable, OnDestroy, Optional } from '@angular/core';
import { Ui5ThemingProvider, Ui5ThemingService } from '@ui5/theming-ngx';
import { Observable } from 'rxjs';

/**
 * Theming service specifically for the fundamental-styles static directives.
 */
@Injectable({
  providedIn: 'root',
})
export class Ui5FundamentalThemingService
  implements Ui5ThemingProvider, OnDestroy
{
  name = 'fundamental-styles-theming-service';

  /** @hidden */
  private readonly _themeSheet = new CSSStyleSheet();

  /** @hidden */
  constructor(
    @Optional() private readonly _globalThemingService: Ui5ThemingService
  ) {
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      this._themeSheet,
    ];
    this._globalThemingService?.registerProvider(this);
  }

  /** @hidden */
  ngOnDestroy(): void {
    this._globalThemingService?.unregisterProvider(this);
    const stylesheetIndex = document.adoptedStyleSheets.findIndex(
      (s) => s === this._themeSheet
    );

    if (stylesheetIndex === -1) {
      return;
    }
    document.adoptedStyleSheets.splice(stylesheetIndex, 1);
  }

  supportsTheme(themeName: string): boolean {
    return this.getAvailableThemes().includes(themeName);
  }

  getAvailableThemes(): string[] {
    return [
      'sap_fiori_3',
      'sap_fiori_3_dark',
      'sap_fiori_3_hcb',
      'sap_fiori_3_hcw',
      'sap_fiori_3_light_dark',
      'sap_horizon',
      'sap_horizon_dark',
      'sap_horizon_hcb',
      'sap_horizon_hcw',
    ];
  }

  setTheme(theme: string): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.loadTheme(theme)
        .then((themeDefinition) => {
          return this._themeSheet.replace(themeDefinition);
        })
        .then(() => subscriber.next(true));
    });
  }

  private loadTheme(themeName: string): Promise<string> {
    if (themeName === 'sap_fiori_3')
      import('fundamental-styles/dist/js/theming/sap_fiori_3').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_fiori_3_dark')
      import('fundamental-styles/dist/js/theming/sap_fiori_3_dark').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_fiori_3_hcb')
      import('fundamental-styles/dist/js/theming/sap_fiori_3_hcb').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_fiori_3_hcw')
      import('fundamental-styles/dist/js/theming/sap_fiori_3_hcw').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_fiori_3_light_dark')
      import('fundamental-styles/dist/js/theming/sap_fiori_3_light_dark').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_horizon')
      import('fundamental-styles/dist/js/theming/sap_horizon').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_horizon_dark')
      import('fundamental-styles/dist/js/theming/sap_horizon_dark').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_horizon_hcb')
      import('fundamental-styles/dist/js/theming/sap_horizon_hcb').then(
        (m) => m.default.cssSource
      );
    if (themeName === 'sap_horizon_hcw')
      import('fundamental-styles/dist/js/theming/sap_horizon_hcw').then(
        (m) => m.default.cssSource
      );
    return Promise.resolve('');
  }
}
