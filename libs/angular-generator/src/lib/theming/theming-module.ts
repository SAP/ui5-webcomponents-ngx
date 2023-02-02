import { ExportSpecifierType, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { format } from "prettier";

export class Ui5GlobalThemingModule extends GeneratedFile {
  constructor() {
    super();
    this.move('ui5-theming.module.ts');
    this.addExport({
      local: 'Ui5ThemingModule',
      exported: 'Ui5ThemingModule',
      types: [ExportSpecifierType.Class],
    });
  }

  override getCode(): string {
    this.addImport(['NgModule', 'ModuleWithProviders', 'Optional', 'isDevMode', 'InjectionToken'], '@angular/core');
    this.addImport(['Ui5ThemingService'], './ui5-theming.service');
    this.addImport(['ThemingConfig', 'UI5_THEMING_CONFIGURATION'], './ui5-theming.models');

    return format([
      this.getImportsCode(),
      `
      @NgModule({
        exports: [],
        declarations: []
      })
      export class Ui5ThemingModule {
        constructor(@Optional() public theming: Ui5ThemingService) {
          if (!this.theming && isDevMode()) {
            console.error('Could not find Ui5ThemingService. Make sure you called .forRoot() for Ui5ThemingModule');
          }
        }
        static forRoot(config: ThemingConfig): ModuleWithProviders<Ui5ThemingModule> {
          return {
            ngModule: Ui5ThemingModule,
            providers: [
              Ui5ThemingService,
              {
                provide: UI5_THEMING_CONFIGURATION,
                useValue: config
              }
            ]
          };
        }
      }
      `
    ].join('\n'), {parser: 'typescript'});
  }
}
