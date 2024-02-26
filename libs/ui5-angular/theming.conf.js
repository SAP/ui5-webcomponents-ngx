const { GeneratedFile } = require("@ui5/webcomponents-transformer");

const supportedThemesFileLocation = 'theming/supported-themes.ts';

class SupportedThemesFile extends GeneratedFile {
  /**
   * @param supportedThemes {string[]}
   */
  constructor(supportedThemes) {
    super();
    this.supportedThemes = supportedThemes;
    this.move(supportedThemesFileLocation);
  }

  /** @returns {string} */
  getCode() {
    return `export default ${JSON.stringify(this.supportedThemes)};`;
  }

  relativePathFrom = () => "";
}

const themingConfig = (fs) => ({
  gatherer: () => fs.queryFiles('node_modules/@ui5/webcomponents-theming/dist/generated/assets/themes/**/*', []),
  transformers: [(themes) => ([new SupportedThemesFile(themes)])],
  logOutputFileNames: '.ngx-theming-result.json'
});

module.exports = themingConfig;
