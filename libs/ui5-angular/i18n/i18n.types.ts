import {Observable} from "rxjs";

const availableLanguages = ['ar', 'bg', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'en_GB', 'es', 'es_MX', 'et', 'fi', 'fr', 'fr_CA', 'hi', 'hr', 'hu', 'in', 'it', 'iw', 'ja', 'kk', 'ko', 'lt', 'lv', 'ms', 'nl', 'no', 'pl', 'pt_PT', 'pt', 'ro', 'ru', 'sh', 'sk', 'sl', 'sv', 'th', 'tr', 'uk', 'vi', 'zh_CN', 'zh_TW'] as const;

export type TranslationsSource<T> = T | Promise<T> | Observable<T>;

export type Translations = Record<string, TranslationsSource<string | Record<string, string>>>;

export interface I18nConfig {
  language?: typeof availableLanguages[number] | string;
  fetchDefaultLanguage?: boolean;
  bundle?: {
    name?: string;
    translations?: Translations;
  };
}
