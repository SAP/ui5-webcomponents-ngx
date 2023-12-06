export interface Constructor {
  visibility: string;
}

export interface Property {
  formEvents: string[];
  formProperty: boolean;
  name: string;
  visibility: string;
  since: string;
  type: string;
  description: string;
  defaultValue: string;
}

export interface Slot {
  name: string;
  propertyName: string;
  visibility: string;
  since: string;
  type: string;
  description: string;
}

export interface Parameter {
  name: string;
  type: string;
  description: string;
}

export interface Event {
  name: string;
  visibility: string;
  since: string;
  parameters: Parameter[];
  description: string;
}

export interface Method {
  visibility: string;
  name: string;
  returnValue?: {
    type: string
  };
  parameters: Parameter[];
  description: string;
}


export interface SymbolObject {
  formProperties: string[];
  formAssociated: boolean;
  kind: string;
  name: string; // fully qualified name
  basename: string;
  tagname: string;
  resource: string;
  module: string;
  static: boolean;
  visibility: string;
  since: string;
  extends: string;
  implements: string[];
  description: string;
  constructor: Constructor;
  properties: Property[];
  slots: Slot[];
  events: Event[];
  methods: Method[];
  formData: {
    property: Property;
    events: Event[]
  }[]
}
