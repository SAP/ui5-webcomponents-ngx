import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {setTheme} from "@ui5/webcomponents-base/dist/config/Theme.js";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule).then(() => {
  setTheme('sap_horizon')
})
  .catch((err) => console.error(err));
