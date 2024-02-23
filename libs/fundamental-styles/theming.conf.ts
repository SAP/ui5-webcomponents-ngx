import { FileSystemInterface, GeneratedFile } from "@ui5/webcomponents-transformer";
import { Ui5NgxTransformerConfig } from "@ui5/webcomponents-ngx-schematics";

export function getFundamentalStylesThemes(fs: FileSystemInterface): string[] {
  return fs.queryFiles(
    'node_modules/fundamental-styles/dist/js/theming/*.mjs',
    []
  ).map(f => f.replace(/^node_modules\/fundamental-styles\/dist\/js\/theming\/(.*)\.mjs$/, '$1'));
}

const supportedThemesFileLocation = 'theming/theming.config.ts';

class SupportedThemesFile extends GeneratedFile {
  constructor(protected supportedThemes: string[]) {
    super();
    this.move(supportedThemesFileLocation);
  }

  override getCode(): string {
    return `
        import {isDevMode} from '@angular/core';
        const themes = {${this.supportedThemes.map(themeName => `['${themeName}']: import('fundamental-styles/dist/js/theming/${themeName}').then(({default: {cssSource}}) => cssSource)`).join(',\n')}};
        export const AvailableThemes: string[] = ${JSON.stringify(this.supportedThemes)}
        export const LoadTheme: (theme: string) => Promise<string> = async (themeName: string): Promise<string> => {
            if (!themes[themeName]) {
                if (isDevMode()) {
                    console.warn(\`Theme \${themeName} is not supported. Supported themes are: \${AvailableThemes.join(', ')}\`)
                }
                return '';
            }
            return themes[themeName];
        };
    `;
  }

  relativePathFrom = (): string => "";
}

export default ((fs: FileSystemInterface) => ({
  gatherer: () => getFundamentalStylesThemes(fs),
  transformers: [(themes) => [new SupportedThemesFile(themes)]],
  logOutputFileNames: '.supported-themes.json'
})) as Ui5NgxTransformerConfig<string>;
