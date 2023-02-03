import { IndexFile } from "./index_file";
import { ThemingConfig } from "./theming/theming-config.interface";
import { Ui5ThemingModels } from "./theming/theming-models";
import { Ui5GlobalThemingModule } from "./theming/theming-module";
import { Ui5GlobalThemingService } from "./theming/theming-service";

export function themingGenerator() {
  const config: ThemingConfig = {
    themingModelsFileName: 'ui5-theming.models',
    themingModuleFileName: 'ui5-theming.module',
    themingServiceFileName: 'ui5-theming.service'
  }
  const themingModels = new Ui5ThemingModels(config);
  const themingService = new Ui5GlobalThemingService(config, themingModels);
  const themingModule = new Ui5GlobalThemingModule(config, themingService, themingModels);
  const indexFile = new IndexFile([themingModule, themingService, themingModels]);
  return {
    indexFile,
    themingModule,
    themingService,
    themingModels
  };
}
