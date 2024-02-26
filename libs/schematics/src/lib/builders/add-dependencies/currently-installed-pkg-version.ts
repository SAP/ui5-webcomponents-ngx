import { execSync } from "child_process";

export const currentlyInstalledPackageVersion = (packageName: string): string | undefined => {
  try {
    const localVersion = execSync(`npm ls ${packageName} --depth 0`).toString();
    const regex = new RegExp(`${packageName}@(.*)`, 'g');
    const [, version] = regex.exec(localVersion) || [];
    if (version) {
      return version;
    }
  } catch (e) {
    console.error(`Error while trying to get the version of ${packageName}`);
    return undefined;
  }
}
