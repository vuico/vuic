---
group: "configuration"
title: "Config"
icon: "carbon:settings"
---

# Config

To set custom options for the Vuic you need to pass Vuic config object as second argument to the app.use() function:

```typescript
// src/main.ts

import { VuicPlugin, VuicConfig } from "@vuico/vuic";

const config: VuicConfig = {
  theme: {...},
  defaultSettings: {...},
};

app.use(VuicPlugin, config);
```

### Props

| Prop            | Type                                                                      |
| --------------- | ------------------------------------------------------------------------- |
| theme           | [VuicTheme](/vuic/#/story/src-stories-configuration-theme-story-js)       |
| defaultSettings | [VuicSettings](/vuic/#/story/src-stories-configuration-settings-story-js) |
