import {ComponentData, GeneratedFile, TransformerConfig} from "@ui5/webcomponents-transformer";
import { apiJsonParser } from '@ui5/webcomponents-schema-parser';
import {stringify} from 'flatted';

export default {
  gatherer: () => apiJsonParser({
    sources: [
      '@ui5/webcomponents-base/dist/api.json',
      '@ui5/webcomponents-fiori/dist/api.json',
      '@ui5/webcomponents/dist/api.json',
    ]
  }),
  transformers: [
    (c: ComponentData[]) => ([{
      path: 'api-json.json',
      getCode: () => stringify(c)
    } as GeneratedFile
    ])
  ]
} as Partial<TransformerConfig<ComponentData>>;
