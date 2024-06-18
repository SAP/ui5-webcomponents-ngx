## Ui5 Webcomponents for Angular

### Description
This library represents a set of Angular components that wrap the [@ui5/webcomponents](https://sap.github.io/ui5-webcomponents) library. Every component is compatible with vanilla ui5-webcomponents
and can be used in the same way, but also provides a set of Angular specific approaches, for a seamless integration with Angular.

### Installation
For automated installation run the following command in your Angular project:
```bash
  ng add @ui5/webcomponents-ngx
```

### Usage

#### Components
There are two main modules in this library: `UiMainModule` and `Ui5FioriModule`, which are used to import the components as a batch. If you need to import all of the components, you can use the `Ui5WebcomponentsModule` which imports both of the above modules.
All the components that are included in this library, are standalone and can be used as such, by importing from their respective secondary entrypoints of the library.

```typescript
import { Ui5MainModule } from '@ui5/webcomponents-ngx/main'; // Main module import
import { Ui5FioriModule } from '@ui5/webcomponents-ngx/fiori'; // Fiori module import
import { Ui5CompatModule } from '@ui5/webcomponents-ngx/compat'; // Fiori module import
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx'; // All components import
```

#### Theming
For using theming, you need to install `@ui5/theming-ngx` package and import the `Ui5ThemingModule` in your app module.

```typescript
import { Ui5ThemingModule } from '@ui5/webcomponents-ngx/theming'; // Theming module import

@NgModule({
  imports: [
    BrowserModule,
    Ui5ThemingModule.forRoot({defaultTheme: 'sap_horizon'}) // Theming module import
  ]
})
export class AppModule { }
```
**note:** ng-add schematic automatically does these steps for you, so we strongly encourage you to use it.

#### Other configurations
You can configure other parts of the library, such as `language`, `animationMode` and `fetchDefaultLanguage` by using the `Ui5WebcomponentsConfigModule.forRoot`.

```typescript 
import { Ui5WebcomponentsConfigModule } from '@ui5/webcomponents-ngx/config'; // Config module import

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
