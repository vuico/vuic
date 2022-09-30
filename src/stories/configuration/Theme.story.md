---
group: "configuration"
title: "Theme"
icon: "carbon:color-palette"
---

# Theme

Theme is one core elements of Vuic. You can customize Vuic's theme as per your liking. Vuic theme is complex object which looks like:

```typescript
const theme = {
  colors: {
    dark: {
      bg: "#1c1c1c",
      primary: "#0484ff",
    },
  },
  fontSizes: {
    default: 14,
  },
  palette: {
    dark: {},
  },
};
```

To set your custom theme you need to pass theme configuration to the VuicPlugin options like this:

```typescript
// src/config/theme.ts

import { Theme } from "@vuico/vuic";

const theme: Theme = {
  fontSizes: {
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

### colors.light / colors.dark

| Prop            | Type   | Default value (dark) |
| --------------- | ------ | -------------------- |
| bg              | string | "#1c1c1c"            |
| card            | string | "#2b2b2b"            |
| border          | string | "#444444"            |
| primary         | string | "#0484ff"            |
| primaryInverted | string | "#ffffff"            |
| text            | string | "#ffffff"            |
| textInverted    | string | "#1c1c1c"            |
| textSecondary   | string | "#9a9a9a"            |

---

### palette.light / palette.dark

For palette colors we are using [default colors by Apple](https://developer.apple.com/design/human-interface-guidelines/foundations/color/).

| Prop   | Type   | Default value (dark) |
| ------ | ------ | -------------------- |
| red    | string |                      |
| orange | string |                      |
| yellow | string |                      |
| green  | string |                      |
| mint   | string |                      |
| teal   | string |                      |
| cyan   | string |                      |
| blue   | string |                      |
| indigo | string |                      |
| purple | string |                      |
| pink   | string |                      |
| brown  | string |                      |
