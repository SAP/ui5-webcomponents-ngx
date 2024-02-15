import * as ts from "typescript";
import {getDecoratorMetadata, getMetadataField} from "@schematics/angular/utility/ast-utils";

/**
 * Returns the RouterModule declaration from NgModule metadata, if any.
 */
export function getModuleDeclaration(source: ts.SourceFile, module: string): ts.Expression | undefined {
  const result = getDecoratorMetadata(source, 'NgModule', '@angular/core');
  const node = result[0];
  if (!node || !ts.isObjectLiteralExpression(node)) {
    return undefined;
  }
  const matchingProperties = getMetadataField(node, 'imports');
  if (!matchingProperties) {
    return;
  }
  const assignment = matchingProperties[0] as any;
  if (assignment.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression) {
    return;
  }
  const arrLiteral = assignment.initializer;
  return arrLiteral.elements
    .filter((el: any) => el.kind === ts.SyntaxKind.CallExpression)
    .find((el: any) => el.getText().startsWith(module));
}
