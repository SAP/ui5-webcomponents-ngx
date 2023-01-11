import {ExecutorContext} from "nx/src/config/misc-interfaces";
import {detectPackageManager, getPackageManagerCommand, readTargetOptions} from "@nrwl/devkit";
import {execSync} from "child_process";

export default async function (schema: any, executorContext: ExecutorContext): Promise<{ success: boolean }> {
  const options = readTargetOptions({project: executorContext.projectName, target: "build"}, executorContext);
  const [outputPath] = executorContext.workspace.projects[executorContext.projectName].targets.build.outputs;
  const packageManager = detectPackageManager('./');
  execSync(getPackageManagerCommand(packageManager).run('pack', ''), { cwd: outputPath, stdio: 'inherit' });
  return {success: true};
}
