import { fsTransformer } from "@ui5/webcomponents-transformer";
import apiJsonConfig from "./api-json.config";
import { join } from "path";

fsTransformer({
  basePath: join('apps', 'documentation', 'src'),
  conf: [
    apiJsonConfig
  ],

});
