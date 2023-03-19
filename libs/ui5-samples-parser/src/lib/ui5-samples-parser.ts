import {PathLike} from "fs";
import {NodeFsImplementation} from "@ui5/webcomponents-wrapper-fs-commit";
import {JSDOM} from "jsdom";

interface ParserOptions {
  sampleFiles: PathLike[];
  getStorySections: (rootElement: Document) => HTMLElement[];
  getStoryName: (storySection: HTMLElement) => string;
  getStoryCode: (storySection: HTMLElement) => string;
}

export function ui5SamplesParser(options: ParserOptions) {
  const fs = new NodeFsImplementation();
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
