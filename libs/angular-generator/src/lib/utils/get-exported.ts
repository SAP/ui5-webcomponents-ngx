import {ExportSpecifier} from "@ui5/webcomponents-wrapper";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';

export const getExported = ({exported}: ExportSpecifier<AngularExportSpecifierType>) => typeof exported === 'string' ? exported : exported();
