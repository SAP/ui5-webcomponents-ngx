import * as ts from "typescript";
import {resolveIdentifierOfExpression} from "./resolve-identifier-of-expression";

/** Whether the specified call expression is referring to a NgModule definition. */
export function isNgModuleCallExpression(callExpression: ts.CallExpression): boolean {
  if (
    !callExpression.arguments.length ||
    !ts.isObjectLiteralExpression(callExpression.arguments[0])
  ) {
    return false;
  }

  // The `NgModule` call expression name is never referring to a `PrivateIdentifier`.
  const decoratorIdentifier = resolveIdentifierOfExpression(callExpression.expression);
  return decoratorIdentifier ? decoratorIdentifier.text === 'NgModule' : false;
}
