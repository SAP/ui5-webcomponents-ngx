import {Inject, inject, Injectable} from "@angular/core";
import I18nBundle, {getI18nBundle, registerI18nLoader} from "@ui5/webcomponents-base/dist/i18nBundle.js";
import parseProperties from "@ui5/webcomponents-base/dist/PropertiesFileFormat.js";

import {getLanguage, setLanguage} from "@ui5/webcomponents-base/dist/config/Language.js";
import {BehaviorSubject, firstValueFrom, from, isObservable, map, Observable, of, switchMap} from "rxjs";
import {I18N_ROOT_CONFIG, I18N_NAMESPACE, I18N_TRANSLATIONS} from "./i18n.tokens";
import {I18nConfig, Translations} from "./i18n.types";

@Injectable()
export class I18nService {
  private parent: I18nService | null = inject(I18nService, {skipSelf: true, optional: true});
  private currentLanguage$ = new BehaviorSubject<string>(getLanguage() || this.config.language as string);
  private readonly i18nBundle$: Observable<I18nBundle>;

  constructor(
    @Inject(I18N_ROOT_CONFIG) private config: I18nConfig,
    @Inject(I18N_NAMESPACE) private namespace: string,
    @Inject(I18N_TRANSLATIONS) private bundles: Translations = {}
  ) {
    Object.keys(bundles).forEach((lang) => {
      registerI18nLoader(this.namespace, lang, async (localeId: string) => {
        const val = this.bundles[localeId];
        const result = isObservable(val) ? await firstValueFrom(val) : await val;
        if (typeof result === 'string') {
          return parseProperties(result);
        }
        return result;
      });
    });
    this.i18nBundle$ = from(getI18nBundle(this.namespace));
  }

  currentLanguage(): string | undefined {
    if (this.parent) {
      return this.parent.currentLanguage();
    }
    return this.currentLanguage$.value;
  }

  currentLanguageEvent(): Observable<string> {
    if (this.parent) {
      return this.parent.currentLanguageEvent();
    }
    return this.currentLanguage$;
  }

  setLanguage(language: string): void {
    if (this.parent) {
      return this.parent.setLanguage(language);
    }
    setLanguage(language);
    this.currentLanguage$.next(language);
  }

  getText(key: string, ...placeholders: any[]): Observable<string> {
    return this.currentLanguageEvent().pipe(
      switchMap(() => this.i18nBundle$),
      map((bundle) => bundle.getText({key, defaultText: key}, ...placeholders)),
      switchMap((text) => {
        if (text === key && this.parent) {
          return this.parent.getText(key, ...placeholders);
        }
        return of(text);
      })
    );
  }
}
