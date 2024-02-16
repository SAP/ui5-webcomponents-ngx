import { FileSystemInterface, GeneratedFile } from "@ui5/webcomponents-transformer";
import { Ui5NgxTransformerConfig } from "@ui5/webcomponents-ngx-schematics";

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

const themingConfig: Ui5NgxTransformerConfig<string> = (fs: FileSystemInterface) => ({
  gatherer: () => fs.queryFiles('node_modules/@ui5/webcomponents-theming/dist/generated/assets/themes/**/*', []),
  transformers: [(themes: string[]) => ([new SupportedThemesFile(themes)])]
});

export default themingConfig;
