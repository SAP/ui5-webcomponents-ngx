import { BuildPartialExecutorSchema } from './schema';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { assetGlobsToFiles } from "./assets";
import { basename, dirname, join } from "path";
import ngPackageFileFn from "./files/ng-package-file";
import tsconfigFile from "./files/tsconfig-file";
import { ExecutorContext, workspaceRoot } from "@nx/devkit";
import { camelCase } from "lodash";
import { format } from 'prettier';

const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));
const lernaJson = JSON.parse(readFileSync('lerna.json', 'utf-8'));

const version = lernaJson.version;

const replacementVersions = {
  VERSION_PLACEHOLDER: version,
  COMMON_CSS_VERSION_PLACEHOLDER: packageJson.dependencies['@sap-ui/common-css'],
  FUNDAMENTAL_STYLES_VERSION_PLACEHOLDER: packageJson.dependencies['fundamental-styles'],
  THEMING_BASE_CONTENT_VERSION_PLACEHOLDER: packageJson.dependencies['@sap-theming/theming-base-content'],
}

export default async function runExecutor(options: BuildPartialExecutorSchema, context: ExecutorContext) {
  const files = assetGlobsToFiles([...options.includedFiles, ...options.configurations], options.excludedFiles, options.distPath);
  const sourcesDir = join(options.distPath, options.sourcesPath);
  const projectPkgJson = JSON.parse(readFileSync(join(context.projectGraph.nodes[context.projectName].data.root, 'package.json'), 'utf-8')) as {
    dependencies?: Record<string, string>,
    devDependencies?: Record<string, string>,
    peerDependencies?: Record<string, string>,
  };
  rmSync(options.distPath, { recursive: true, force: true });

  mkdirSync(sourcesDir, { recursive: true });
  const libraryDependencies = Object.keys({
    ...(projectPkgJson.dependencies || {}),
    ...(projectPkgJson.devDependencies || {}),
    ...(projectPkgJson.peerDependencies || {})
  });
  files.forEach(file => {
    const newDest = file.output;
    const newDestDir = dirname(newDest);
    if (!existsSync(newDestDir)) {
      mkdirSync(newDestDir, { recursive: true });
    }
    const fileContent = readFileSync(file.input, 'utf-8');
    const newFileContent = Object.keys(replacementVersions)
      .sort((a, b) => b.length - a.length)
      .reduce((acc, key) => {
        return acc.replace(new RegExp(key, 'g'), replacementVersions[key]);
      }, fileContent);
    writeFileSync(newDest, newFileContent);
  });
  writeFileSync(join(sourcesDir, 'tsconfig.json'), JSON.stringify(tsconfigFile, null, 2));
  writeFileSync(join(sourcesDir, 'ng-package.json'), JSON.stringify(ngPackageFileFn({
    entryFile: './index.ts',
    allowedNonPeerDependencies: Object.keys({
      ...(projectPkgJson.dependencies || {}),
      ...(projectPkgJson.devDependencies || {})
    })
  }), null, 2));
  const configPathsRelativeToPostInstall = options.configurations.map(configPath => {
    const absoluteFilePath = join(workspaceRoot, configPath);
    const outputFilePath = files.find(file => absoluteFilePath === file.input)?.output;
    if (!outputFilePath) {
      throw new Error(`Could not find output file for ${configPath}`);
    }
    const requirePath = outputFilePath.replace(options.distPath, '.').replace(/\.js$/, '');
    const localIdentifier = camelCase(basename(configPath).replace(/\.js$/, ''));
    return {
      decl: `const ${localIdentifier} = require('${requirePath}');`,
      identifier: localIdentifier
    };
  });
  const sourceFiles = [
    ...readdirSync(options.distPath),
    "sync.js",
    "schematics",
    "dist",
    "_prev-versions.js"
  ];

  const postInstallContent = await format(`
    const {fsTransformer} = require('@ui5/webcomponents-transformer');
    const {join} = require("path");
    const {ngPackagr} = require('ng-packagr');
    const {renameSync, rmSync, cpSync, readdirSync, writeFileSync} = require('fs');
    const { readModulePackageJson } = require('@ui5/webcomponents-ngx-schematics');

    ${configPathsRelativeToPostInstall.map(({ decl }) => decl).join('\n')}

    const getVersion = (dep) => {
      try {
        return readModulePackageJson(dep).packageJson.version;
      } catch (e) {
        return;
      }
    }
    let prevVersions = {};
    try {
      prevVersions = require('./_prev-versions.js');
    } catch (e) {
      // Silencing error
    }
    const currentVersions = {
      ${libraryDependencies.map(dep => `${JSON.stringify(dep)}: getVersion(${JSON.stringify(dep)})`).join(',\n')}
    };
    writeFileSync(join(__dirname, '_prev-versions.js'), 'module.exports = ' + JSON.stringify(currentVersions, null, 2));

    const requiredFiles = new Set(${JSON.stringify(sourceFiles)});
    const tmpDir = 'tmp/.${context.projectName}';
    const sourcesDir = join(__dirname, '${options.sourcesPath}');

    const needsRebuild = Object.keys(currentVersions).some(dep => {
      return prevVersions[dep] !== currentVersions[dep];
    });

    if (needsRebuild) {
      fsTransformer({
        basePath: sourcesDir, conf: [
          ${configPathsRelativeToPostInstall.map(({ identifier }) => `${identifier}`).join(',\n')}
        ]
      }).then(() => {
        cpSync(sourcesDir, tmpDir, {recursive: true, force: true});
        return ngPackagr()
          .forProject(join(tmpDir, 'ng-package.json'))
          .withTsConfig(join(tmpDir, 'tsconfig.json'))
          .build()
          .then(() => {
            rmSync(join(__dirname, 'dist'), {recursive: true, force: true});
            renameSync(join(tmpDir, 'dist'), join(__dirname, 'dist'));
            readdirSync(__dirname).forEach(path => {
              if (!requiredFiles.has(path)) {
                rmSync(join(__dirname, path), {recursive: true, force: true});
              }
            });
            readdirSync(join(__dirname, 'dist')).forEach(path => {
              renameSync(join(__dirname, 'dist', path), join(__dirname, path));
            });
          })
          .finally(() => rmSync(tmpDir, {recursive: true}));
      }).catch(error => {
        console.error('Error executing schematics', error);
      });
    }
  `, { parser: 'typescript' });
  writeFileSync(join(options.distPath, 'sync.js'), postInstallContent);
  return {
    success: true,
  };
}
