import {ParserConfiguration} from "../parser-configuration";
import {getImplementersAndSymbols} from "./getImplementersAndSymbols";
import {getComponents} from "./get-components";
import { ComponentData } from "@ui5/webcomponents-transformer";

/**
 * Parses the api.json files and returns the list of the component data
 * @param configuration
 */
export async function apiJsonParser(configuration: ParserConfiguration): Promise<ComponentData[]> {
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
