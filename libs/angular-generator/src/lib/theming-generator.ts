import { IndexFile } from "./index_file";
import { Ui5ThemingModels } from "./theming/theming-models";
import { Ui5GlobalThemingModule } from "./theming/theming-module";
import { Ui5GlobalThemingService } from "./theming/theming-service";

export function themingGenerator() {
  const themingModule = new Ui5GlobalThemingModule();
  const themingService = new Ui5GlobalThemingService();
  const themignModels = new Ui5ThemingModels();
  const indexFile = new IndexFile([themingModule, themingService, themignModels]);
  return {
    indexFile,
    themingModule,
    themingService,
    themignModels
  };
}
