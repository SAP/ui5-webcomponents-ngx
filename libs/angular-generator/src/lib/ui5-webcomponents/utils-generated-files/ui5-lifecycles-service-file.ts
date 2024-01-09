import { AngularGeneratedFile } from '../../angular-generated-file';
import { format } from 'prettier';

export class Ui5LifecyclesServiceFile extends AngularGeneratedFile {
  constructor() {
    super();
    this.move('utils/ui5-lifecycles.service.ts');
    this.addExport('Ui5LifecyclesService');
    /**
     * import { ElementRef, inject, Injectable, } from '@angular/core';
     * import UI5Element from '@ui5/webcomponents-base/dist/UI5Element';
     * import { BehaviorSubject, filter, first, Subscription } from "rxjs";
     */
    this.addImport(['Injectable', 'ElementRef', 'inject'], '@angular/core');
    this.addImport(['BehaviorSubject', 'filter', 'first', 'Subscription'], 'rxjs');
    this.addImport([{ imported: 'default', local: 'UI5Element' }], '@ui5/webcomponents-base/dist/UI5Element');
  }

  override getCode(): string {
    return format(
      [
        this.getImportsCode(),
        `
          @Injectable()
          class Ui5LifecyclesService {
            private element = inject<ElementRef<UI5Element>>(ElementRef).nativeElement;
            private enter$ = new BehaviorSubject<boolean>(this.element._fullyConnected);
            private subscriptions: Record<string, Subscription> = {};
            constructor() {
              const originalOnEnterDOM = this.element.onEnterDOM?.bind(this.element);
              this.element.onEnterDOM = () => {
                if (originalOnEnterDOM) {
                  originalOnEnterDOM();
                }
                this.enter$.next(true);
              };
            }

            onDomEnter(callback: () => void, uniqueIdentifier?: string): void {
              if (uniqueIdentifier && this.subscriptions[uniqueIdentifier]) {
                this.subscriptions[uniqueIdentifier].unsubscribe();
                delete this.subscriptions[uniqueIdentifier];
              }
              const subscription = this.enter$
                .pipe(
                  filter((value) => value),
                  first()
                )
                .subscribe(() => {
                  callback();
                  if (uniqueIdentifier) {
                    delete this.subscriptions[uniqueIdentifier];
                  }
                });
              if (uniqueIdentifier) {
                this.subscriptions[uniqueIdentifier] = subscription;
              }
            }
          }
        `,
        this.getExportsCode()
      ].join('\n'),
      { parser: 'typescript' }
    );
  }

  exportClassName = 'Ui5LifecyclesService';
}

export const ui5LifecyclesServiceFile = new Ui5LifecyclesServiceFile();
