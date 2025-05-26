## Ui5 Webcomponents for Angular

### Description
This library provides a set of Angular components that wrap the [@ui5/webcomponents](https://sap.github.io/ui5-webcomponents) library. Each component is fully compatible with the original UI5 Web Components
and can be used in the same way. Additionally, the library offers Angular-specific features for seamless integration.

### Installation
To install the library in your Angular project, run:
```bash
  ng add @ui5/webcomponents-ngx
```

### Usage

#### Components
The library offers several modules:
- `Ui5MainModule`
- `Ui5FioriModule`
- `Ui5AiModule`

You can import these modules individually as needed. If you want to import all components at once, use the `Ui5WebcomponentsModule`.

All components are also available as standalone modules via their respective secondary entry points.

```typescript
import { Ui5MainModule } from '@ui5/webcomponents-ngx/main';
import { Ui5FioriModule } from '@ui5/webcomponents-ngx/fiori';
import { Ui5AoModule } from '@ui5/webcomponents-ngx/ai';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
```

#### Theming
To use theming, import the `Ui5WebcomponentsThemingModule` in your app module.

```typescript
import { Ui5WebcomponentsThemingModule } from '@ui5/webcomponents-ngx/theming';

@NgModule({
  imports: [
    BrowserModule,
    Ui5WebcomponentsThemingModule,
  ]
})
export class AppModule { }
```
**note:** The `ng add` schematic automatically performs these steps, so we strongly recommend using it.

#### Other configurations
You can configure options, such as `language`, `animationMode`, and `fetchDefaultLanguage` by using the `Ui5WebcomponentsConfigModule.forRoot`.

```typescript 
import { Ui5WebcomponentsConfigModule } from '@ui5/webcomponents-ngx/config';

@NgModule({
  imports: [
    BrowserModule,
    Ui5WebcomponentsConfigModule.forRoot({
      language: 'en',
      animationMode: 'none',
      fetchDefaultLanguage: false
    })
  ]
})
export class AppModule { }
```
