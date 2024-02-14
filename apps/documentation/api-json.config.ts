import {ComponentData, GeneratedFile, TransformerConfig} from "@ui5/webcomponents-transformer";
import { customElementSchemaParser } from '@ui5/webcomponents-schema-parser';
import {stringify} from 'flatted';

export default {
  gatherer: () => customElementSchemaParser({
    sources: [
      '@ui5/webcomponents-base/dist/custom-elements-internal.json',
      '@ui5/webcomponents-fiori/dist/custom-elements-internal.json',
      '@ui5/webcomponents/dist/custom-elements-internal.json'
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
