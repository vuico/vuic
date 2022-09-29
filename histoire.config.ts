import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
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
