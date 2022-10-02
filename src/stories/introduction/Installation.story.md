---
group: "introduction"
title: "Installation"
icon: "carbon:arrow-shift-down"
---

# Installation

### Install to existing project

1. Add npm package to your project:

```bash
yarn add @vuico/vuic
```

or

```bash
npm i @vuico/vuic
```

2. Use Vuic plugin:

```typescript
// src/main.ts

import "/node_modules/@vuico/vuic/dist/style.css";
import { VuicPlugin } from "@vuico/vuic";

...

app.use(VuicPlugin);

...
```

---

### Generate new project

The easiest way to get started with Vuic is using yarn and Vite CLI.

1. Run CLI:

```bash
yarn create vite
```

2. Choose these options:

- Vue
- TypeScript

3. Add npm package:

```bash
yarn add @vuico/vuic
```

4. Use Vuic plugin, your main.ts file should look like this:

```typescript
// src/main.ts

import { createApp } from "vue";
import App from "./App.vue";

import "/node_modules/@vuico/vuic/dist/style.css";
import { VuicPlugin } from "@vuico/vuic";

const app = createApp(App);

app.use(VuicPlugin);
app.mount("#app");
```

---

### Recommendations for Vue 3 and Vite projects

- Add paths to your tsconfig.json:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

- Add alias to your vite.config.ts:

```typescript
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

### Recommended IDE setup

[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

Type Support For `.vue` Imports in TS (optional):

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
