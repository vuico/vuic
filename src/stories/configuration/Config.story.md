---
group: "configuration"
title: "Config"
icon: "carbon:settings"
---

# Config

To set custom options for the Vuic you need to pass VuicConfig as second argument to the app.use() function:

```typescript
// src/main.ts

import { VuicPlugin, VuicConfig } from "@vuico/vuic";

const config: VuicConfig = {
  theme: {...},
};

app.use(VuicPlugin, config);
```
