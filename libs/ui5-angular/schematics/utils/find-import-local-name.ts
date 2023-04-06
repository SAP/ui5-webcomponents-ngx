import * as ts from "typescript";

/**
 * Finds the local name of an imported symbol. Could be the symbol name itself or its alias.
 * @param sourceFile File within which to search for the import.
 * @param name Actual name of the import, not its local alias.
 * @param moduleName Name of the module from which the symbol is imported.
 */
export function findImportLocalName(
  sourceFile: ts.SourceFile,
  name: string,
  moduleName: string,
): string | null {
  for (const node of sourceFile.statements) {
    // Only look for top-level imports.
    if (
      !ts.isImportDeclaration(node) ||
      !ts.isStringLiteral(node.moduleSpecifier) ||
      node.moduleSpecifier.text !== moduleName
    ) {
      continue;
    }

    // Filter out imports that don't have the right shape.
    if (
      !node.importClause ||
      !node.importClause.namedBindings ||
      !ts.isNamedImports(node.importClause.namedBindings)
    ) {
      continue;
    }

    // Look through the elements of the declaration for the specific import.
    for (const element of node.importClause.namedBindings.elements) {
      if ((element.propertyName || element.name).text === name) {
        // The local name is always in `name`.
        return element.name.text;
      }
    }
  }

  return null;
}
