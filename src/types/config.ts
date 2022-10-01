// utils
import { ISettings } from "@/types/settings";
import { ITheme, defaultTheme } from "@/types/theme";

export interface IConfig {
  theme?: ITheme;
  defaultSettings?: ISettings;
}

export const defaultConfig: IConfig = {
  theme: defaultTheme,
  defaultSettings: {
    theme: "light",
  },
};
