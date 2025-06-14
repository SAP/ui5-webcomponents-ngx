import '@ui5/webcomponents-icons/dist/AllIcons';
import '@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js';
import "@ui5/webcomponents/dist/dynamic-date-range-options/Today.js";
import "@ui5/webcomponents/dist/dynamic-date-range-options/Yesterday.js";
import "@ui5/webcomponents/dist/dynamic-date-range-options/Tomorrow.js";
import "@ui5/webcomponents/dist/dynamic-date-range-options/DateRange.js";
import "@ui5/webcomponents/dist/dynamic-date-range-options/SingleDate.js";
import "@ui5/webcomponents/dist/dynamic-date-range-options/toDates.js";
import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection.js';
import { getTheme, setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import 'zone.js'; 
import 'zone.js/testing';

type Themes = {
  [name: string]: string;
};

const themes: Themes = {
  'Morning Horizon': 'sap_horizon',
  'Evening Horizon': 'sap_horizon_dark',
  'Horizon High Contrast Black': 'sap_horizon_hcb',
  'Horizon High Contrast White': 'sap_horizon_hcw',
  'Quartz Light': 'sap_fiori_3',
  'Quartz Dark': 'sap_fiori_3_dark',
  'Quartz High Contrast Black': 'sap_fiori_3_hcb',
  'Quartz High Contrast White': 'sap_fiori_3_hcw',
};

export const parameters = {
  docs: {
    inlineStories: true,
  },
  options: {
    storySort: {
      order: ['Introduction', 'Maintainers', '*'],
    },
  },
};

const setDirection = (direction) => {
  document.body.setAttribute('dir', direction);
  applyDirection();
};

const withThemeProvider = (Story, storyContext) => {
  const { theme, rtl, density } = storyContext.globals;
  setTheme(themes[theme]);

  setDirection(rtl === 'RTL' ? 'rtl' : 'ltr');

  document.body.classList.remove('sapUiSizeCozy');
  document.body.classList.remove('sapUiSizeCompact');
  document.body.classList.add('sapUiSize' + density);
  return Story();
};

export const decorators = [withThemeProvider];

const GLOBAL_CONTENT_DENSITY_CSS_VAR = '--_ui5_content_density';

const getEffectiveContentDensity = (el: HTMLElement) =>
  getComputedStyle(el).getPropertyValue(GLOBAL_CONTENT_DENSITY_CSS_VAR);

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: Object.keys(themes).find((key) => themes[key] === getTheme()),
    toolbar: {
      title: 'Toggle theme',
      icon: '',
      items: Object.keys(themes),
      dynamicTitle: true,
    },
  },
  rtl: {
    description: 'Global rtl mode for components',
    defaultValue: 'LTR',
    toolbar: {
      title: 'Direction',
      icon: '',
      items: ['LTR', 'RTL'],
      dynamicTitle: true,
    },
  },
  density: {
    description: 'Global content density mode for components',
    defaultValue:
      getEffectiveContentDensity(document.body) === 'cozy' ? 'Cozy' : 'Compact',
    toolbar: {
      title: 'Content Density',
      icon: '',
      items: ['Cozy', 'Compact'],
      dynamicTitle: true,
    },
  },
};
export const tags = ['autodocs'];
