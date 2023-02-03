import { Injectable, OnDestroy, Optional } from '@angular/core';
import {
  Ui5ThemingProvider,
  Ui5ThemingService,
  AvailableThemes,
} from '@ui5/theming-ngx';
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
    setTheme(theme);
    return true;
  }
}
