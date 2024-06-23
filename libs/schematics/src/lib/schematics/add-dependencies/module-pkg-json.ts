import { dirname, join } from "path";
import { existsSync, readFileSync } from "fs";

interface PackageJson {
  name: string;
  version: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

function readJsonFile(path: string): object {
  return JSON.parse(readFileSync(path, 'utf8'));
}

/**
 * Uses `require.resolve` to read the package.json for a module.
 *
 * This will fail if the module doesn't export package.json
 *
 * @returns package json contents and path
 */
export function readModulePackageJsonWithoutFallbacks(
  moduleSpecifier: string
): {
  packageJson: PackageJson;
  path: string;
} {
  const packageJsonPath: string = require.resolve(
    `${moduleSpecifier}/package.json`
  );
  const packageJson = readJsonFile(packageJsonPath) as PackageJson;

  return {
    path: packageJsonPath,
    packageJson,
  };
}

/**
 * Reads the package.json file for a specified module.
 *
 * Includes a fallback that accounts for modules that don't export package.json
 *
 * @param {string} moduleSpecifier The module to look up
 *
 * @example
 * // Use the caller's lookup paths for non-hoisted dependencies
 * readModulePackageJson('http-server', module.paths);
 *
 * @returns package json contents and path
 */
export function readModulePackageJson(
  moduleSpecifier: string,
): {
  packageJson: PackageJson;
  path: string;
} {
  let packageJsonPath: string;
  let packageJson: PackageJson;

  try {
    ({ path: packageJsonPath, packageJson } =
      readModulePackageJsonWithoutFallbacks(moduleSpecifier));
  } catch {
    const entryPoint = require.resolve(moduleSpecifier);

    let moduleRootPath = dirname(entryPoint);
    packageJsonPath = join(moduleRootPath, 'package.json');

    while (!existsSync(packageJsonPath)) {
      moduleRootPath = dirname(moduleRootPath);
      packageJsonPath = join(moduleRootPath, 'package.json');
    }

    packageJson = readJsonFile(packageJsonPath) as PackageJson;
    if (packageJson.name && packageJson.name !== moduleSpecifier) {
      throw new Error(
        `Found module ${packageJson.name} while trying to locate ${moduleSpecifier}/package.json`
      );
    }
  }

  return {
    packageJson,
    path: packageJsonPath,
  };
}
