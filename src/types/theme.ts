export interface Color {
  light: string;
  dark: string;
}

export interface Theme {
  color?: {
    bg?: Color;
    card?: Color;
    border?: Color;
    primary?: Color;
    //
    text?: Color;
  };
}

export const defaultTheme: Theme = {
  color: {
    bg: { light: "#ffffff", dark: "#1c1c1c" },
    card: { light: "#f5f5f5", dark: "#2b2b2b" },
    border: { light: "#e2e2e2", dark: "#444444" },
    primary: { light: "#007aff", dark: "#0a84ff" },
    //
    text: { light: "#1c1c1c", dark: "#ffffff" },
  },
};
