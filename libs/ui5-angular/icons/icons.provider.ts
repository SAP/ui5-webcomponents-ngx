import {Inject, Injectable, isDevMode} from "@angular/core";
import {Ui5AngularSelectedIconsToLoad} from "./icons.tokens";

@Injectable()
export class IconsProvider {
  constructor(@Inject(Ui5AngularSelectedIconsToLoad) private iconsToLoad: Array<() => Promise<any>>) {
    Promise.all(this.iconsToLoad.map(l => l())).then((r) => {
      if (isDevMode()) {
        console.log('Icons loaded', r);
      }
    });
  }
}
