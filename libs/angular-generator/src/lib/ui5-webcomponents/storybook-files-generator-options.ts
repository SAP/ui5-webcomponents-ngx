/**
 * Configuration options for the Storybook files generator.
 */
export interface StorybookFilesGeneratorOptions {
  /**
   * Factory function for generating the story file path
   * @param samplePath
   */
  storyFileNameFactory: (samplePath: string) => string;
}
