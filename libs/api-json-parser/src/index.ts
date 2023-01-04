import {ParserConfiguration} from "./lib/parser-configuration";
import {getImplementersAndSymbols} from "./lib/getImplementersAndSymbols";
import {getComponents} from "./lib/get-components";

export default async function (configuration: ParserConfiguration) {
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
