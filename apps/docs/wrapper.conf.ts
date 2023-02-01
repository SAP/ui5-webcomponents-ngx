import {WrapperConfig} from "@ui5/webcomponents-wrapper";
import apiJsonParser from "@ui5/webcomponents-api-json-parser";
import {generator} from "@ui5/webcomponents-ngx-stories-generator";

export default {
  getComponents: () => apiJsonParser({
    apiJsonPaths: [
      '@ui5/webcomponents-base/dist/api.json',
      '@ui5/webcomponents-fiori/dist/api.json',
      '@ui5/webcomponents/dist/api.json'
    ]
  }),
  generator: (components) => generator(components)
} as Partial<WrapperConfig>;
