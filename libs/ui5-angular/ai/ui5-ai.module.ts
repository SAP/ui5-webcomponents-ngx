import { NgModule } from "@angular/core";
import { Ui5WebcomponentsAiThemingService } from "@ui5/webcomponents-ngx/ai/theming";
import "@ui5/webcomponents-ai/dist/Assets.js";
import { ButtonComponent } from "@ui5/webcomponents-ngx/ai/button";
import { ButtonStateComponent } from "@ui5/webcomponents-ngx/ai/button-state";
import { PromptInputComponent } from "@ui5/webcomponents-ngx/ai/prompt-input";

const imports = [ButtonComponent, ButtonStateComponent, PromptInputComponent];
const exports = [...imports];

@NgModule({
  imports: [...imports],
  exports: [...exports],
})
class Ui5AiModule {
  constructor(
    ui5WebcomponentsAiThemingService: Ui5WebcomponentsAiThemingService,
  ) {}
}
export { Ui5AiModule };
