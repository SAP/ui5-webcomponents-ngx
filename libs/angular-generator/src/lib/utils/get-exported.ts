import {ExportSpecifier} from "@ui5/webcomponents-wrapper";
import {AngularExportSpecifierType} from "@ui5/webcomponents-ngx-generator";

export const getExported = ({exported}: ExportSpecifier<AngularExportSpecifierType>) => typeof exported === 'string' ? exported : exported();
