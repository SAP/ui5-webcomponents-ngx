import { Directive, OnDestroy } from '@angular/core';

let counter = 0;
let styleSheet: CSSStyleSheet;

@Directive({
  selector: '.fd-object-status',
  standalone: true,
})
export class FdObjectStatusDirective implements OnDestroy {
  /** @hidden */
  constructor() {
    counter++;

    // Stylesheet was already loaded by another directive. Skip it.
    if (counter > 1) {
      return;
    }
    styleSheet = new CSSStyleSheet();
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];

    import('fundamental-styles/dist/js/object-status').then((styles) => {
      styleSheet.replaceSync(styles.default.cssSource);
    });
  }

  /** @hidden */
  ngOnDestroy(): void {
    counter--;
    if (counter === 0) {
      styleSheet.replace('');
    }
  }
}