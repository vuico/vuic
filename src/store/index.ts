// utils
import { reactive, readonly } from "vue";
import { Config, defaultConfig } from "@/types/config";
import { Settings, defaultSettings } from "@/types/settings";

export const createStore = () => {
  const state = reactive<{ config: Config; settings: Settings }>({
    config: defaultConfig,
    settings: defaultSettings,
  });

  const setTheme = (theme: "light" | "dark") => {
    state.settings.theme = theme;

    if (state.config.theme && state.config.theme.color) {
      Object.entries(state.config.theme.color).map(([key, value]) => {
        document.documentElement.style.setProperty(
          `--theme-color-${key}`,
          value[theme],
        );
      });
    }
  };

  return { setTheme, state: readonly(state) };
};
