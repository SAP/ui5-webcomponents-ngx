import {Component} from '@angular/core';

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  log($event: any) {
    console.log($event)
  }
}
