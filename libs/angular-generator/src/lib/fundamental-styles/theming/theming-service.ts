import {ExportSpecifierType, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {NodeFsImplementation} from "@ui5/webcomponents-wrapper-fs-commit";
import {template} from "lodash";
import {format} from "prettier";

export class FundamentalThemingService extends GeneratedFile {
  constructor() {
    super();
    this.move('theming.service.ts');
    this.addExport({
      local: 'Ui5FundamentalThemingService',
      exported: 'Ui5FundamentalThemingService',
      types: [ExportSpecifierType.Class]
    });
  }

  override getCode(): string {
    this.addImport(['Injectable', 'OnDestroy', 'Optional'], '@angular/core');
    this.addImport(['Ui5ThemingProvider', 'Ui5ThemingService'], '@ui5/theming-ngx');
    this.addImport('Observable', 'rxjs');

    const serviceTemplate = template(`
      /**
       * Theming service specifically for the fundamental-styles static directives.
       */
      @Injectable({
        providedIn: 'root'
      })
      export class Ui5FundamentalThemingService implements Ui5ThemingProvider, OnDestroy {
        name = 'fundamental-styles-theming-service';

        /** @hidden */
        private readonly _themeSheet = new CSSStyleSheet();

        /** @hidden */
        constructor(@Optional() private readonly _globalThemingService: Ui5ThemingService) {
          document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            this._themeSheet,
          ];
          this._globalThemingService?.registerProvider(this);
        }

        /** @hidden */
        ngOnDestroy(): void {
          this._globalThemingService?.unregisterProvider(this);
          const stylesheetIndex = document.adoptedStyleSheets.findIndex(s => s === this._themeSheet);

          if (stylesheetIndex === -1) {
            return;
          }
          document.adoptedStyleSheets.splice(stylesheetIndex, 1);
        }

        supportsTheme(themeName: string): boolean {
          return this.getAvailableThemes().includes(themeName);
        }

        getAvailableThemes(): string[] {
          return ${JSON.stringify(this.getThemes())};
        }

        setTheme(theme: string): Observable<boolean> {
          return new Observable<boolean>((subscriber) => {
            this.loadTheme(theme).then((themeDefinition) => {
              return this._themeSheet.replace(themeDefinition);
            }).then(() => subscriber.next(true));
          });
        }

        private loadTheme(themeName: string): Promise<string> {
            ${this.getThemes().map((theme) => `if(themeName === ${JSON.stringify(theme)}) import('fundamental-styles/dist/js/theming/${theme}').then(m => m.default.cssSource);`).join('\n')}
            return Promise.resolve('');
        }
      }
    `)


    return format([this.getImportsCode(), serviceTemplate({themes: this.getThemes()})].join('\n'), {parser: 'typescript'});
  }

  getThemes(): string[] {
    const nodeFs = new NodeFsImplementation();

    const fdPath = nodeFs.normalize('node_modules/fundamental-styles/dist/theming/');

    const themes = nodeFs.queryFiles(`${fdPath}**.css`, []);

    return themes.map((theme) => {
      return nodeFs.basename(theme, nodeFs.extname(theme));
    });
  }
}
