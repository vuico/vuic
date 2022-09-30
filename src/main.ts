// utils
import { createApp } from "vue";
import App from "./App.vue";

// plugins
import { createPinia } from "pinia";
import { VuicPlugin } from ".";

const app = createApp(App);

const PiniaPlugin = createPinia();

app.use(PiniaPlugin);
app.use(VuicPlugin);
app.mount("#app");
