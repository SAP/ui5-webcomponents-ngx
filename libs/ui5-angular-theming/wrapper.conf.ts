import { WrapperConfig } from '@ui5/webcomponents-wrapper';
import { themingGenerator } from '@ui5/webcomponents-ngx-generator';

export default {
  getComponents: () => [],
  generator: () => themingGenerator(),
} as Partial<WrapperConfig<string>>;
