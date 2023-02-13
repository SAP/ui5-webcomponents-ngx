import { ExportSpecifierType, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { format } from "prettier";
import { ThemingConfig } from "./theming-config.interface";
import { Ui5GlobalThemingService } from "./theming-service";
import { Ui5ThemingModels } from "./theming-models";

export class Ui5GlobalThemingModule extends GeneratedFile {
  constructor(public config: ThemingConfig, private themingService: Ui5GlobalThemingService, private themingModels: Ui5ThemingModels) {
    super();
    this.move(`${this.config.themingModuleFileName}.ts`);
    this.initializeImportsAndExports();
  }

  initializeImportsAndExports(): void {
    this.addExport({
      local: 'Ui5ThemingModule',
      exported: 'Ui5ThemingModule',
      types: [ExportSpecifierType.Class],
    });
    this.addImport(['NgModule', 'ModuleWithProviders', 'Optional', 'isDevMode'], '@angular/core');
    this.addImport(['Ui5ThemingService'], this.themingService.relativePathFrom);
    this.addImport(['ThemingConfig', 'UI5_THEMING_CONFIGURATION'], this.themingModels.relativePathFrom);
  }

  override getCode(): string {
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
