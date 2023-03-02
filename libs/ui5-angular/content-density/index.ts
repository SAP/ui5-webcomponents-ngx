import {Directive, HostBinding, Input, NgModule} from "@angular/core";

@Directive({
  selector: '[ui5Compact]',
  standalone: true
})
export class CompactDirective {
  @Input()
  set ui5Compact(value: boolean | string) {
    this._ui5Compact = value === true || value === '' || value === 'true';
  }

  @HostBinding('class.ui5-content-density-compact')
  private _ui5Compact = false;
}

@NgModule({
  imports: [CompactDirective],
  exports: [CompactDirective]
})
export class ContentDensityModule {
}
