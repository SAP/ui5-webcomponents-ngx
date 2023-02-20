import {InjectionToken} from "@angular/core";

export const Ui5AngularSelectedIconsToLoad = new InjectionToken<() => Promise<any>>('Icons, that should be loaded by the Ui5AngularIconsModule.');
