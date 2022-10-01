---
group: "configuration"
title: "Theme"
icon: "carbon:color-palette"
---

# Theme

Theme is one core elements of Vuic. You can customize Vuic's theme as per your liking. Vuic theme is complex object which looks like:

```typescript
const theme = {
  color: {
    bg: { light: "#ffffff", dark: "#1c1c1c" },
    primary: { light: "#007aff", dark: "#0a84ff" },
  },
  fontSize: {
    default: 14,
  },
};
```

To set your custom theme you need to pass theme configuration to the VuicPlugin options like this:

```typescript
// src/config/theme.ts

import { Theme } from "@vuico/vuic";

const theme: Theme = {
  fontSize: {
    default: 14,
  },
};

export default theme;
```

```typescript
// src/main.ts

import themeConfig from "@/config/theme.ts";

app.use(VuicPlugin, {
  theme: themeConfig,
});
```

### fontSize

| Prop    | Type   | Default value |
| ------- | ------ | ------------- |
| default | number | 14            |
| large   | number | 18            |

---

### fontWeight

| Prop    | Type   | Default value |
| ------- | ------ | ------------- |
| default | number | 500           |
| bold    | number | 700           |

---

### fontFamily

| Prop    | Type   | Default value                                                                                                                                  |
| ------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| default | string | "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'Noto Sans', sans-serif" |

---

### duration

| Prop | Type   | Default value |
| ---- | ------ | ------------- |
| fast | number | 0.25          |

---

### color

```typescript
interface Color {
  light: string;
  dark: string;
}
```

| Prop            | Type  | Default value (Light)                                                                              | Default value (Dark)                                                                               |
| --------------- | ----- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| bg              | Color | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/ffffff/ffffff.png)" /> "#ffffff" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/1c1c1c/1c1c1c.png)" /> "#1c1c1c" |
| card            | Color | `{ light: "#f5f5f5", dark: "#2b2b2b" }`                                                            |                                                                                                    |
| border          | Color | `{ light: "#e2e2e2", dark: "#444444" }`                                                            |                                                                                                    |
| primary         | Color | `{ light: "#007aff", dark: "#0a84ff" }`                                                            |                                                                                                    |
| primaryInverted | Color | "#ffffff"                                                                                          |                                                                                                    |
| text            | Color | `{ light: "#1c1c1c", dark: "#ffffff" }`                                                            |                                                                                                    |
| textInverted    | Color | "#1c1c1c"                                                                                          |                                                                                                    |
| textSecondary   | Color | "#9a9a9a"                                                                                          |                                                                                                    |

---

### palette

For palette colors we are using [default colors by Apple](https://developer.apple.com/design/human-interface-guidelines/foundations/color/).

| Prop   | Type   | Default value |
| ------ | ------ | ------------- |
| red    | string |               |
| orange | string |               |
| yellow | string |               |
| green  | string |               |
| mint   | string |               |
| teal   | string |               |
| cyan   | string |               |
| blue   | string |               |
| indigo | string |               |
| purple | string |               |
| pink   | string |               |
| brown  | string |               |
