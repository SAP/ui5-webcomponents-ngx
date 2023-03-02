import {Injectable, OnDestroy, Optional} from "@angular/core";
import {Ui5ThemingProvider, Ui5ThemingService} from "@ui5/theming-ngx";
import {Observable} from "rxjs";
import {AvailableThemes, LoadTheme} from "./theming.config";

/**
 * Theming service specifically for the fundamental-styles static directives.
 */
@Injectable()
export class Ui5FundamentalThemingService implements Ui5ThemingProvider, OnDestroy {
  name = 'fundamental-styles-theming-service';

  /** @hidden */
  private readonly _themeSheet = new CSSStyleSheet();

  /** @hidden */
  constructor(@Optional() private readonly _globalThemingService: Ui5ThemingService) {
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      this._themeSheet,
    ];
    this._globalThemingService?.registerProvider(this);
  }

  /** @hidden */
  ngOnDestroy(): void {
    this._globalThemingService?.unregisterProvider(this);
    const stylesheetIndex = document.adoptedStyleSheets.findIndex(s => s === this._themeSheet);

    if (stylesheetIndex === -1) {
      return;
    }
    document.adoptedStyleSheets.splice(stylesheetIndex, 1);
  }

  supportsTheme(themeName: string): boolean {
    return this.getAvailableThemes().includes(themeName);
  }

  getAvailableThemes(): string[] {
    return AvailableThemes;
  }

  setTheme(theme: string): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.loadTheme(theme).then((themeDefinition) => {
        return this._themeSheet.replace(themeDefinition);
      }).then(() => subscriber.next(true));
    });
  }

  private loadTheme: (themeName: string) => Promise<string> = LoadTheme;
}
