import { AngularGeneratedFile } from '../../angular-generated-file';
import { format } from 'prettier';

export class Ui5LifecyclesServiceFile extends AngularGeneratedFile {
  constructor() {
    super();
    this.move('utils/ui5-lifecycles.service.ts');
    this.addExport('Ui5LifecyclesService');
    this.addImport(['Injectable', 'signal', 'effect', 'ElementRef', 'inject', 'Injector', 'EffectRef'], '@angular/core');
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
            private injector = inject<Injector>(Injector);
            private enterSignal = signal(this.element._fullyConnected);
            private effects: Record<string, EffectRef> = {};
            constructor() {
              const originalOnEnterDOM = this.element.onEnterDOM?.bind(this.element);
              this.element.onEnterDOM = () => {
                if (originalOnEnterDOM) {
                  originalOnEnterDOM();
                }
                this.enterSignal.set(true);
              };
            }

            onDomEnter(callback: () => void, uniqueIdentifier?: string): void {
              if (uniqueIdentifier && this.effects[uniqueIdentifier]) {
                this.effects[uniqueIdentifier].destroy();
              }
              const effectRef = effect(
                () => {
                  if (this.enterSignal()) {
                    callback();
                    effectRef.destroy();
                    if (uniqueIdentifier) {
                      delete this.effects[uniqueIdentifier];
                    }
                  }
                },
                { injector: this.injector }
              );
              if (uniqueIdentifier) {
                this.effects[uniqueIdentifier] = effectRef;
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
