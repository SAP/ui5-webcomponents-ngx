import { ExportSpecifierType, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { format } from "prettier";
import { pascalCase } from "./helpers";

export class FundamentalStaticDirectiveLibrary extends GeneratedFile {
  public directive: FundamentalStaticDirective;
  public package: FundamentalStaticDirectivePackage;
  constructor(public file: string) {
    super();
    this.move(`directives/${this.file}/index.ts`);
    this.directive = new FundamentalStaticDirective(this.file);
    this.package = new FundamentalStaticDirectivePackage(this.file);
  }

  override getCode(): string {
    return format(`
    export * from './${this.directive.fileName}';
    `, {parser: 'typescript'});
  }
}

export class FundamentalStaticDirectivePackage extends GeneratedFile {
  constructor(public file: string) {
    super()
    this.move(`directives/${this.file}/ng-package.json`);
  }

  override getCode(): string {
      return format(`
      {
        "lib": {
          "entryFile": "./index.ts"
        }
      }

      `, {parser: 'json'});
  }
}

export class FundamentalStaticDirective extends GeneratedFile {
  public directiveName: string;
  public fileName: string;
  constructor(public file: string) {
    super();
    this.fileName = `fd-${file}.directive`;
    this.directiveName = pascalCase(this.fileName);
    this.move(`directives/${file}/${this.fileName}.ts`);
    this.addExport({
      local: this.directiveName,
      exported: this.directiveName,
      path: `@fundamental-styles/theming-ngx/src/directives/${file}`,
      types: [ExportSpecifierType.Class],
    }, `@fundamental-styles/theming-ngx/src/directives/${file}`);
  }

  override getCode(): string {
    this.addImport(['Directive', 'OnDestroy'], '@angular/core');

    return format([this.getImportsCode(), `

    let counter = 0;
    let styleSheet: CSSStyleSheet;

    @Directive({
      selector: '.${this.file.startsWith('fd-') ? '' : 'fd-'}${this.file}',
      standalone: true
    })
    export class ${this.directiveName} implements OnDestroy {
      /** @hidden */
      constructor() {
        counter++;

        // Stylesheet was already loaded by another directive. Skip it.
        if (counter > 1) {
          return;
        }
        styleSheet = new CSSStyleSheet();
        document.adoptedStyleSheets = [
          ...document.adoptedStyleSheets,
          styleSheet,
        ];

        import('fundamental-styles/dist/js/${this.file}').then((styles) => {
          styleSheet.replaceSync(styles.default.cssSource);
        });
      }

      /** @hidden */
      ngOnDestroy(): void {
        counter--;
        if (counter === 0) {
          styleSheet.replace('');
        }
      }
    }
    `].join('\n'), {parser: 'typescript'});
  }
}
