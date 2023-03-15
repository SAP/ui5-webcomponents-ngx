[![REUSE status](https://api.reuse.software/badge/github.com/SAP/ui5-webcomponents-ngx)](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-ngx)

# UI5 Web Components for Angular

## About this project

This is a wrapper around [@ui5/webcomponents](https://sap.github.io/ui5-webcomponents) project to make it work with
Angular without
needing to use the [CUSTOM_ELEMENTS_SCHEMA](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA)
or [NO_ERRORS_SCHEMA](https://angular.io/api/core/NO_ERRORS_SCHEMA) schemas,
while providing full type safety and access to underlying web components in a type safe environment.
Everything that works and is available on the [@ui5/webcomponents](https://sap.github.io/ui5-webcomponents) side, will
work here as well, with few minor differences, which are described in
the [documentation site](https://sap.github.io/ui5-webcomponents-ngx/).

## Requirements and Setup

* Angular 15 or higher. Other versions might work, but are not tested.

### Installation

Via npm:

```bash
npm install @ui5/webcomponents-ngx
```

Via yarn:

```bash
yarn add @ui5/webcomponents-ngx
```

### Usage

Import the module in your `app.module.ts` file:

```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Ui5AngularModule} from '@ui5/webcomponents-ngx'; // here it is

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ui5AngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

And that is it, you can now use any component described in
the [@ui5/webcomponents](https://sap.github.io/ui5-webcomponents)
documentation.

### Angular Forms

Every form-capable component can be used with Angular's native form approaches. Meaning all the
`formControlName` and `ngModel`s will work as expected.

## Support, Feedback, Contributing

This project is open to feature requests/suggestions, bug reports etc.
via [GitHub issues](https://github.com/SAP/ui5-webcomponents-ngx/issues). Contribution and feedback are encouraged and
always welcome. For more information about how to contribute, the project structure, as well as additional contribution
information, see our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-ngx/blob/main/CONTRIBUTING.md).

## Code of Conduct

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for
everyone. By participating in this project, you agree to abide by
its [Code of Conduct](https://github.com/SAP/ui5-webcomponents-ngx/blob/main/CODE_OF_CONDUCT.md) at all times.

## Licensing

Copyright 2022 SAP SE or an SAP affiliate company and ui5-webcomponents-ngx contributors. Please see
our [LICENSE](https://github.com/SAP/ui5-webcomponents-ngx/blob/main/LICENSES/Apache-2.0.txt) for copyright and license
information. Detailed information including third-party components and their licensing/copyright information is
available [via the REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-ngx).



