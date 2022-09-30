import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  outDir: "docs",
  plugins: [HstVue()],
  tree: {
    groups: [
      {
        id: "atoms",
        title: "Atoms",
      },
    ],
  },
});
