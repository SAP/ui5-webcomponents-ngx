import { Inject, ModuleWithProviders, NgModule } from "@angular/core";
import { I18nPipe } from "./i18n.pipe";
import { I18nConfig } from "./i18n.types";
import { I18N_ROOT_CONFIG } from "./i18n.tokens";
import { i18nChildProviders, i18nRootProviders } from "./i18n.providers";


@NgModule({
  imports: [I18nPipe],
  exports: [I18nPipe]
})
export class Ui5I18nModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@Inject(I18N_ROOT_CONFIG) private config: I18nConfig) {
  }

  static forRoot(config: I18nConfig = {}): ModuleWithProviders<Ui5I18nModule> {

    return {
      ngModule: Ui5I18nModule,
      providers: [
        i18nRootProviders(config)
      ]
    }
  }

  static forChild(config: I18nConfig['bundle'] = {}): ModuleWithProviders<Ui5I18nModule> {
    return {
      ngModule: Ui5I18nModule,
      providers: [
        i18nChildProviders(config)
      ]
    }
  }
}
