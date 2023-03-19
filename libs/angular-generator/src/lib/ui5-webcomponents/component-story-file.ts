import {ComponentData, dependencyRelativePath, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {StorybookFilesGeneratorOptions} from "./storybook-files-generator-options";
import {format as prettierFormat} from "prettier";
import {camelCase} from "lodash";
import JSDom from 'jsdom';

export class ComponentStoryFile extends GeneratedFile {
  private componentData: ComponentData;
  constructor(readonly sample: { sampleFilePath: string, componentData: ComponentData, stories: { name: string, code: string }[] }, options: StorybookFilesGeneratorOptions) {
    super();
    this.componentData = sample.componentData;
    this.move(options.storyFileNameFactory(sample.sampleFilePath));
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
        const dom = JSDom;
        const doc = new dom.JSDOM(story.code);
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
