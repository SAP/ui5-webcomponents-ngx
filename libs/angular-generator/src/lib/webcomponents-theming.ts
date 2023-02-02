import { ExportSpecifierType, GeneratedFile } from '@ui5/webcomponents-wrapper';
import { format } from 'prettier';
import { AngularExportSpecifierType } from './angular-export-specifier-type';

export class WebcomponentsThemingGenerator {
  public module: WebcomponentsThemingModule;
  public service: WebcomponentsThemingService;

  constructor() {
    this.module = new WebcomponentsThemingModule();
    this.service = new WebcomponentsThemingService();
  }
}

export class WebcomponentsThemingModule extends GeneratedFile<AngularExportSpecifierType>{
  constructor() {
    super();
    this.move('main/ui5-webcomponents-theming.module.ts');
    this.addExport({
      local: 'Ui5WebcomponentsThemingModule',
      exported: 'Ui5WebcomponentsThemingModule',
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule]
    })
  }

  override getCode(): string {
    this.addImport(
      ['NgModule', 'ModuleWithProviders', 'Optional', 'isDevMode'],
      '@angular/core'
    );
    const imports: string[] = [];
    this.addImport(
      ['Ui5WebcomponentsThemingService'],
      './ui5-webcomponents-theming.service'
    );

    return format(
      [
        this.getImportsCode(),
        `
      const declarations = [${imports.join(', ')}];
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
      ].join('\n'),
      { parser: 'typescript' }
    );
  }
}

export class WebcomponentsThemingService extends GeneratedFile {
  constructor() {
    super();
    this.move('main/ui5-webcomponents-theming.service.ts');
    this.addExport({
      local: 'Ui5WebcomponentsThemingService',
      exported: 'Ui5WebcomponentsThemingService',
      path: 'main/ui5-webcomponents-theming.service.ts',
      types: [ExportSpecifierType.Class]
    });
  }

  override getCode(): string {
    this.addImport(['Injectable', 'OnDestroy', 'Optional'], '@angular/core');
    this.addImport(['Ui5ThemingProvider', 'Ui5ThemingService', 'AvailableThemes'], '@ui5/theming-ngx');
    this.addImport('setTheme', '@ui5/webcomponents-base/dist/config/Theme.js');
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
