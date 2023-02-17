import {dependencyRelativePath, ExportSpecifierType, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {NodeFsImplementation} from "@ui5/webcomponents-wrapper-fs-commit";
import {format} from "prettier";
import {ThemingConfig} from "./theming-config.interface";

export class Ui5ThemingModels extends GeneratedFile {
  relativePathFrom = (path) => dependencyRelativePath(path, this.parsedPath);

  constructor(public config: ThemingConfig) {
    super();
    this.move(`${this.config.themingModelsFileName}.ts`);
    this.initializeImportsAndExports();
  }

  initializeImportsAndExports(): void {
    this.addExport({
      local: '*',
      exported: '*',
      types: [ExportSpecifierType.Variable],
    });
    this.addImport('InjectionToken', '@angular/core');
    this.addImport('Observable', 'rxjs');
  }

  getThemeNames(): string[] {
    const nodeFs = new NodeFsImplementation();

    const fdPath = nodeFs.normalize('node_modules/fundamental-styles/dist/theming/');
    const ui5Path = nodeFs.normalize('node_modules/@ui5/webcomponents-theming/dist/generated/assets/themes/');

    const fdThemes = nodeFs.queryFiles(`${fdPath}**.css`, []).map((themePath) => nodeFs.basename(themePath, nodeFs.extname(themePath)));
    const ui5Themes = nodeFs.readDir(ui5Path).map((themePath) => nodeFs.basename(themePath, nodeFs.extname(themePath)));

    return fdThemes.filter((item) => ui5Themes.includes(item));
  }

  override getCode(): string {
      return format(`
      ${this.getImportsCode()}
      export interface ThemingConfig {
        defaultTheme: string;
      }
      export const UI5_THEMING_CONFIGURATION = new InjectionToken<ThemingConfig>('Ui5 global theming configuration.');

      export interface Ui5ThemingProvider {
        name: string;
        getAvailableThemes(): string[] | Observable<string[]>;
        supportsTheme(themeName: string): boolean | Observable<boolean>;
        setTheme(themeName: string): Observable<boolean>;
      }

      export interface Ui5ThemingConsumer extends Omit<Ui5ThemingProvider, 'name'> {
        registerProvider(provider: Ui5ThemingProvider): void;
        unregisterProvider(provider: Ui5ThemingProvider): void;
      }
      `, {parser: 'typescript'})
  }
}
