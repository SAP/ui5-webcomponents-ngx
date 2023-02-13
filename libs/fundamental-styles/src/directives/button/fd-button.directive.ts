import { Directive, OnDestroy } from '@angular/core';

let counter = 0;
let styleSheet: CSSStyleSheet;

@Directive({
  selector: '.fd-button',
  standalone: true,
})
export class FdButtonDirective implements OnDestroy {
  /** @hidden */
  constructor() {
    counter++;

    // Stylesheet was already loaded by another directive. Skip it.
    if (counter > 1) {
      return;
    }
    styleSheet = new CSSStyleSheet();
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];

    import('fundamental-styles/dist/js/button').then((styles) => {
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
