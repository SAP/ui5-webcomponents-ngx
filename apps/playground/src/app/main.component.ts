import {Component} from "@angular/core";

@Component({
  template: `<ui5-button routerLink="/child-module">{{ 'SOMETHING' | ui5I18n : 'text from the root' }}</ui5-button>`
})
export class MainComponent {}
