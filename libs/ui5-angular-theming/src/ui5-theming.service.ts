import { Inject, Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import {
  AvailableThemes,
  ThemingConfig,
  UI5_THEMING_CONFIGURATION,
  Ui5ThemingProvider,
  Ui5ThemingConsumer,
} from './ui5-theming.models';

@Injectable({
  providedIn: 'root',
})
export class Ui5ThemingService implements Ui5ThemingConsumer, OnDestroy {
  private readonly _providers$ = new BehaviorSubject<Ui5ThemingProvider[]>([]);
  private _currentTheme$ = new BehaviorSubject<
    [AvailableThemes, AvailableThemes]
  >([this._config.defaultTheme, this._config.defaultTheme]);

  private _themeChanged$ = new Subject<AvailableThemes>();

  private _destroyed$ = new Subject<void>();

  constructor(
    @Inject(UI5_THEMING_CONFIGURATION) private readonly _config: ThemingConfig
  ) {
    combineLatest([this._providers$, this._currentTheme$])
      .pipe(
        switchMap(([providers, [previousTheme, newTheme]]) => {
          return combineLatest(
            providers.map((provider) => provider.setTheme(newTheme))
          ).pipe(
            map((providerResponses) => {
              if (providerResponses.every(Boolean)) {
                return newTheme;
              }
              return previousTheme;
            })
          );
        }),
        tap((theme) => {
          this._themeChanged$.next(theme);
        }),
        takeUntil(this._destroyed$)
      )
      .subscribe();
  }

  /** Registers theming provider for further usage. */
  async registerProvider(provider: Ui5ThemingProvider): Promise<void> {
    const providers = this._providers$.value;
    providers.push(provider);
    this._providers$.next(providers);
  }

  /** Unregisters previously registered theming provider. */
  unregisterProvider(provider: Ui5ThemingProvider): void {
    const providers = this._providers$.value;
    const index = providers.indexOf(provider);
    if (index !== -1) {
      providers.splice(index, 1);
      this._providers$.next(providers);
    }
  }

  /** Sets the theme to the providers */
  setTheme(theme: AvailableThemes): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      const finalizer$ = new Subject<void>();
      this._themeChanged$
        .pipe(takeUntil(finalizer$))
        .subscribe((changedTheme) => {
          if (changedTheme === theme) {
            finalizer$.next();
            finalizer$.complete();
          }
          subscriber.next(changedTheme === theme);
          subscriber.complete();
        });
      this._currentTheme$.next([this._currentTheme$.value[1], theme]);
    });
  }

  /** @hidden */
  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
