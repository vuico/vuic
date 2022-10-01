export interface IColor {
  light: string;
  dark: string;
}

export interface ITheme {
  color?: {
    bg?: IColor;
    card?: IColor;
    border?: IColor;
    primary?: IColor;
    primaryHovered?: IColor;
    text?: IColor;
    textHovered?: IColor;
    textSecondary?: IColor;
  };
  fontSize?: {
    default?: number;
    large?: number;
  };
  fontWeight?: {
    default?: number;
    bold?: number;
  };
  fontFamily?: {
    default?: string;
  };
  duration?: {
    fast?: number;
  };
}

export const defaultTheme: ITheme = {
  color: {
    bg: { light: "#ffffff", dark: "#1c1c1c" },
    card: { light: "#f3f3f3", dark: "#2b2b2b" },
    border: { light: "#e2e2e2", dark: "#444444" },
    primary: { light: "#007aff", dark: "#0a84ff" },
    primaryHovered: { light: "#1c1c1c", dark: "#ffffff" },
    text: { light: "#1c1c1c", dark: "#ffffff" },
    textHovered: { light: "#ffffff", dark: "#1c1c1c" },
    textSecondary: { light: "#9a9a9a", dark: "#9a9a9a" },
  },
  fontSize: {
    default: 14,
    large: 18,
  },
  fontWeight: {
    default: 500,
    bold: 700,
  },
  fontFamily: {
    default:
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'Noto Sans', sans-serif",
  },
  duration: {
    fast: 0.25,
  },
};
