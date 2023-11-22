import {ParserConfiguration} from "./lib/parser-configuration";
import {getImplementersAndSymbols} from "./lib/getImplementersAndSymbols";
import {getComponents} from "./lib/get-components";
import { ComponentData } from "@ui5/webcomponents-wrapper";

/**
 * Parses the api.json files and returns the list of the component data
 * @param configuration
 */
export default async function (configuration: ParserConfiguration): Promise<ComponentData[]> {
  const {implementers, symbols} = await getImplementersAndSymbols(configuration);
  return getComponents({
    implementers,
    symbols,
    components: Object.entries(symbols).reduce((acc: any[], [name, symbol]) => {
      if (symbol.tagname) {
        acc.push(symbol);
      }
      return acc;
    }, [])
  });
}
