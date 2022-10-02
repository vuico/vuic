import { defineSetupVue3 } from "@histoire/plugin-vue";
import { VuicPlugin } from ".";

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(VuicPlugin);
});
