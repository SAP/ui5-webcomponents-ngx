import {GeneratedFile, WrapperConfig} from "@ui5/webcomponents-wrapper";
import {NodeFsImplementation} from "@ui5/webcomponents-wrapper-fs-commit";

export function getFundamentalStylesThemes(): string[] {
  const fs = new NodeFsImplementation();

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

export default {
  getComponents: getFundamentalStylesThemes,
  generator: (themes) => ({[supportedThemesFileLocation]: new SupportedThemesFile(themes)})
} as Partial<WrapperConfig<string>>;
