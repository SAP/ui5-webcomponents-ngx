import {FactorySansProvider, Provider} from "@angular/core";
import {Translations} from "./i18n.types";
import {I18N_TRANSLATIONS} from "./i18n.tokens";

export function resolveTranslationsProvider(translations?: Translations | FactorySansProvider): Provider {
  if (!translations) {
    return {
      provide: I18N_TRANSLATIONS,
      useValue: {}
    };
  }
  if (typeof translations.useFactory === 'function') {
    return {
      provide: I18N_TRANSLATIONS,
      useFactory: (translations as FactorySansProvider).useFactory,
      deps: (translations as FactorySansProvider).deps || [],
    }
  }
  return {
    provide: I18N_TRANSLATIONS,
    useValue: translations
  };
}
