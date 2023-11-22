import { FileSystemInterface, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { Ui5NxWrapperConfig } from "@ui5/webcomponents-nx";

const supportedThemesFileLocation = 'theming/supported-themes.ts';

class SupportedThemesFile extends GeneratedFile {
  constructor(protected supportedThemes: string[]) {
    super();
    this.move(supportedThemesFileLocation);
  }

  override getCode(): string {
    return `export default ${JSON.stringify(this.supportedThemes)};`;
  }

  relativePathFrom = (): string => "";
}

const themingConfig: Ui5NxWrapperConfig<string> = (fs: FileSystemInterface) => ({
  getComponents: () => fs.queryFiles('node_modules/@ui5/webcomponents-theming/dist/generated/assets/themes/**/*', []),
  generator: (themes) => ({[supportedThemesFileLocation]: new SupportedThemesFile(themes)})
});

export default themingConfig;
