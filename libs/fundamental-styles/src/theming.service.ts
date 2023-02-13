import { Injectable, OnDestroy, Optional } from '@angular/core';
import {
  Ui5ThemingProvider,
  Ui5ThemingService,
  AvailableThemes,
} from '@ui5/theming-ngx';

/**
 * Theming service specifically for the fundamental-styles static directives.
 */
@Injectable({
  providedIn: 'root',
})
export class Ui5FundamentalThemingService
  implements Ui5ThemingProvider, OnDestroy
{
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

  async setTheme(theme: AvailableThemes): Promise<boolean> {
    let themeDefinition: string;
    switch (theme) {
      case 'sap_fiori_3':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_fiori_3')
        ).default.cssSource;
        break;

      case 'sap_fiori_3_dark':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_fiori_3_dark')
        ).default.cssSource;
        break;

      case 'sap_fiori_3_hcb':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_fiori_3_hcb')
        ).default.cssSource;
        break;

      case 'sap_fiori_3_hcw':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_fiori_3_hcw')
        ).default.cssSource;
        break;

      case 'sap_fiori_3_light_dark':
        themeDefinition = (
          await import(
            'fundamental-styles/dist/js/theming/sap_fiori_3_light_dark'
          )
        ).default.cssSource;
        break;

      case 'sap_horizon':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_horizon')
        ).default.cssSource;
        break;

      case 'sap_horizon_dark':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_horizon_dark')
        ).default.cssSource;
        break;

      case 'sap_horizon_hcb':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_horizon_hcb')
        ).default.cssSource;
        break;

      case 'sap_horizon_hcw':
        themeDefinition = (
          await import('fundamental-styles/dist/js/theming/sap_horizon_hcw')
        ).default.cssSource;
        break;
    }

    await this._themeSheet.replace(themeDefinition);
    return true;
  }
}
