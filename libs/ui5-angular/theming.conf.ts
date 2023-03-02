import {GeneratedFile, WrapperConfig} from "@ui5/webcomponents-wrapper";
import {readdirSync} from "fs";

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

export default {
  getComponents: () => readdirSync('node_modules/@ui5/webcomponents-theming/dist/generated/assets/themes'),
  generator: (themes) => ({[supportedThemesFileLocation]: new SupportedThemesFile(themes)})
} as Partial<WrapperConfig<string>>;
