---
group: "configuration"
title: "Theme"
icon: "carbon:color-palette"
---

# Theme

Theme is a part of [Vuic config](/vuic/#/story/src-stories-configuration-config-story-js).
You can customize Vuic's theme as per your liking. Vuic theme is complex object which looks like:

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
// src/config/vuic-theme.ts

import { VuicTheme } from "@vuico/vuic";

const theme: VuicTheme = {
  fontSize: {
    default: 14,
  },
};

export default theme;
```

```typescript
// src/main.ts

import themeConfig from "@/config/vuic-theme.ts";

app.use(VuicPlugin, {
  theme: themeConfig,
});
```

# Available options

Full list of available theme props:

### color

| Prop           | Type      | Default value (Light)                                                                              | Default value (Dark)                                                                               |
| -------------- | --------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| bg             | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/ffffff/ffffff.png)" /> "#ffffff" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/1c1c1c/1c1c1c.png)" /> "#1c1c1c" |
| card           | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/f3f3f3/f3f3f3.png)" /> "#f3f3f3" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/2b2b2b/2b2b2b.png)" /> "#2b2b2b" |
| border         | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/e2e2e2/e2e2e2.png)" /> "#e2e2e2" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/444444/444444.png)" /> "#444444" |
| primary        | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/007aff/007aff.png)" /> "#007aff" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/0a84ff/0a84ff.png)" /> "#0a84ff" |
| primaryHovered | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/1c1c1c/1c1c1c.png)" /> "#1c1c1c" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/ffffff/ffffff.png)" /> "#ffffff" |
| text           | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/1c1c1c/1c1c1c.png)" /> "#1c1c1c" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/ffffff/ffffff.png)" /> "#ffffff" |
| textHovered    | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/ffffff/ffffff.png)" /> "#ffffff" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/1c1c1c/1c1c1c.png)" /> "#1c1c1c" |
| textSecondary  | VuicColor | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/9a9a9a/9a9a9a.png)" /> "#9a9a9a" | <img style="margin: -3px 3px" src="https://via.placeholder.com/15/9a9a9a/9a9a9a.png)" /> "#9a9a9a" |

```typescript
interface VuicColor {
  light: string;
  dark: string;
}
```

---

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

### [WIP] palette

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
