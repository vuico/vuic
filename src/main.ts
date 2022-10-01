// utils
import { createApp } from "vue";
import App from "./App.vue";

// plugins
import { VuicPlugin } from ".";

const app = createApp(App);

app.use(VuicPlugin, {
  defaultSettings: {
    theme: "dark",
  },
});
app.mount("#app");
