
export function ProxyInputs(inputNames: string[]) {
  return (cls: any) => {
    inputNames.forEach(inputName => {
      Object.defineProperty(cls.prototype, inputName, {
        get() {
          return this.element[inputName];
        },
        set(val: any) {
          this.zone.runOutsideAngular(() => (this.element[inputName] = val));
        }
      });
    });
  }
}

export function ProxyMethods(methodNames: string[]) {
  return (cls: any) => {
    methodNames.forEach(methodName => {
      cls.prototype[methodName] = function (...args: any[]) {
        return this.zone.runOutsideAngular(() =>
          // eslint-disable-next-line prefer-spread
          this.element[methodName].apply(this.element, args)
        );
      };
    });
  }
}
