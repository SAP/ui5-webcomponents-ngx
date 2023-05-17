import { Schema } from '../schema';

export interface NgAddSchema extends Schema {
  useI18n: boolean;
  defaultLanguage?: string;
}
