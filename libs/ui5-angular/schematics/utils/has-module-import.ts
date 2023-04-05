import {SchematicsException, Tree} from "@angular-devkit/schematics";
import * as ts from "typescript";
import {findNgModuleMetadata} from "./find-ng-module-metadata";

export function hasNgModuleImport(tree: Tree, modulePath: string, className: string): boolean {
  const moduleFileContent = tree.read(modulePath);

  if (!moduleFileContent) {
    throw new SchematicsException(`Could not read Angular module file: ${modulePath}`);
  }

  const parsedFile = ts.createSourceFile(
    modulePath,
    moduleFileContent.toString(),
    ts.ScriptTarget.Latest,
    true,
  );
  const ngModuleMetadata = findNgModuleMetadata(parsedFile);

  if (!ngModuleMetadata) {
    throw new SchematicsException(`Could not find NgModule declaration inside: "${modulePath}"`);
  }

  for (const property of ngModuleMetadata!.properties) {
    if (
      !ts.isPropertyAssignment(property) ||
      property.name.getText() !== 'imports' ||
      !ts.isArrayLiteralExpression(property.initializer)
    ) {
      continue;
    }

    if (property.initializer.elements.some(element => element.getText() === className)) {
      return true;
    }
  }

  return false;
}
