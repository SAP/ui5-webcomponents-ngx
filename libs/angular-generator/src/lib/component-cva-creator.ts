import {GeneratedAngularComponentFile} from "./generated-angular-component-file";
import {OutputType} from "@ui5/webcomponents-wrapper";
import {genericCva} from "./generic-cva";

export function ComponentCvaCreator(componentFile: GeneratedAngularComponentFile): string {
  if (componentFile.componentData.formData.length > 0) {
    let getValue, setValue;
    const outputEvents = [...(new Set(componentFile.componentData.formData.reduce((acc: OutputType[], form) => {
      return acc.concat(form.events);
    }, []))).values()];
    if (componentFile.componentData.formData.length > 1) {
      getValue = `{
          ${componentFile.componentData.formData.map(({property}) => `${property.name}: elementRef.nativeElement.${property.name}`).join(',\n')}
        }`;
      setValue = `
          ${componentFile.componentData.formData.map(({property}) => `elementRef.nativeElement.${property.name} = val?.${property.name}`).join(';\n')}
        `;
    } else {
      try {
        getValue = `elementRef.nativeElement.${componentFile.componentData.formData[0].property.name}`;
        setValue = `elementRef.nativeElement.${componentFile.componentData.formData[0].property.name} = val;`;
      } catch (e) {
        console.log(e);
      }
    }

    return `
        @Directive({
          selector: '${componentFile.selector}',
          providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ${componentFile.wrapperExportSpecifier.local}Cva), multi: true }]
        })
        class ${componentFile.wrapperExportSpecifier.local}Cva extends ${genericCva.exports[0].specifiers[0].exported} {
          constructor(private elementRef: ElementRef<${componentFile.wrapperExportSpecifier.local}['element']>) {
            super({
              get value() {
                return ${getValue}
              },
              set value(val) {
                ${setValue}
              },
              valueUpdatedNotifier$: merge(
                ${outputEvents.map((event) => `fromEvent(elementRef.nativeElement, '${event.name}')`).join(',\n')}
              ),
              setDisabledState: (isDisabled: boolean): void => {
                elementRef.nativeElement.disabled = isDisabled;
              }
            });
          }
        }
      `;
  }
  return '';
}
