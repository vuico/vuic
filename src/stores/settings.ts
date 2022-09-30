// utils
import { defineStore } from "pinia";
import { VuicConfig, defaultConfig } from "..";

export interface Settings {
  theme: "light" | "dark";
}

export const useSettingsStore = defineStore("settings", {
  state: () =>
    ({ config: defaultConfig, settings: { theme: "light" } } as {
      config: VuicConfig;
      settings: Settings;
    }),
  actions: {
    setTheme(theme: "light" | "dark") {
      this.settings.theme = theme;

      document.documentElement.style.setProperty(
        "--theme-colors-bg",
        this.config.theme.colors.bg[theme],
      );
      document.documentElement.style.setProperty(
        "--theme-colors-card",
        this.config.theme.colors.card[theme],
      );
    },
  },
});
