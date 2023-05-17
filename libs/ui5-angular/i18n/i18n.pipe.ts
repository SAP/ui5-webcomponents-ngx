import {ChangeDetectorRef, OnDestroy, Pipe, PipeTransform} from "@angular/core";
import {I18nService} from "./i18n.service";
import {distinctUntilChanged, Subject, Subscription, takeUntil} from "rxjs";

@Pipe({
  name: 'ui5I18n',
  pure: false,
  standalone: true
})
export class I18nPipe implements PipeTransform, OnDestroy {
  private _lastTranslationValue = '';
  private _subscription?: Subscription;
  private _destroyed$ = new Subject<void>();
  private _lastValue!: string;
  private _lastValueParams!: string[];

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private i18nService: I18nService) {
  }

  transform(value: string, ...params: any[]): string {
    const paramsChanged = !this._lastValue || params.some((param, index) => param !== this._lastValueParams[index]);
    if (value === this._lastValue && !paramsChanged) {
      return this._lastTranslationValue;
    }
    this._lastValue = value;
    this._lastValueParams = params;
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = undefined;
    }
    this._subscription = this.i18nService.getText(value, ...params)
      .pipe(
        distinctUntilChanged(),
        takeUntil(this._destroyed$)
      ).subscribe((text) => {
        this._lastTranslationValue = text;
        this.changeDetectorRef.markForCheck();
      });
    return this._lastTranslationValue;
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
