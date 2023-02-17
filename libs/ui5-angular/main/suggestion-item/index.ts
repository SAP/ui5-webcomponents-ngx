import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/SuggestionItem.js';

interface SuggestionItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'additionalText'
    | 'additionalTextState'
    | 'description'
    | 'icon'
    | 'iconEnd'
    | 'image'
    | 'text'
    | 'type'
  > {
  effectiveDir: any;
  isUi5Element: any;
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  description: string;
  icon: string;
  iconEnd: boolean;
  image: string;
  text: string;
  type: 'Active' | 'Detail' | 'Inactive' | 'Navigation';

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
  selector: 'ui5-suggestion-item',
  exportAs: 'ui5SuggestionItem',
  standalone: true,
  providers: [],
})
class SuggestionItemDirective {
  @Input()
  set effectiveDir(val: SuggestionItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): SuggestionItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: SuggestionItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): SuggestionItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set additionalText(val: SuggestionItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): SuggestionItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set additionalTextState(
    val: SuggestionItemDirectiveElement['additionalTextState']
  ) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState(): SuggestionItemDirectiveElement['additionalTextState'] {
    return this.elementRef.nativeElement.additionalTextState;
  }

  @Input()
  set description(val: SuggestionItemDirectiveElement['description']) {
    this.elementRef.nativeElement.description = val;
  }
  get description(): SuggestionItemDirectiveElement['description'] {
    return this.elementRef.nativeElement.description;
  }

  @Input()
  set icon(val: SuggestionItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): SuggestionItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set iconEnd(val: SuggestionItemDirectiveElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd(): SuggestionItemDirectiveElement['iconEnd'] {
    return this.elementRef.nativeElement.iconEnd;
  }

  @Input()
  set image(val: SuggestionItemDirectiveElement['image']) {
    this.elementRef.nativeElement.image = val;
  }
  get image(): SuggestionItemDirectiveElement['image'] {
    return this.elementRef.nativeElement.image;
  }

  @Input()
  set text(val: SuggestionItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): SuggestionItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  @Input()
  set type(val: SuggestionItemDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): SuggestionItemDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  constructor(private elementRef: ElementRef<SuggestionItemDirectiveElement>) {}

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

export { SuggestionItemDirective, SuggestionItemDirectiveElement };
