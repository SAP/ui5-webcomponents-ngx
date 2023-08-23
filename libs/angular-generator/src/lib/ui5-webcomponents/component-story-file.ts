import { ComponentData, dependencyRelativePath, GeneratedFile } from "@ui5/webcomponents-wrapper";
import { StorybookFilesGeneratorOptions } from "./storybook-files-generator-options";
import { format as prettierFormat } from "prettier";
import { camelCase } from "lodash";
import { PathLike } from "fs";

/**
 * Component story file creator
 * This is for creating stories, based on a component sample HTML file
 */
export class ComponentStoryFile extends GeneratedFile {
  constructor(readonly sample: { sampleFilePath: PathLike, componentData: ComponentData, stories: { name: string, code: string }[] }, options: StorybookFilesGeneratorOptions) {
    super();
    this.move(options.storyFileNameFactory(sample.sampleFilePath.toString()));
    this.initializeImports();
  }
  defaultExport!: () => string;
  componentClassName: () => string = () => this.sample.componentData.baseName + 'Component';
  initializeImports() {
    this.addImport(['Meta', 'Story', 'moduleMetadata'], '@storybook/angular');
  }

  override getCode(): string {
    const stories: string[] = [];
    this.sample.stories.forEach(story => {
      if (!story.code || story.code.toString().indexOf('<script>') > -1) {
        return;
      }
      stories.push(`
          export const ${camelCase(story.name)}: Story<${this.componentClassName()}> = (args: ${this.componentClassName()} & any) => ({
            props: args,
            template: \`${story.code}\`
          });
        `);
    });

    return prettierFormat([
      this.getImportsCode(),
      this.defaultExport(),
      stories.join('\n')
    ].join('\n'), {parser: 'typescript'});
  }

  relativePathFrom = (requester): string => dependencyRelativePath(requester, this.parsedPath);
}
