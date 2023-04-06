import ts from "typescript";
import {isNgModuleCallExpression} from "./is-ng-module-expression";

/**
 * Finds a NgModule declaration within the specified TypeScript node and returns the
 * corresponding metadata for it. This function searches breadth first because
 * NgModule's are usually not nested within other expressions or declarations.
 */
export function findNgModuleMetadata(rootNode: ts.Node): ts.ObjectLiteralExpression | null {
  // Add immediate child nodes of the root node to the queue.
  const nodeQueue: ts.Node[] = [...rootNode.getChildren()];

  while (nodeQueue.length) {
    const node = nodeQueue.shift()!;

    if (
      ts.isDecorator(node) &&
      ts.isCallExpression(node.expression) &&
      isNgModuleCallExpression(node.expression)
    ) {
      return node.expression.arguments[0] as ts.ObjectLiteralExpression;
    } else {
      nodeQueue.push(...node.getChildren());
    }
  }

  return null;
}
