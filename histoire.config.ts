// utils
import { defineConfig } from "histoire";

// plugins
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  theme: {
    title: "Vuic - Components",
  },
  outDir: "docs",
  plugins: [HstVue()],
  tree: {
    groups: [
      {
        id: "introduction",
        title: "Introduction",
      },
      {
        id: "components",
        title: "Components",
      },
    ],
  },
  routerMode: "hash",
});
