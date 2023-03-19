import {ComponentData, GeneratedFile, WrapperConfig} from "@ui5/webcomponents-wrapper";
import apiJsonParser from '@ui5/webcomponents-api-json-parser';
import {stringify} from 'flatted';

export default {
  getComponents: () => apiJsonParser({
    apiJsonPaths: [
      '@ui5/webcomponents-base/dist/api.json',
      '@ui5/webcomponents-fiori/dist/api.json',
      '@ui5/webcomponents/dist/api.json',
    ]
  }),
  generator: (c: ComponentData[]) => ({
    'api.json': {
      path: 'api-json.json',
      getCode: () => stringify(c)
    } as GeneratedFile
  })
} as Partial<WrapperConfig<ComponentData>>;
