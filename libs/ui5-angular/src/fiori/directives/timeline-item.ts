import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
import { Observable, NEVER } from 'rxjs';

interface TimelineItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'nameClick'> {
  nameClick: CustomEvent<void>;
}

interface TimelineItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'icon'
    | 'name'
    | 'nameClickable'
    | 'subtitleText'
    | 'titleText'
    | 'nameClick'
  > {
  icon: string;
  name: string;
  nameClickable: boolean;
  subtitleText: string;
  titleText: string;

  addEventListener<K extends keyof TimelineItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimelineItemDirectiveElement,
      ev: TimelineItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TimelineItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimelineItemDirectiveElement,
      ev: TimelineItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

@Directive({
  selector: 'ui5-timeline-item',
  exportAs: 'ui5TimelineItem',
})
class TimelineItemDirective {
  @Input()
  set icon(val: TimelineItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): TimelineItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set name(val: TimelineItemDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): TimelineItemDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set nameClickable(val: TimelineItemDirectiveElement['nameClickable']) {
    this.elementRef.nativeElement.nameClickable = val;
  }
  get nameClickable(): TimelineItemDirectiveElement['nameClickable'] {
    return this.elementRef.nativeElement.nameClickable;
  }

  @Input()
  set subtitleText(val: TimelineItemDirectiveElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText(): TimelineItemDirectiveElement['subtitleText'] {
    return this.elementRef.nativeElement.subtitleText;
  }

  @Input()
  set titleText(val: TimelineItemDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): TimelineItemDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }
  @Output() nameClick: Observable<TimelineItemDirectiveEventsMap['nameClick']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TimelineItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  TimelineItemDirective,
  TimelineItemDirectiveEventsMap,
  TimelineItemDirectiveElement,
};
