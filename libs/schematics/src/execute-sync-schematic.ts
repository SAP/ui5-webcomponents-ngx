import { execSync } from "child_process";

export async function executeSyncSchematic(
  confFilePaths: string[],
  basePath: string
) {
  const execScript = `g @ui5/webcomponents-ngx-schematics:sync ${confFilePaths.join(',')} --basePath=${basePath}`;
  try {
    await import('nx');
    // Needs nx to be used
    execSync(`npx nx ${execScript}`, {
      stdio: 'inherit'
    })
  } catch (e) {
    // Needs ng to be used
    execSync(`ng ${execScript}`, {
      stdio: 'inherit'
    });
  }
}
