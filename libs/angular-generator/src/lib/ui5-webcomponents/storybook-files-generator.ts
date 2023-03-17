import {StorybookFilesGeneratorOptions} from "./storybook-files-generator-options";
import {ComponentStoryFile} from "./component-story-file";
import {ComponentData} from "@ui5/webcomponents-wrapper";

export function storybookFilesGenerator(items: Array<{ sampleFilePath: string, componentData: ComponentData, stories: { name: string, code: string }[] }>, options: StorybookFilesGeneratorOptions): Record<string, ComponentStoryFile> {
  return items.reduce((acc, item) => {
    const storyFile = new ComponentStoryFile(item, options);
    acc[storyFile.path] = storyFile;
    return acc;
  }, {});
}
