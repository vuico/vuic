---
group: "configuration"
title: "Settings"
icon: "carbon:settings-adjust"
---

# Settings

Settings is a part of [Vuic config](/vuic/#/story/src-stories-configuration-config-story-js).
You can change default Vuic's settings like this:

```typescript
// src/config/vuic-settings.ts

import { VuicSettings } from "@vuico/vuic";

const defaultSettings: VuicSettings = {
  theme: "dark",
};

export default defaultSettings;
```

```typescript
// src/main.ts

import defaultSettings from "@/config/vuic-settings.ts";

app.use(VuicPlugin, {
  defaultSettings,
});
```

# Available options

Full list of available settings props:

| Prop  | Type              | Default value |
| ----- | ----------------- | ------------- |
| theme | "light" or "dark" | "light"       |
