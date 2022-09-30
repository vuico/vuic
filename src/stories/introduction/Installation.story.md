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

import { VuicPlugin } from "@vuico/vuic";

app.use(VuicPlugin);
app.mount("#app");
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

4. Use Vuic plugin:

```typescript
// src/main.ts

import { VuicPlugin } from "@vuico/vuic";

app.use(VuicPlugin);
app.mount("#app");
```
