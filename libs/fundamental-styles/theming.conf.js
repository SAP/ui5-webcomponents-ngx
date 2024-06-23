const { GeneratedFile } = require("@ui5/webcomponents-transformer");

function getFundamentalStylesThemes(fs) {
  return fs.queryFiles(
    'node_modules/fundamental-styles/dist/js/theming/*.mjs',
    []
  ).map(f => f.replace(/^node_modules\/fundamental-styles\/dist\/js\/theming\/(.*)\.mjs$/, '$1'));
}

const supportedThemesFileLocation = 'theming/theming.config.ts';

class SupportedThemesFile extends GeneratedFile {
  constructor(supportedThemes) {
    super();
    this.supportedThemes = supportedThemes;
    this.move(supportedThemesFileLocation);
  }

  getCode() {
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

  relativePathFrom = () => "";
}

module.exports = (fs) => ({
  gatherer: () => getFundamentalStylesThemes(fs),
  transformers: [(themes) => [new SupportedThemesFile(themes)]],
  logOutputFileNames: '.supported-themes.json'
});
