import '@ui5/webcomponents-icons/dist/AllIcons';
import "@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js";
import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from '../documentation.json';
import {parse} from 'flatted';
import flattedJson from '../src/api-json.json';
const apiJson = parse(JSON.stringify(flattedJson)).reduce((acc, next) => {
  acc[next.baseName] = next;
  return acc;
}, {});
console.log({apiJson})
const interfaces = docJson.interfaces.reduce((acc, element) => {
  const baseName = element.name.replace('Element', '');
  acc[baseName] = element;
  return acc;
}, {});

const mappedDocsJson = docJson.components.reduce((acc: any[], element) => {
  const baseName = element.name.replace('Component', '');

  const componentApi = apiJson[baseName];
  if (baseName === 'Button') {
    console.log({componentApi})
  }
  const elementInterface = interfaces[baseName];
  const inputs = element.inputs.map((inputName) => {
    const [interfacePropertyName] = inputName.split(':');
    return elementInterface.properties.find(({name}) => name === interfacePropertyName);
  });
  if (componentApi) {
    element.description = componentApi.description;
  }
  element.inputsClass = [...(element.inputsClass || []), ...inputs].filter(c => Boolean(c) && !c.name.startsWith('_')).map((input) => {
    if (componentApi) {
      const apiInput = componentApi.inputs.find(({name}) => name === input.name);
      if (apiInput) {
        input.description = apiInput.description;
        input.defaultValue = apiInput.defaultValue;
      }
    }
    return input;
  }) as any;
  element.propertiesClass = componentApi?.slots.map((slot) => ({name: slot.name === 'default' ? 'content' : slot.name, type: 'string', description: slot.description}));
  acc.push(element);
  return acc;
}, []);

setCompodocJson({components: mappedDocsJson});
export const parameters = {
  docs: {
    inlineStories: true,
  },
};
