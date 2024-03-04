import { ExportSpecifierType } from "../../../lib/types";
import { format } from "prettier";
import { AngularGeneratedFile } from "../angular-generated-file";

/**
 * The generic control value accessor class generator.
 * This class is used to create a generic control value accessor class.
 * Output class will be responsible for handling the value changes of the host element
 * and notifying the Angular form control about the changes.
 */
export class GenericCva extends AngularGeneratedFile {
  className = 'GenericControlValueAccessor';

  constructor() {
    super();
    this.move('generic-cva/index.ts');
    this.addImport('Directive', '@angular/core');
    this.addImport(['ControlValueAccessor', 'NG_VALUE_ACCESSOR'], '@angular/forms');
    this.addExport({
      local: () => this.className,
      exported: () => this.className,
      types: [ExportSpecifierType.Class]
    });
  }

  controlValueAccessorDirectiveMetadataCode = (): string => {
    return `
      selector: "[noop]",
      standalone: true,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: GenericControlValueAccessor,
          multi: true,
        },
      ],
      host: {
        "(focusout)": "onTouched()",
      },
    `
  }

  controlValueAccessorDirectiveClassCode = (): string => {
    return `
    class ${this.className}<ValueType = any> implements ControlValueAccessor {
      onChange!: (val: ValueType) => void;
      onTouched!: () => void = () => {};

      host!: CvaComponent<ValueType>;

      setDisabledState = (isDisabled: boolean): void => {
        (this.host.element as any)["disabled"] = isDisabled;
      };

      registerOnChange(fn: (newVal: ValueType) => void): void {
        this.onChange = fn;
      }

      registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
      }

      writeValue(val: ValueType): void {
        this.host.cvaValue = val;
      }
    }
    `;
  }

  cvaComponentInterfaceCode = (): string => {
    return `
    interface CvaComponent<ValueType = any> {
      element: Element;
      cvaValue: ValueType;
    }
    `
  }

  override getCode(): Promise<string> {
    return format([
        this.getImportsCode(),
        `import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';`,
        this.cvaComponentInterfaceCode(),
        `@Directive({${this.controlValueAccessorDirectiveMetadataCode()}})`,
        this.controlValueAccessorDirectiveClassCode(),
        this.getExportsCode()
      ].join('\n'),
      {
        parser: 'typescript',
        singleQuote: true,
        plugins: ['prettier-plugin-organize-imports']
      }
    );
  }
}

export const genericCva = new GenericCva();
