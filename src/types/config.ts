// utils
import { Settings } from "@/types/settings";
import { Theme, defaultTheme } from "@/types/theme";

export interface Config {
  theme?: Theme;
  defaultSettings?: Settings;
}

export const defaultConfig: Config = {
  theme: defaultTheme,
  defaultSettings: {
    theme: "light",
  },
};
