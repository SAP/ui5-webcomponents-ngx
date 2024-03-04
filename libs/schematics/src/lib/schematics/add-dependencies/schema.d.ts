import { NodeDependency } from "../../third_party/utility/dependencies";

export interface AddDependenciesSchematicOptions {
  project: string;
  dependencies: NodeDependency[];
}
