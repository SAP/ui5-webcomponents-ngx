import { Injectable, OnDestroy, Optional } from '@angular/core';
import {
  Ui5ThemingProvider,
  Ui5ThemingService,
  AvailableThemes,
} from '@ui5/theming-ngx';
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

  async setTheme(theme: AvailableThemes): Promise<boolean> {
    registerThemePropertiesLoader(
      '@ui5/webcomponents-theming',
      theme,
      this.loadTheme as any
    );
    setTheme(theme);
    return true;
  }

  private async loadTheme(theme: AvailableThemes): Promise<any> {
    return (
      await import(
        `@ui5/webcomponents-theming/dist/generated/assets/themes/${theme}/parameters-bundle.css.json`
      )
    ).default;
  }
}
