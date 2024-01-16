import { PathLike } from "fs";
import { NodeFsImplementation } from "@ui5/webcomponents-transformer-fs-commit";
import { JSDOM } from "jsdom";
import { FileSystemInterface } from "@ui5/webcomponents-transformer";

/**
 * UI5 Samples parser configuration
 */
interface ParserOptions {
  /**
   * List of the sample HTML files' paths
   */
  sampleFiles: PathLike[];
  /**
   * Factory function for getting the story sections from the sample HTML file
   * @param rootElement
   */
  getStorySections: (rootElement: Document) => HTMLElement[];
  /**
   * Factory function for getting the story name from the story section
   * @param storySection
   */
  getStoryName: (storySection: HTMLElement) => string;
  /**
   * Factory function for getting the story code from the story section
   * @param storySection
   */
  getStoryCode: (storySection: HTMLElement) => string;
}

export interface ParsedSample {
  stories: { code: string; name: string }[];
  sampleFilePath: PathLike
}

/**
 * Parses the UI5 samples HTML code and returns the Array
 * of the sample objects.
 *
 * Uses the JSDOM for parsing the HTML code, which is in
 * the sample files.
 *
 * @param options {ParserOptions}
 * @param fs {FileSystemInterface} the file system implementation to use for reading the sample files
 */
export function ui5SamplesParser(options: ParserOptions, fs: FileSystemInterface = new NodeFsImplementation()): ParsedSample[] {
  return options.sampleFiles.map(samplePath => {
    const sampleContent = fs.read(samplePath.toString());
    const sampleDocument = new JSDOM(sampleContent);
    const storySections = options.getStorySections(sampleDocument.window.document);
    return {
      sampleFilePath: samplePath,
      stories: storySections.map(storySection => {
        return {
          name: options.getStoryName(storySection),
          code: options.getStoryCode(storySection),
        }
      })
    };
  });
}
