type ApiJsonPath = string | { apiJsonPath: string, srcBasePath: string };

/**
 * Configuration for the ui5-webcomponents api.json parser
 */
export interface ParserConfiguration {
  /**
   * The list of paths to the api.json files
   */
  apiJsonPaths: ApiJsonPath[];
}
