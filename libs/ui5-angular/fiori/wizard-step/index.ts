import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/WizardStep.js';

interface WizardStepDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'branching'
    | 'disabled'
    | 'icon'
    | 'selected'
    | 'subtitleText'
    | 'titleText'
  > {
  effectiveDir: any;
  isUi5Element: any;
  branching: boolean;
  disabled: boolean;
  icon: string;
  selected: boolean;
  subtitleText: string;
  titleText: string;

  _render(): any;

  attachInvalidate(callback: any): any;

  define(): any;

  detachInvalidate(callback: any): any;

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean;

  focus(): any;

  getDomRef(): any;

  getFocusDomRef(): any;

  getFocusDomRefAsync(): any;

  getMetadata(): any;

  getSlottedNodes(): any;

  getStaticAreaItemDomRef(): any;

  getUniqueDependencies(): any;

  onAfterRendering(): any;

  onBeforeRendering(): any;

  onDefine(): any;

  onEnterDOM(): any;

  onExitDOM(): any;

  onInvalidation(changeInfo: any): any;
}

@Directive({
  selector: 'ui5-wizard-step',
  exportAs: 'ui5WizardStep',
  standalone: true,
  providers: [],
})
class WizardStepDirective {
  @Input()
  set effectiveDir(val: WizardStepDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): WizardStepDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: WizardStepDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): WizardStepDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

  _render(): any {
    return this.elementRef.nativeElement._render();
  }

  attachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.attachInvalidate(callback);
  }

  define(): any {
    return this.elementRef.nativeElement.define();
  }

  detachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.detachInvalidate(callback);
  }

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean {
    return this.elementRef.nativeElement.fireEvent(
      name,
      data,
      cancelable,
      bubbles
    );
  }

  focus(): any {
    return this.elementRef.nativeElement.focus();
  }

  getDomRef(): any {
    return this.elementRef.nativeElement.getDomRef();
  }

  getFocusDomRef(): any {
    return this.elementRef.nativeElement.getFocusDomRef();
  }

  getFocusDomRefAsync(): any {
    return this.elementRef.nativeElement.getFocusDomRefAsync();
  }

  getMetadata(): any {
    return this.elementRef.nativeElement.getMetadata();
  }

  getSlottedNodes(): any {
    return this.elementRef.nativeElement.getSlottedNodes();
  }

  getStaticAreaItemDomRef(): any {
    return this.elementRef.nativeElement.getStaticAreaItemDomRef();
  }

  getUniqueDependencies(): any {
    return this.elementRef.nativeElement.getUniqueDependencies();
  }

  onAfterRendering(): any {
    return this.elementRef.nativeElement.onAfterRendering();
  }

  onBeforeRendering(): any {
    return this.elementRef.nativeElement.onBeforeRendering();
  }

  onDefine(): any {
    return this.elementRef.nativeElement.onDefine();
  }

  onEnterDOM(): any {
    return this.elementRef.nativeElement.onEnterDOM();
  }

  onExitDOM(): any {
    return this.elementRef.nativeElement.onExitDOM();
  }

  onInvalidation(changeInfo: any): any {
    return this.elementRef.nativeElement.onInvalidation(changeInfo);
  }
}

export { WizardStepDirective, WizardStepDirectiveElement };
