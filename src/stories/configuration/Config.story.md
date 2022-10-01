---
group: "configuration"
title: "Config"
icon: "carbon:settings"
---

# Config

To set custom options for the Vuic you need to pass VuicConfig as second argument to the app.use() function:

```typescript
// src/main.ts

import { VuicPlugin, Config } from "@vuico/vuic";

const config: Config = {
  theme: {...},
  defaultSettings: {...},
};

app.use(VuicPlugin, config);
```
