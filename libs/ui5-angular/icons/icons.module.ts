import {isDevMode, ModuleWithProviders, NgModule} from "@angular/core";
import {IconsProvider} from "./icons.provider";
import {Ui5AngularSelectedIconsToLoad} from "./icons.tokens";

type IconPackageName = 'sap-icons' | 'tnt-icons' | 'business-suite-icons';

const iconPackageNameToFileMap: Record<IconPackageName, () => Promise<any>> = {
  'sap-icons': () => import('@ui5/webcomponents-icons/dist/AllIcons.js').then(() => 'sap-icons'),
  'tnt-icons': () => import('@ui5/webcomponents-icons-tnt/dist/AllIcons.js').then(() => 'tnt-icons'),
  'business-suite-icons': () => import('@ui5/webcomponents-icons-business-suite/dist/AllIcons.js').then(() => 'business-suite-icons')
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class Ui5WebcomponentsIconsModule {
  constructor(private iconsProvider: IconsProvider) {
    if (isDevMode()) {
      console.log('Ui5WebcomponentsIconsModule loaded', iconsProvider);
    }
  }

  static forRoot(iconsToLoad: IconPackageName[]): ModuleWithProviders<Ui5WebcomponentsIconsModule> {
    return {
      ngModule: Ui5WebcomponentsIconsModule,
      providers: [
        ...iconsToLoad.map(icon => ({
          provide: Ui5AngularSelectedIconsToLoad,
          useValue: iconPackageNameToFileMap[icon],
          multi: true
        })),
        IconsProvider
      ],
    }
  }
}
