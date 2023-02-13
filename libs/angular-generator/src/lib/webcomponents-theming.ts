import { ExportSpecifierType, GeneratedFile } from '@ui5/webcomponents-wrapper';
import { format } from 'prettier';
import { AngularExportSpecifierType } from './angular-export-specifier-type';
import { NodeFsImplementation } from "@ui5/webcomponents-wrapper-fs-commit";

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
    this.service = new WebcomponentsThemingService(this.config);
    this.module = new WebcomponentsThemingModule(this.config, this.service);
  }
}

export class WebcomponentsThemingModule extends GeneratedFile<AngularExportSpecifierType> {
  constructor(public config: ThemingGeneratorConfig, private service: WebcomponentsThemingService) {
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
      this.service.relativePathFrom
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
  private _fs = new NodeFsImplementation();
  private _ui5ThemingPath = this._fs.normalize('node_modules/@ui5/webcomponents-theming/dist/generated/assets/themes/');

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
    this.addImport(['BehaviorSubject', 'map', 'Observable', 'of', 'from', 'tap', 'switchMap'], 'rxjs');
    this.addImport(
      ['Ui5ThemingProvider', 'Ui5ThemingService'],
      '@ui5/theming-ngx'
    );

    this.addImport('registerThemePropertiesLoader', '@ui5/webcomponents-base/dist/asset-registries/Themes.js');
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
        name = 'ui5-webcomponents-theming-service';

        private availableThemes$ = new BehaviorSubject<string[]>(${JSON.stringify(this._fs.readDir(this._ui5ThemingPath))});

        private themeSetters = new Map<string, () => Observable<boolean>>(this.availableThemes$.value.map((themeName) => {
          return [themeName, () => {
            registerThemePropertiesLoader(
              '@ui5/webcomponents-theming',
              themeName,
              this.loadTheme as any
            );
            setTheme(themeName);
            return of(true);
          }];
        }));

        /** @hidden */
        constructor(
          @Optional() private readonly _globalThemingService: Ui5ThemingService
        ) {
          this._globalThemingService?.registerProvider(this);
        }

        /** @hidden */
        ngOnDestroy(): void {
          this._globalThemingService?.unregisterProvider(this);
        }

        supportsTheme(theme: string): Observable<boolean> {
          return this.getAvailableThemes().pipe(
            map((themes) => themes.includes(theme))
          );
        }

        getAvailableThemes(): Observable<string[]> {
          return this.availableThemes$.asObservable();
        }

        setTheme(theme: string): Observable<boolean> {
          const setter = this.themeSetters.get(theme);
          if (setter) {
            return setter();
          }
          return of(false);
        }

        registerTheme(params: { theme: string, setTheme: () => Observable<{ packageName: string, fileName: string, content: string }> }): void {
          if (this.themeSetters.has(params.theme)) {
            throw new Error(\`Theme \${params.theme} is already registered.\`);
          }
          this.themeSetters.set(params.theme, () =>
            params.setTheme().pipe(
              tap((r) => {
                registerThemePropertiesLoader(r.packageName, params.theme, () =>
                  Promise.resolve(r)
                );
              }),
              switchMap(() => from(setTheme(params.theme))),
              map(() => true)
            )
          );
          this.availableThemes$.next([...this.themeSetters.keys()]);
        }

        private loadTheme(theme: string): Promise<any> {
          return import(
              \`@ui5/webcomponents-theming/dist/generated/assets/themes/\${theme}/parameters-bundle.css.json\`
            ).then((module) => {
            return module.default;
          });
        }
      }
    `,
      { parser: 'typescript' }
    );
  }
}
