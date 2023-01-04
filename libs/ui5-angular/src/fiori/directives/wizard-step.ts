import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/WizardStep.js';

interface WizardStepDirectiveElement
  extends Omit<
    HTMLElement,
    | 'branching'
    | 'disabled'
    | 'icon'
    | 'selected'
    | 'subtitleText'
    | 'titleText'
  > {
  branching: boolean;
  disabled: boolean;
  icon: string;
  selected: boolean;
  subtitleText: string;
  titleText: string;
}

@Directive({
  selector: 'ui5-wizard-step',
  exportAs: 'ui5WizardStep',
})
class WizardStepDirective {
  @Input()
  set branching(val: WizardStepDirectiveElement['branching']) {
    this.elementRef.nativeElement.branching = val;
  }
  get branching(): WizardStepDirectiveElement['branching'] {
    return this.elementRef.nativeElement.branching;
  }

  @Input()
  set disabled(val: WizardStepDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): WizardStepDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: WizardStepDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): WizardStepDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set selected(val: WizardStepDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): WizardStepDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set subtitleText(val: WizardStepDirectiveElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText(): WizardStepDirectiveElement['subtitleText'] {
    return this.elementRef.nativeElement.subtitleText;
  }

  @Input()
  set titleText(val: WizardStepDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): WizardStepDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }

  constructor(private elementRef: ElementRef<WizardStepDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { WizardStepDirective, WizardStepDirectiveElement };
