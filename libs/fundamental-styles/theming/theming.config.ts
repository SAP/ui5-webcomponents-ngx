import { isDevMode } from '@angular/core';
const themes = {
  ['sap_fiori_3']: import(
    'fundamental-styles/dist/js/theming/sap_fiori_3'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_fiori_3_dark']: import(
    'fundamental-styles/dist/js/theming/sap_fiori_3_dark'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_fiori_3_hcb']: import(
    'fundamental-styles/dist/js/theming/sap_fiori_3_hcb'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_fiori_3_hcw']: import(
    'fundamental-styles/dist/js/theming/sap_fiori_3_hcw'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_fiori_3_light_dark']: import(
    'fundamental-styles/dist/js/theming/sap_fiori_3_light_dark'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_horizon']: import(
    'fundamental-styles/dist/js/theming/sap_horizon'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_horizon_dark']: import(
    'fundamental-styles/dist/js/theming/sap_horizon_dark'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_horizon_hcb']: import(
    'fundamental-styles/dist/js/theming/sap_horizon_hcb'
  ).then(({ default: { cssSource } }) => cssSource),
  ['sap_horizon_hcw']: import(
    'fundamental-styles/dist/js/theming/sap_horizon_hcw'
  ).then(({ default: { cssSource } }) => cssSource),
};
export const AvailableThemes: string[] = [
  'sap_fiori_3',
  'sap_fiori_3_dark',
  'sap_fiori_3_hcb',
  'sap_fiori_3_hcw',
  'sap_fiori_3_light_dark',
  'sap_horizon',
  'sap_horizon_dark',
  'sap_horizon_hcb',
  'sap_horizon_hcw',
];
export const LoadTheme: (theme: string) => Promise<string> = async (
  themeName: string
): Promise<string> => {
  if (!themes[themeName]) {
    if (isDevMode()) {
      console.warn(
        `Theme ${themeName} is not supported. Supported themes are: ${AvailableThemes.join(
          ', '
        )}`
      );
    }
    return '';
  }
  return themes[themeName];
};
