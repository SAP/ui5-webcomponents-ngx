import {ParserConfiguration} from "./parser-configuration";
import {SymbolObject} from "./symbol-types";
import {readFileSync} from "fs";
import {combinedProperties} from "./combined-properties";
import {combinedEvents} from "./combined-events";
import {combinedSlots} from "./combined-slots";
import {combinedMethods} from "./combined-methods";

/**
 * Api.json is a very compact format. It does not contain all the information we need about every symbol,
 * internally it just refers to other symbols by domain name if they are not in the same class.
 * This function resolves all the references and returns a list of symbols with all the information we need.
 *
 * @param configuration
 */
export async function getImplementersAndSymbols(configuration: ParserConfiguration) {
  // code below does not work. It does not give full picture
  // const {default: getAllEntities} = await import('@ui5/tooling-webc/lib/generate/utils/getAllEntities.js');
  // const de = getAllEntities((configuration.apiJsonPaths as string[]).map(f => readFileSync(require.resolve(f), "utf-8")));
  const implementers: Record<string, SymbolObject[]> = {};
  const resolvedJsons = configuration.apiJsonPaths.map(pathToJson => {
    let apiJsonPath: string;
    let srcBasePath: string;

    if (typeof pathToJson === 'string') {
      apiJsonPath = pathToJson;
      srcBasePath = (pathToJson.match(/(.*)\/dist(.*)/)?.[1] as string) + '/dist'; // temporarily silencing TS
    } else {
      apiJsonPath = pathToJson.apiJsonPath;
      srcBasePath = pathToJson.srcBasePath;
    }
    return {
      baseSourcePath: srcBasePath,
      symbols: (JSON.parse(readFileSync(require.resolve(apiJsonPath), "utf-8")).symbols as SymbolObject[]).reduce((acc: Record<SymbolObject['name'], SymbolObject>, next) => {
        acc[next.name] = next;
        return acc;
      }, {})
    };
  });

  for (let i = 0; i < resolvedJsons.length; ++i) {
    const resolvedJson = resolvedJsons[i];
    Object.values(resolvedJson.symbols).forEach(symbol => {
      symbol.resource = `${resolvedJson.baseSourcePath}/${symbol.resource}`;
      symbol['properties'] = combinedProperties(symbol, ...resolvedJsons.map(r => r.symbols));
      symbol['events'] = combinedEvents(symbol, ...resolvedJsons.map(r => r.symbols));
      symbol['slots'] = combinedSlots(symbol, ...resolvedJsons.map(r => r.symbols));
      symbol['methods'] = combinedMethods(symbol, ...resolvedJsons.map(r => r.symbols));
      symbol.implements = symbol.implements || [];
      symbol.slots = symbol.slots || [];
      const formInputs = symbol?.properties?.filter(p => (p.formProperty as unknown as string) === 'true');
      symbol.formData = (formInputs || []).map(p => {
        return {
          property: p,
          events: (p.formEvents as unknown as string).split(',').map(e => symbol.events.find(ev => ev.name === e)).filter(Boolean) as SymbolObject['events'],
        }
      });
      symbol.implements.forEach((interfaceName) => {
        if (!implementers[interfaceName]) {
          implementers[interfaceName] = [];
        }
        implementers[interfaceName].push(symbol);
      });
    })
  }

  const symbols = resolvedJsons.reduce((acc: Record<SymbolObject['name'], SymbolObject>, next) => {
    return {
      ...acc,
      ...next.symbols
    }
  }, {});
  return {
    implementers,
    symbols
  }
}
