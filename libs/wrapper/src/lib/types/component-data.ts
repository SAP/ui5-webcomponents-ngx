export interface InputType {
  publicName: string,
  name: string,
  type: string | ComponentData[],
  defaultValue: string,
  isArray: boolean,
}

export interface OutputType {
  name: string,
  publicName: string,
  type: string,
}

export interface SlotType {
  name: string,
  type: string,
  supportedElements: Array<ComponentData>,
  isArray: boolean,
}

export interface ParameterType {
  name: string,
  type: string
}

export interface MethodType {
  name: string;
  parameters: Array<ParameterType>;
  returnValue: string;
}

export interface ComponentData {
  baseName: string;
  dependencies: Array<ComponentData>,
  selector: string,
  implements: Array<string>,
  path: string,
  inputs: InputType[],
  outputs: OutputType[],
  slots: SlotType[],
  methods: MethodType[],
  formData: {
    property: InputType,
    events: Array<OutputType>,
  }[]
}
