// utils
import { App, Plugin } from "vue";
import { createStore } from "@/store";
import { IConfig, defaultConfig } from "@/types/config";
import { ISettings, defaultSettings } from "@/types/settings";
import { ITheme, defaultTheme, IColor } from "@/types/theme";
import extend from "just-extend";

// styles
import "@/assets/styles/global.scss";

// components
export { default as Button } from "@/components/Button/Button.vue";

const store = createStore();

export const state = store.state;
export const setTheme = store.setTheme;

interface VuicConfig extends IConfig {}
interface VuicSettings extends ISettings {}
interface VuicTheme extends ITheme {}
interface VuicColor extends IColor {}

export { VuicConfig, VuicSettings, VuicTheme, VuicColor };

export { defaultConfig, defaultSettings, defaultTheme };

const createVuic = (config?: IConfig): IConfig => {
  const newConfig: IConfig = {
    theme: config ? extend(defaultTheme, config.theme) : defaultTheme,
    defaultSettings: config
      ? extend(defaultSettings, config.defaultSettings)
      : defaultSettings,
  };

  store.setTheme(newConfig.defaultSettings?.theme || "light");

  if (newConfig.theme) {
    if (newConfig.theme.fontSize) {
      Object.entries(newConfig.theme.fontSize).map(([key, value]) => {
        document.documentElement.style.setProperty(
          `--theme-fontSize-${key}`,
          `${value}px`,
        );
      });
    }

    if (newConfig.theme.fontWeight) {
      Object.entries(newConfig.theme.fontWeight).map(([key, value]) => {
        document.documentElement.style.setProperty(
          `--theme-fontWeight-${key}`,
          value.toString(),
        );
      });
    }

    if (newConfig.theme.fontFamily) {
      Object.entries(newConfig.theme.fontFamily).map(([key, value]) => {
        document.documentElement.style.setProperty(
          `--theme-fontFamily-${key}`,
          value,
        );
      });
    }

    if (newConfig.theme.duration) {
      Object.entries(newConfig.theme.duration).map(([key, value]) => {
        document.documentElement.style.setProperty(
          `--theme-duration-${key}`,
          `${value}s`,
        );
      });
    }
  }

  return newConfig;
};

// The Install function used by Vue to register the plugin
export const VuicPlugin: Plugin = {
  install(app: App, config?: IConfig) {
    app.config.globalProperties.$vuic = createVuic(config);
  },
};
