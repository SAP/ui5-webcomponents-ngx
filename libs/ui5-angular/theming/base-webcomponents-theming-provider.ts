import {inject, Injectable, OnDestroy} from "@angular/core";
import {Ui5ThemingProvider, Ui5ThemingService} from "@ui5/theming-ngx";
import {BehaviorSubject, map, Observable, of, switchMap} from "rxjs";
import supportedThemes from './supported-themes';
import {setTheme} from '@ui5/webcomponents-base/dist/config/Theme.js';

@Injectable()
export abstract class WebcomponentsThemingProvider implements Ui5ThemingProvider, OnDestroy {
  abstract name: string;

  protected availableThemes$ = new BehaviorSubject<string[]>(supportedThemes);

  protected _globalThemingService: Ui5ThemingService | null = inject(Ui5ThemingService, {optional: true});

  /** @hidden */
  protected constructor(
    protected registerThemes: () => Promise<any>
  ) {
    registerThemes().then(() => {
      this._globalThemingService?.registerProvider(this);
    });
  }

  /** @hidden */
  ngOnDestroy(): void {
    this._globalThemingService?.unregisterProvider(this);
  }

  supportsTheme(theme: string): Observable<boolean> {
    return this.getAvailableThemes().pipe(
      map((themes) => themes.includes(theme))
    );
  }

  getAvailableThemes(): Observable<string[]> {
    return this.availableThemes$.asObservable();
  }

  setTheme(theme: string): Observable<boolean> {
    return this.supportsTheme(theme).pipe(
      switchMap((supported) => {
        if (supported) {
          setTheme(theme);
        }
        return of(supported);
      })
    );
  }
}
