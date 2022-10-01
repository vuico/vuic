// utils
import { reactive, readonly } from "vue";
import { IConfig, defaultConfig } from "@/types/config";
import { ISettings, defaultSettings } from "@/types/settings";

export const createStore = () => {
  const state = reactive<{ config: IConfig; settings: ISettings }>({
    config: defaultConfig,
    settings: defaultSettings,
  });

  const setTheme = (theme: "light" | "dark") => {
    state.settings.theme = theme;

    if (state.config.theme) {
      if (state.config.theme.color) {
        Object.entries(state.config.theme.color).map(([key, value]) => {
          document.documentElement.style.setProperty(
            `--theme-color-${key}`,
            value[theme],
          );
        });
      }
    }
  };

  return { setTheme, state: readonly(state) };
};
