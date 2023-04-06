import * as ts from "typescript";

/** Finds the `providers` array literal within a `bootstrapApplication` call. */
export function findProvidersLiteral(bootstrapCall: ts.CallExpression): ts.ArrayLiteralExpression | null {
  // The imports have to be in the second argument of
  // the function which has to be an object literal.
  if (
    bootstrapCall.arguments.length > 1 &&
    ts.isObjectLiteralExpression(bootstrapCall.arguments[1])
  ) {
    for (const prop of bootstrapCall.arguments[1].properties) {
      if (
        ts.isPropertyAssignment(prop) &&
        ts.isIdentifier(prop.name) &&
        prop.name.text === 'providers' &&
        ts.isArrayLiteralExpression(prop.initializer)
      ) {
        return prop.initializer;
      }
    }
  }

  return null;
}
