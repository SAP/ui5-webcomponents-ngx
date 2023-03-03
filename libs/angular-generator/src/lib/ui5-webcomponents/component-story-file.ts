import {dependencyRelativePath, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {StorybookFilesGeneratorOptions} from "./storybook-files-generator-options";
import {format as prettierFormat} from "prettier";
import {camelCase} from "lodash";

export class ComponentStoryFile extends GeneratedFile {
  constructor(readonly sample: { sampleFilePath: string, stories: { name: string, code: string }[] }, options: StorybookFilesGeneratorOptions) {
    super();
    this.move(options.storyFileNameFactory(sample.sampleFilePath));
    this.initializeImports();
  }
  defaultExport!: () => string;

  initializeImports() {
    this.addImport(['Meta', 'Story', 'moduleMetadata'], '@storybook/angular');
  }

  override getCode(): string {
    const stories = this.sample.stories.map(story => {
      if (!story.code || story.code.indexOf('<script>') !== -1) {
        return '';
      }
      return `
          export const ${camelCase(story.name)}: Story = (args) => ({
            props: args,
            template: \`${story.code}\`
          });
        `
    }).join('\n');
    return prettierFormat([
      this.getImportsCode(),
      this.defaultExport(),
      stories
    ].join('\n'), {parser: 'typescript'});
  }

  relativePathFrom = (requester): string => dependencyRelativePath(requester, this.parsedPath);
}
