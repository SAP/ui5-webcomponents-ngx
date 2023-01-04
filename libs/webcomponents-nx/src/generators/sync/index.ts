import {formatFiles, readProjectConfiguration, Tree} from "@nrwl/devkit";
import {fsCommit, NxFsImplementation} from "@ui5/webcomponents-wrapper-fs-commit";
import {wrapper, WrapperConfig} from "@ui5/webcomponents-wrapper";

export default async function generateComponents(
  tree: Tree,
  options: WrapperConfig & { project: string }
) {
  const fsAdapter = new NxFsImplementation(tree);
  const projectConfiguration = readProjectConfiguration(tree, options.project);
  const basePath = projectConfiguration.sourceRoot;
  await wrapper({
    commit: fsCommit(fsAdapter, basePath),
    ...options
  });
  await formatFiles(tree);
  return () => {
  };
}
