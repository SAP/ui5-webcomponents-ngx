import {WrapperConfig} from '@ui5/webcomponents-wrapper';
import {fundamentalGenerator} from '@ui5/webcomponents-ngx-generator';
import {NodeFsImplementation} from '@ui5/webcomponents-wrapper-fs-commit';
import {join} from 'path';

export function getFundamentalStyles(): string[] {
  const fs = new NodeFsImplementation();

  return fs.queryFiles(
    'node_modules/fundamental-styles/dist/js/*.mjs',
    []
  ).map(f => f.replace(/^node_modules\/(.*)/, '$1'));
}

export default {
  getComponents: () => getFundamentalStyles(),
  generator: (styles) =>
    fundamentalGenerator(styles, {
      modules: [
        {
          fileName: 'fundamental-styles-components.module.ts',
          included: () => true
        }
      ],
      exportFileNameFactory: (sourceFilePath) => {
        return sourceFilePath.replace(/^fundamental-styles\/dist\/js\/(.*)\.mjs$/g, 'directives/$1/index.ts');
      },
      apfPathFactory: (sourceFilePath) => {
        if (sourceFilePath.endsWith('.ts')) {
          const pathSegments = sourceFilePath.split('/').slice(0, -1);
          return join('@fundamental-styles/theming-ngx', ...pathSegments);
        }
        return join('@fundamental-styles/theming-ngx', sourceFilePath.replace(/^fundamental-styles\/dist\/js\/(.*)\.mjs$/, 'directives/$1'));
      }
    }),
} as Partial<WrapperConfig<string>>;
/*
config itself
storybookConfig?: {
    getStorySections: (rootElement: Document) => HTMLElement[];
    getStoryName: (storySection: HTMLElement) => string;
    getStoryCode: (storySection: HTMLElement) => string;
    samples: Array<{html: string; componentName: string, storyPath: string}>;
  }

  * this is configuring
  storybookConfig: {
      samples: sync(join(__dirname, 'src', '**', '*.html')).map((path) => {
        return {
          html: readFileSync(path, 'utf-8'),
          componentName: path.replace(/.+\/([^\\.]+)\.sample\.html$/, '$1'),
          storyPath: relative(join(__dirname, 'src'), path).replace(/\/(samples)\/(.+)(\.sample\.html)/g, '/stories/$2.stories.ts')
        }
      }),
      getStorySections: (rootElement: Document) => {
        return Array.from(rootElement.querySelectorAll('section'));
      },
      getStoryName: (storySection): string => {
        return storySection.querySelector(':scope > *:first-child')?.textContent as string;
      },
      getStoryCode: (storySection): string => {
        return storySection.querySelector('.snippet')?.innerHTML as string;
      }
    }
  * this is consuming
 *const config = options.storybookConfig;

    storyFiles = config.samples.map(({html: sample, componentName, storyPath}) => {
      const sampleJsDom = new JSDOM(sample);
      const sections = config.getStorySections(sampleJsDom.window.document);

      return sections.map((section) => {
        return {
          componentName,
          storyName: config.getStoryName(section),
          code: config.getStoryCode(section),
          storyPath,
        }
      })
    }).map(stories => {
      return new AngularComponentStoryFile(stories, stories[0].componentName, stories[0].storyPath);
    });
 *
 *
 */
