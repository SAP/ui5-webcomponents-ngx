import {AngularGeneratedFile} from "../angular-generated-file";
import {AngularGeneratorOptions} from "../angular-generator-options";
import {format} from "prettier";
import {parse, join, dirname, basename} from "path";
import {pascalCase} from "./helpers";
import {AngularExportSpecifierType} from "../angular-export-specifier-type";

/**
 * The fundamental-styles directive code
 */
export class FundamentalStylesDirectiveFile extends AngularGeneratedFile {
  /**
   * The path to the styles js file
   * @protected
   */
  protected sourceFilePath: string;
  /**
   * Selector of the directive
   * @protected
   */
  protected selector: string;
  /**
   * The class name of the directive
   * @protected
   */
  protected className: string;

  constructor(fdComponentJsPath: string, options: AngularGeneratorOptions) {
    super();
    this.move(options.exportFileNameFactory(fdComponentJsPath));
    this.apfPath = options.apfPathFactory(fdComponentJsPath);
    this.addImport(['Directive', 'OnDestroy'], '@angular/core');
    this.sourceFilePath = fdComponentJsPath;
    this.selector = `.fd-${parse(fdComponentJsPath).name}`;
    this.className = `${pascalCase(this.selector.replace('.fd-', ''))}Directive`;
    this.addExport({
      local: this.className,
      exported: this.className,
      types: [AngularExportSpecifierType.NgModule]
    })
  }

  override getCode(): string {
    return format([this.getImportsCode(), `

    let counter = 0;
    let styleSheet: CSSStyleSheet;

    @Directive({
      selector: '${this.selector}',
      standalone: true
    })
    class ${this.className} implements OnDestroy {
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

        import(${JSON.stringify(join(dirname(this.sourceFilePath), basename(this.sourceFilePath, '.mjs')))}).then((styles) => {
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
    `, this.getExportsCode()].join('\n'), {parser: 'typescript'});
  }
}
