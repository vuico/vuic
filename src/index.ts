// utils
import { App, Plugin } from "vue";

export interface Theme {
  colors: {
    bg: string;
  };
}

export interface VuicConfig {
  theme: Theme;
}

export const defaultTheme: Theme = {
  colors: {
    bg: "#1c1c1c",
  },
};

export const createVuic = (options: VuicConfig) => {
  return {
    theme: {
      colors: {
        bg: options.theme.colors.bg || defaultTheme.colors.bg,
      },
    },
  };
};

// The Install function used by Vue to register the plugin
export const VuicPlugin: Plugin = {
  install(app: App, options: VuicConfig) {
    app.config.globalProperties.$vuic = createVuic(options);
  },
};
