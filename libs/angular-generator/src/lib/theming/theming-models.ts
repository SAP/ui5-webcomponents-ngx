import { ExportSpecifierType, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { NodeFsImplementation } from "@ui5/webcomponents-wrapper-fs-commit";
import { format } from "prettier";

export class Ui5ThemingModels extends GeneratedFile {
  constructor() {
    super();
    this.move('ui5-theming.models.ts');
    this.addExport({
      local: '*',
      exported: '*',
      types: [ExportSpecifierType.Variable],
    });
  }

  getThemeNames(): string[] {
    const nodeFs = new NodeFsImplementation();

    const fdPath = nodeFs.normalize('node_modules/fundamental-styles/dist/theming/');

    return nodeFs.queryFiles(`${fdPath}**.css`, []).map((themePath) => nodeFs.basename(themePath, nodeFs.extname(themePath)));
  }

  override getCode(): string {
    this.addImport(['InjectionToken'], '@angular/core');
      return format(`
      ${this.getImportsCode()}
      // TODO: This should come from somewhere.
      export type AvailableThemes = ${this.getThemeNames().map((theme) => `'${theme}'`).join('|')};
      export interface ThemingConfig {
        defaultTheme: AvailableThemes;
      }
      export const UI5_THEMING_CONFIGURATION = new InjectionToken<ThemingConfig>('Ui5 global theming configuration.');

      export interface Ui5ThemingProvider {
        setTheme(themeName: AvailableThemes): Promise<boolean>;
      }

      export interface Ui5ThemingConsumer extends Ui5ThemingProvider {
        registerProvider(provider: Ui5ThemingProvider): void;
        unregisterProvider(provider: Ui5ThemingProvider): void;
      }
      `, {parser: 'typescript'})
  }
}
