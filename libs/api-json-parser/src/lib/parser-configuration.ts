type ApiJsonPath = string | { apiJsonPath: string, srcBasePath: string };

export interface ParserConfiguration {
  apiJsonPaths: ApiJsonPath[];
}
