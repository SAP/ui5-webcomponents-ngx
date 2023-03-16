import {ComponentData, dependencyRelativePath, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {StorybookFilesGeneratorOptions} from "./storybook-files-generator-options";
import {format as prettierFormat} from "prettier";
import {camelCase} from "lodash";

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
    const stories: string[] = [
      `export const ApplyChanges: Story<${this.componentClassName()}> = (args: ${this.componentClassName()} & any) => ({
        props: args,
        template: \`
          <${this.componentData.selector}>
            ${this.componentData.slots.map(({name}) => {
              if (name === 'default') {
                return `\${args.content}`
              }
              return `<slot slot="${name}">\${args.${name}}</slot>`
      }).join('\n')}
          </${this.componentData.selector}>
        \`
        });`
    ];
    this.sample.stories.forEach(story => {
      if (!story.code || story.code.indexOf('<script>') !== -1) {
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
