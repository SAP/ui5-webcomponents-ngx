import {StorybookFilesGeneratorOptions} from "./storybook-files-generator-options";
import {ComponentStoryFile} from "./component-story-file";

export function storybookFilesGenerator(items: Array<{ sampleFilePath: string, stories: { name: string, code: string }[] }>, options: StorybookFilesGeneratorOptions): Record<string, ComponentStoryFile> {
  return items.reduce((acc, item) => {
    if (!item.stories.every(({code}) => code && code.indexOf('<script>') > -1)) {
      const storyFile = new ComponentStoryFile(item, options);
      acc[storyFile.path] = storyFile;
    }
    return acc;
  }, {});
}
