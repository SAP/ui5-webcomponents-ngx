import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ui5ThemingModule} from '@ui5/theming-ngx';
import {Ui5MainModule} from "@ui5/webcomponents-ngx/main/ui5-main.module";
import {Ui5FioriModule} from "@ui5/webcomponents-ngx/fiori/ui5-fiori.module";
import {FundamentalStylesComponentsModule} from "@fundamental-styles/theming-ngx";
import {Ui5FundamentalThemingModule} from "@fundamental-styles/theming-ngx/theming";
import {Ui5WebcomponentsThemingModule} from "@ui5/webcomponents-ngx/theming";
import {Ui5WebcomponentsIconsModule} from "@ui5/webcomponents-ngx/icons";
import {Ui5WebcomponentsModule} from '@ui5/webcomponents-ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Ui5MainModule,
    Ui5FioriModule,
    FormsModule,
    ReactiveFormsModule,
    Ui5ThemingModule.forRoot({defaultTheme: 'sap_horizon'}),
    Ui5WebcomponentsIconsModule.forRoot(['sap-icons', 'tnt-icons', "business-suite-icons"]),
    Ui5WebcomponentsModule,
    Ui5WebcomponentsThemingModule.forRoot(),
    FundamentalStylesComponentsModule,
    Ui5FundamentalThemingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
