import { ExportSpecifierType, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { format } from "prettier";
import { ThemingConfig } from "./theming-config.interface";
import { Ui5ThemingModels } from "./theming-models";

export class Ui5GlobalThemingService extends GeneratedFile {
  constructor(public config: ThemingConfig, private themingModels: Ui5ThemingModels) {
    super();
    this.move(`${this.config.themingServiceFileName}.ts`);
    this.initializeImportsAndExports();
  }

  initializeImportsAndExports(): void {
    this.addExport({
      local: 'Ui5ThemingService',
      exported: 'Ui5ThemingService',
      types: [ExportSpecifierType.Class],
    });
    this.addImport(['Inject', 'Injectable', 'isDevMode'], '@angular/core');
    this.addImport(['AvailableThemes', 'ThemingConfig', 'UI5_THEMING_CONFIGURATION', 'Ui5ThemingProvider', 'Ui5ThemingConsumer'], this.themingModels.relativePathFrom);
  }

  override getCode(): string {

    return format([
      this.getImportsCode(),
      `
      @Injectable({
        providedIn: 'root',
      })
      export class Ui5ThemingService implements Ui5ThemingConsumer {
        private readonly _providers: Ui5ThemingProvider[] = [];

        private _currentTheme: AvailableThemes;

        constructor(@Inject(UI5_THEMING_CONFIGURATION) private readonly _config: ThemingConfig) {
          this._currentTheme = this._config.defaultTheme;
          this.setTheme(this._config.defaultTheme);
        }

        /** Registers theming provider for further usage. */
        async registerProvider(provider: Ui5ThemingProvider): Promise<void> {
          await provider.setTheme(this._currentTheme);
          this._providers.push(provider);
        }
        /** Unregisteres previously registered theming provider. */
        unregisterProvider(provider: Ui5ThemingProvider): void {
          const providerIndex = this._providers.findIndex(pr => pr === provider);

          if (providerIndex === -1) {
            return;
          }

          this._providers.splice(providerIndex, 1);
        }

        async setTheme(theme: AvailableThemes): Promise<boolean> {
          this._currentTheme = theme;

          try {
            for (const provider of this._providers) {
              await provider.setTheme(this._currentTheme);
            }
          } catch(e) {
            if (isDevMode()) {
              console.error(e);
            }
            return false;
          }

          return true;
        }
      }
      `
    ].join('\n'), {parser: 'typescript'});
  }
}
