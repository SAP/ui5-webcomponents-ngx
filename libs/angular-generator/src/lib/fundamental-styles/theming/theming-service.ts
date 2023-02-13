import { ExportSpecifierType, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { NodeFsImplementation } from "@ui5/webcomponents-wrapper-fs-commit";
import { template } from "lodash";
import { format } from "prettier";

export class FundamentalThemingService extends GeneratedFile {
  public themes = this.getThemes();
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
    const themes = this.themes;

    this.addImport(['Injectable', 'OnDestroy', 'Optional'], '@angular/core');
    this.addImport(['Ui5ThemingProvider', 'Ui5ThemingService', 'AvailableThemes'], '@ui5/theming-ngx');

    const serviceTemplate = template(`
      /**
       * Theming service specifically for the fundamental-styles static directives.
       */
      @Injectable({
        providedIn: 'root'
      })
      export class Ui5FundamentalThemingService implements Ui5ThemingProvider, OnDestroy {
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

        async setTheme(theme: AvailableThemes): Promise<boolean> {
          let themeDefinition: string;
          switch(theme) {
            <% themes.forEach((theme) => { %>
              case '<%= theme %>':
                themeDefinition = (await import('fundamental-styles/dist/js/theming/<%= theme %>')).default.cssSource;
                break;
            <% }) %>
          }

          await this._themeSheet.replace(themeDefinition);
          return true;
        }
      }
    `)


    return format([this.getImportsCode(), serviceTemplate({themes})].join('\n'), {parser: 'typescript'});
  }
  getThemes(): string[] {
    const nodeFs = new NodeFsImplementation();

    const fdPath = nodeFs.normalize('node_modules/fundamental-styles/dist/theming/');

    const themes = nodeFs.queryFiles(`${fdPath}**.css`, []);

    return themes.map((theme) => {
      const themeName = nodeFs.basename(theme, nodeFs.extname(theme));
      return themeName;
    });
  }
}
