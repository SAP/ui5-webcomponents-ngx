import {dependencyRelativePath, ExportSpecifierType, GeneratedFile} from "@ui5/webcomponents-wrapper";
import { format } from "prettier";
import { FundamentalStaticDirectiveLibrary } from "./fundamental-directive";

export class FundamentalStaticModule extends GeneratedFile {
  relativePathFrom = (path) => dependencyRelativePath(path, this.parsedPath);
  constructor(public directives: Record<string, FundamentalStaticDirectiveLibrary>) {
    super();
    this.move('fundamental-styles-theming.module.ts');
    this.addExport({
      local: 'FundamentalStylesThemingModule',
      exported: 'FundamentalStylesThemingModule',
      types: [ExportSpecifierType.Class],
    });
  }

  override getCode(): string {
    this.addImport(['NgModule', 'ModuleWithProviders', 'Optional', 'isDevMode'], '@angular/core');
    const imports: string[] = [];
    this.addImport(['Ui5FundamentalThemingService'], './theming.service');
    Object.values(this.directives).forEach((directive) => {
      this.addImport(directive.directive.directiveName, `@fundamental-styles/theming-ngx/src/directives/${directive.directive.file}`);
      imports.push(directive.directive.directiveName);
    });

    return format([
      this.getImportsCode(),
      `
      const declarations = [${imports.join(', ')}];
      @NgModule({
        exports: [...declarations],
        imports: [...declarations]
      })
      export class FundamentalStylesThemingModule {
        constructor(@Optional() public theming: Ui5FundamentalThemingService) {
          if (!this.theming && isDevMode()) {
            console.error('Could not find Ui5FundamentalThemingService. Make sure you called .forRoot() for FundamentalStylesThemingModule');
          }
        }
        static forRoot(): ModuleWithProviders<FundamentalStylesThemingModule> {
          return {
            ngModule: FundamentalStylesThemingModule,
            providers: [
              Ui5FundamentalThemingService
            ],
          };
        }
      }
      `
    ].join('\n'), {parser: 'typescript'});
  }
}
