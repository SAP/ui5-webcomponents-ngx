import {GeneratedFile} from "@ui5/webcomponents-wrapper";
import {camelCase, kebabCase} from "lodash";
import {format} from "prettier";

export class AngularComponentStoryFile extends GeneratedFile {
  stories: { code: string; storyName: string; }[];
  componentName: string;

  constructor(stories: { code: string; storyName: string; }[], componentName: string, storyPath: string) {
    super();
    this.stories = stories;
    this.componentName = componentName;
    this.move(storyPath);
  }

  getCode(): string {
    let code = '';

    this.stories.forEach(story => {
      if (!story.code) {
        return;
      }

      const storyName = camelCase(story.storyName).replace(/`/gi, '\\`');
      const storyCode = story.code.replace(/<script>(.|\n)*?<\/script>/gi, '').replace(/`/gi, '\\`');

      code += `
      export const ${storyName}: Story = (args) => ({
      props: args,
      template: \`
        ${storyCode.trim()}
      \`
      });
      `
    });

    if (!code) {
      return '';
    }

    code = `
    import { Meta, Story, moduleMetadata } from '@storybook/angular';
    import { Ui5ThemingModule } from '@ui5/theming-ngx';

    import { Ui5AngularModule } from '../../ui5-angular.module';
    import { ${this.componentName}Directive } from '../directives/${kebabCase(this.componentName)}';

    export default {
      component: ${this.componentName}Directive,
      decorators: [
        moduleMetadata({
          imports: [Ui5AngularModule, Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' })],
        }),
      ],
    } as Meta;

    ${code}
    `;

    try {
      code = format(code, {parser: 'typescript'});
    } catch (e) {
      console.error('Error while formatting code', e);
    }

    return code;
  }
}
