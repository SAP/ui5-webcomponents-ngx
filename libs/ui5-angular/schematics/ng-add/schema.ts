import { Ui5WebcomponentsNgxSchematicsSchema } from "@ui5/webcomponents-ngx-schematics";

export interface NgAddSchema extends Ui5WebcomponentsNgxSchematicsSchema {
  useI18n: boolean;
  defaultLanguage?: string;
}
