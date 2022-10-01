// utils
import { App, Plugin } from "vue";
import { createStore } from "@/store";
import { Config, defaultConfig } from "@/types/config";
import { Settings, defaultSettings } from "@/types/settings";
import { Theme, defaultTheme, Color } from "@/types/theme";

// components
import Button from "@/components/Button/Button.vue";

const store = createStore();

export const state = store.state;
export const setTheme = store.setTheme;

export type { Config, Settings, Theme, Color };

export {
  defaultConfig,
  defaultSettings,
  defaultTheme,
  //components
  Button,
};

const createVuic = (config?: Config): Config => {
  const newConfig: Config = {
    theme: {
      color: {
        bg: config?.theme?.color?.bg || defaultConfig.theme?.color?.bg,
        card: config?.theme?.color?.card || defaultConfig.theme?.color?.card,
        border:
          config?.theme?.color?.border || defaultConfig.theme?.color?.border,
        primary:
          config?.theme?.color?.primary || defaultConfig.theme?.color?.primary,
        //
        text: config?.theme?.color?.text || defaultConfig.theme?.color?.text,
      },
    },
    defaultSettings: {
      theme:
        config?.defaultSettings?.theme || defaultConfig.defaultSettings?.theme,
    },
  };

  store.setTheme(newConfig.defaultSettings?.theme || "light");

  return newConfig;
};

// The Install function used by Vue to register the plugin
export const VuicPlugin: Plugin = {
  install(app: App, config?: Config) {
    app.config.globalProperties.$vuic = createVuic(config);
  },
};
