import {AfterViewInit, Component, ContentChildren, forwardRef, HostListener, OnDestroy, QueryList} from "@angular/core";
import {RadioButtonComponent} from "@ui5/webcomponents-ngx";
import {
  BehaviorSubject,
  filter,
  first,
  fromEvent,
  map,
  merge,
  Observable,
  startWith,
  Subject,
  switchMap,
  takeUntil,
  tap
} from "rxjs";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

@Component({
  selector: 'ui5-button-group',
  template: `
    <ng-content></ng-content>`,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonGroupComponent),
      multi: true,
    }
  ]
})
export class ButtonGroupComponent implements ControlValueAccessor, OnDestroy, AfterViewInit {
  @ContentChildren(RadioButtonComponent) buttons!: QueryList<RadioButtonComponent>;

  private _destroy$ = new Subject<void>();
  private _viewInit$ = new BehaviorSubject<boolean>(false);

  onChange!: (val: string) => void;
  onTouched!: () => void;

  @HostListener('click')
  onClick() {
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._viewInit$.pipe(filter(Boolean), first()).subscribe(() => {
      this.buttons.forEach(b => b.disabled = isDisabled);
    });
  }

  writeValue(val: string): void {
    this._viewInit$.pipe(filter(Boolean), first()).subscribe(() => {
      this.buttons.forEach(b => b.checked = b.value === val);
    });
  }

  ngAfterViewInit(): void {
    this._getCombinedEvents('change').pipe(
      tap((button: RadioButtonComponent) => {
        this.onChange(button.element.value);
        this.buttons.forEach(b => b.checked = b.value === button.value);
      }),
      takeUntil(this._destroy$)
    ).subscribe();
    this._viewInit$.next(true);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  private _getCombinedEvents(eventName: string): Observable<RadioButtonComponent> {
    return this.buttons.changes
      .pipe(
        startWith(this.buttons),
        map((buttons: QueryList<RadioButtonComponent>) => buttons.toArray()),
        switchMap((buttons: RadioButtonComponent[]) => {
          return merge(...buttons.map(button => {
            return fromEvent(button.element, eventName).pipe(map(() => button))
          }))
        })
      );
  }
}
