import {WrapperConfig} from "./types/wrapper-config";

export async function wrapper(config: WrapperConfig<unknown>): Promise<void> {
  const {getComponents, generator} = config;
  const components = await getComponents();
  const transformed = await generator(components);
  await config.commit(Object.values(transformed));
  return;
}
