import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ui5ThemingModule} from '@ui5/theming-ngx';
import {FundamentalStylesComponentsModule} from "@fundamental-styles/theming-ngx";
import {Ui5FundamentalThemingModule} from "@fundamental-styles/theming-ngx/theming";
import {Ui5WebcomponentsThemingModule} from "@ui5/webcomponents-ngx/theming";
import {Ui5WebcomponentsIconsModule} from "@ui5/webcomponents-ngx/icons";
import {Ui5WebcomponentsModule} from '@ui5/webcomponents-ngx';
import {Ui5WebcomponentsConfigModule} from '@ui5/webcomponents-ngx/config';
import {Ui5I18nModule} from "@ui5/webcomponents-ngx/i18n";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ui5ThemingModule.forRoot({defaultTheme: 'sap_fiori_3'}),
    Ui5WebcomponentsIconsModule.forRoot(['sap-icons', 'tnt-icons', "business-suite-icons"]),
    Ui5WebcomponentsConfigModule.forRoot({}),
    Ui5I18nModule.forRoot({
      language: 'ru',
      fetchDefaultLanguage: true,
      bundle: {
        name: 'i18n_root',
        translations: {
          en: fetch('assets/i18n/messages_en').then(r => r.text()),
          ru: fetch('assets/i18n/messages_ru').then(r => r.text())
        }
      }
    }),
    RouterModule.forRoot([
      {
        path: '', component: AppComponent, children: [
          {
            path: '',
            component: MainComponent
          },
          {
            path: 'child-module',
            loadChildren: () => import('./modules/child/child.module').then(m => m.ChildModule)
          }
        ]
      },
    ]),
    Ui5WebcomponentsModule,
    Ui5WebcomponentsThemingModule.forRoot(),
    FundamentalStylesComponentsModule,
    Ui5FundamentalThemingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
