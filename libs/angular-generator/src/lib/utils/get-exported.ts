import {ExportSpecifier} from "@ui5/webcomponents-transformer";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';

/**
 * Gets the exported specifier name
 * @param exported
 */
export const getExported = ({exported}: ExportSpecifier<AngularExportSpecifierType>) => typeof exported === 'string' ? exported : exported();
