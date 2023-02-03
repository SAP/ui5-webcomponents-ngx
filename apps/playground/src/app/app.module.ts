import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ui5AngularModule } from '@ui5/webcomponents-ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Ui5AngularModule,
    FormsModule,
    ReactiveFormsModule,
    Ui5ThemingModule.forRoot({defaultTheme: 'sap_horizon'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
