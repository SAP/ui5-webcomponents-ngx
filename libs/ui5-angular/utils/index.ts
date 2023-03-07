import { fromEvent } from 'rxjs';

function ProxyInputs(inputNames: string[]) {
  return (cls: any) => {
    inputNames.forEach((inputName) => {
      Object.defineProperty(cls.prototype, inputName, {
        get() {
          return this.element[inputName];
        },
        set(val: any) {
          this.zone.runOutsideAngular(() => (this.element[inputName] = val));
        },
      });
    });
  };
}

function ProxyMethods(methodNames: string[]) {
  return (cls: any) => {
    methodNames.forEach((methodName) => {
      cls.prototype[methodName] = function (...args: any[]) {
        return this.zone.runOutsideAngular(() =>
          // eslint-disable-next-line prefer-spread
          this.element[methodName].apply(this.element, args)
        );
      };
    });
  };
}

function ProxyOutputs(outputNames: string[]) {
  return (cls: any) => {
    outputNames.forEach((outputName) => {
      Object.defineProperty(cls.prototype, outputName, {
        get(): any {
          return fromEvent(this.element, outputName);
        },
      });
    });
  };
}

export { ProxyInputs, ProxyMethods, ProxyOutputs };
