import {InjectionToken} from "@angular/core";
import {I18nConfig, Translations} from "./i18n.types";

export const I18N_ROOT_CONFIG = new InjectionToken<I18nConfig>('rootI18nConfig');
export const I18N_NAMESPACE = new InjectionToken<string>('i18nNamespace');
export const I18N_TRANSLATIONS = new InjectionToken<Translations>('i18nTranslations');
