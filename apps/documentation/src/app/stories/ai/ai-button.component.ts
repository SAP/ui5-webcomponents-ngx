import { Component } from '@angular/core';
import { ButtonComponent } from '@ui5/webcomponents-ngx/ai/button';
import { ButtonStateComponent } from '@ui5/webcomponents-ngx/ai/button-state';
import { MenuComponent } from '@ui5/webcomponents-ngx/main/menu';
import { MenuItemComponent } from '@ui5/webcomponents-ngx/main/menu-item';

@Component({
  selector: 'app-ai-button',
  imports: [
    ButtonComponent, 
    ButtonStateComponent,
    MenuComponent,
    MenuItemComponent],
  template: `
    <ui5-ai-button 
      id="myAiButton"
      [state]="buttonState" 
      (click)="aiButtonClickHandler($event)">
      <ui5-ai-button-state name="generate" text="Generate" icon="ai"></ui5-ai-button-state>
      <ui5-ai-button-state name="generating" text="Stop Generating" icon="stop"></ui5-ai-button-state>
      <ui5-ai-button-state name="revise" text="Revise" icon="ai" end-icon="navigation-down-arrow"></ui5-ai-button-state>
    </ui5-ai-button>

    <ui5-menu 
      [opener]="'myAiButton'" 
      [(open)]="menuOpen" 
      #menuBasic="ui5Menu"
      (item-click)="handleMenuItemClick($event)">
      <ui5-menu-item text="Regenerate"></ui5-menu-item>
      <ui5-menu-separator></ui5-menu-separator>
      <ui5-menu-item text="Fix Spelling & Grammar"></ui5-menu-item>
      <ui5-menu-item text="Change Tone">
        <ui5-menu-item text="Option 1"></ui5-menu-item>
        <ui5-menu-item text="Option 2"></ui5-menu-item>
        <ui5-menu-item text="Option 3"></ui5-menu-item>
      </ui5-menu-item>
      <ui5-menu-item text="Adjust Length">
        <ui5-menu-item text="Shorten text"></ui5-menu-item>
        <ui5-menu-item text="Lengthen text"></ui5-menu-item>
      </ui5-menu-item>
      <ui5-menu-item text="Bulleted List"></ui5-menu-item>
      <ui5-menu-item text="Translate">
        <ui5-menu-item text="English"></ui5-menu-item>
        <ui5-menu-item text="German"></ui5-menu-item>
        <ui5-menu-item text="Spanish"></ui5-menu-item>
      </ui5-menu-item>
    </ui5-menu>
  `,
})
export class AiButtonComponent {
  buttonState: 'generate' | 'generating' | 'revise' = 'generate';
  menuOpen: boolean = false;
  private generationId: any;

  aiButtonClickHandler() {
    switch (this.buttonState) {
      case 'generate':
        this.buttonState = 'generating';
        this.startGeneration();
        break;
      case 'generating':
        this.buttonState = 'generate';
        this.stopGeneration();
        break;
      case 'revise':
        this.menuOpen = true;
        break;
    }
  }

  startGeneration() {
    this.generationId = setTimeout(() => {
      this.buttonState = 'revise';
    }, 3000);
  }

  stopGeneration() {
    clearTimeout(this.generationId);
  }

  handleMenuItemClick(evt: any) {
    if (evt.detail.text === 'Regenerate') {
      this.buttonState = 'generating';
      this.startGeneration();
    }
  }
}
