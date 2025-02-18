import { Injectable } from '@angular/core';
import { WebcomponentsThemingProvider } from '@ui5/webcomponents-ngx/theming';

@Injectable({ providedIn: 'root' })
class Ui5WebcomponentsAiThemingService extends WebcomponentsThemingProvider {
  name = 'ui-5-webcomponents-ai-theming-service';
  constructor() {
    super(
      () =>
        import('@ui5/webcomponents-ai/dist/generated/json-imports/Themes.js'),
    );
  }
}

export { Ui5WebcomponentsAiThemingService };
