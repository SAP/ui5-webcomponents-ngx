import { TransformerConfig } from "./types";
import { GeneratedFile } from "./generated-file";

export async function transformer<T>(config: TransformerConfig<T>): Promise<void> {
  const { gatherer, transformers } = config;
  const gatheredItems = await gatherer();
  let generatedFiles: GeneratedFile[] = [];
  for (const transformer of transformers) {
    generatedFiles = await transformer(gatheredItems, generatedFiles);
  }
  await config.persist(generatedFiles);
  return;
}
