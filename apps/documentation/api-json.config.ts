import {WrapperConfig} from "@ui5/webcomponents-wrapper";
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
  generator: (c: Record<string, any>) => ({
    'api.json': {
      path: 'api-json.json',
      getCode: () => stringify(c)
    }
  })
} as Partial<WrapperConfig<string>>;
