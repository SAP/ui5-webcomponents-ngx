import {ExportSpecifierType} from "@ui5/webcomponents-wrapper";
import {format} from "prettier";
import {AngularGeneratedFile} from "../angular-generated-file";

/**
 * The generic control value accessor class generator.
 * This class is used to create a generic control value accessor class.
 * Output class will be responsible for handling the value changes of the host element
 * and notifying the Angular form control about the changes.
 */
export class GenericCva extends AngularGeneratedFile {
  constructor() {
    super();
    this.move('generic-cva/index.ts');
    this.addExport({
      local: 'GenericControlValueAccessor',
      exported: 'GenericControlValueAccessor',
      types: [ExportSpecifierType.Class]
    });
  }

  override getCode(): string {
    return format(`import { Directive, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

interface ValueProviderInterface<ValueType = any> {
  value: ValueType;
  valueUpdatedNotifier$: Observable<any>;
  setDisabledState(isDisabled: boolean): void;
}

@Directive()
export class GenericControlValueAccessor<ValueType = any>
  implements ControlValueAccessor, OnDestroy
{
  onChange!: (val: ValueType) => void;
  onTouched!: () => void;
  private _destroy$ = new Subject<void>();
  private _onChangeSet$ = new BehaviorSubject(false);
  constructor(protected host: ValueProviderInterface<ValueType>) {
    this.host.valueUpdatedNotifier$
      .pipe(
        map(() => this.host.value),
        switchMap(this.onChange$),
        takeUntil(this._destroy$)
      )
      .subscribe();
    this.setDisabledState = this.host.setDisabledState;
  }

  setDisabledState: (isDisabled: boolean) => void = () => {
    // Placeholder
  };

  onChange$ = (val: ValueType): Observable<ValueType> => {
    return this._onChangeSet$.pipe(
      filter(Boolean),
      tap(() => this.onChange(val)),
      tap(() => this.onTouched()),
      map(() => val)
    );
  };

  registerOnChange(fn: (newVal: ValueType) => void): void {
    this.onChange = fn;
    this._onChangeSet$.next(true);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(val: ValueType): void {
    this.host.value = val;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
    `, {parser: 'typescript'});
  }
}

export const genericCva = new GenericCva();
