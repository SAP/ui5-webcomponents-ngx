import { ExportSpecifierType, GeneratedFile } from '@ui5/webcomponents-wrapper';
import { format } from 'prettier';
import { AngularExportSpecifierType } from './angular-export-specifier-type';

export interface ThemingGeneratorConfig {
  themingPath: string;
  themingModuleFileName: string;
  themingServiceFileName: string;
}

export class WebcomponentsThemingGenerator {
  public module: WebcomponentsThemingModule;
  public service: WebcomponentsThemingService;

  config: ThemingGeneratorConfig = {
    themingPath: 'main',
    themingModuleFileName: 'ui5-webcomponents-theming.module',
    themingServiceFileName: 'ui5-webcomponents-theming.service'
  }

  constructor() {
    this.module = new WebcomponentsThemingModule(this.config);
    this.service = new WebcomponentsThemingService(this.config);
  }
}

export class WebcomponentsThemingModule extends GeneratedFile<AngularExportSpecifierType> {
  constructor(public config: ThemingGeneratorConfig) {
    super();
    this.move(`${this.config.themingPath}/${this.config.themingModuleFileName}.ts`);
    this.initializeImportsAndExports();
  }

  initializeImportsAndExports(): void {
    this.addExport({
      local: 'Ui5WebcomponentsThemingModule',
      exported: 'Ui5WebcomponentsThemingModule',
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule],
    });

    this.addImport(
      ['NgModule'],
      '@angular/core'
    );
    this.addImport(
      ['Ui5WebcomponentsThemingService'],
      `./${this.config.themingServiceFileName}`
    );
  }

  override getCode(): string {
    return format(
      `
      ${this.getImportsCode()}

      @NgModule({
        exports: [],
        declarations: [],
        providers: [Ui5WebcomponentsThemingService]
      })
      export class Ui5WebcomponentsThemingModule {
        constructor(public theming: Ui5WebcomponentsThemingService) {
        }
      }
      `,
      { parser: 'typescript' }
    );
  }
}

export class WebcomponentsThemingService extends GeneratedFile {
  constructor(public config: ThemingGeneratorConfig) {
    super();
    this.move(`${this.config.themingPath}/${this.config.themingServiceFileName}.ts`);
    this.initializeImportsAndExports();
  }

  initializeImportsAndExports(): void {
    this.addExport({
      local: 'Ui5WebcomponentsThemingService',
      exported: 'Ui5WebcomponentsThemingService',
      types: [ExportSpecifierType.Class],
    });

    this.addImport(['Injectable', 'OnDestroy', 'Optional'], '@angular/core');
    this.addImport(
      ['Ui5ThemingProvider', 'Ui5ThemingService', 'AvailableThemes'],
      '@ui5/theming-ngx'
    );
    this.addImport('setTheme', '@ui5/webcomponents-base/dist/config/Theme.js');
  }

  override getCode(): string {
    return format(
      `
      ${this.getImportsCode()}
      /**
       * Theming service specifically for the ui5/webcomponents-ngx components.
       */
      @Injectable({
        providedIn: 'root'
      })
      export class Ui5WebcomponentsThemingService implements Ui5ThemingProvider, OnDestroy {
        /** @hidden */
        constructor(@Optional() private readonly _globalThemingService: Ui5ThemingService) {
          this._globalThemingService?.registerProvider(this);
        }

        /** @hidden */
        ngOnDestroy(): void {
          this._globalThemingService?.unregisterProvider(this);
        }

        async setTheme(theme: AvailableThemes): Promise<boolean> {
          setTheme(theme);
          return true;
        }
      }
    `,
      { parser: 'typescript' }
    );
  }
}
