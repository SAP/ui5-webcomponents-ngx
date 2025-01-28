import {Component, inject} from '@angular/core';
import {I18nService} from "@ui5/webcomponents-ngx/i18n";

@Component({
    template: `
    <ui5-button routerLink="/">{{ 'SOMETHING' | ui5I18n : 'text from the child' }}</ui5-button>
    <ui5-button (click)="changeLanguage()">{{ 'CHANGE_LANGUAGE' | ui5I18n }}</ui5-button>
  `,
    standalone: false
})
export class ChildComponent {
  i18nService = inject(I18nService);

  changeLanguage() {
    this.i18nService.setLanguage(this.i18nService.currentLanguage() === 'en' ? 'ru' : 'en');
  }
}
