// utils
import { App, Plugin } from "vue";
import { Settings, useSettingsStore } from "@/stores/settings";

// components
import Button from "@/components/Button/Button.vue";

export const components = {
  Button,
};

export interface Color {
  light: string;
  dark: string;
}

export interface Theme {
  colors: {
    bg: Color;
    card: Color;
    border: Color;
  };
}

export interface VuicConfig {
  theme: Theme;
  defaultSettings: Settings;
}

export const defaultConfig: VuicConfig = {
  theme: {
    colors: {
      bg: { light: "#ffffff", dark: "#1c1c1c" },
      card: { light: "red", dark: "#2b2b2b" },
      border: { light: "blue", dark: "#444444" },
    },
  },
  defaultSettings: {
    theme: "light",
  },
};

const createVuic = (config?: VuicConfig): VuicConfig => {
  const newConfig: VuicConfig = {
    theme: {
      colors: {
        bg: (config && config.theme.colors.bg) || defaultConfig.theme.colors.bg,
        card:
          (config && config.theme.colors.card) ||
          defaultConfig.theme.colors.card,
        border:
          (config && config.theme.colors.border) ||
          defaultConfig.theme.colors.border,
      },
    },
    defaultSettings: {
      theme:
        (config && config.defaultSettings.theme) ||
        defaultConfig.defaultSettings.theme,
    },
  };

  setTheme(newConfig.defaultSettings.theme);

  return newConfig;
};

export const setTheme = (theme: "light" | "dark") => {
  const settings = useSettingsStore();

  settings.setTheme(theme);
};

export const getTheme = () => {
  const settings = useSettingsStore();

  return settings.settings.theme;
};

// The Install function used by Vue to register the plugin
export const VuicPlugin: Plugin = {
  install(app: App, config?: VuicConfig) {
    app.config.globalProperties.$vuic = createVuic(config);
  },
};
