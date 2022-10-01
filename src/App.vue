<script lang="ts" setup>
import Button from "@/components/Button/Button.vue";
import { state, setTheme } from "./index";

const toggleTheme = () => {
  setTheme(state.settings.theme === "light" ? "dark" : "light");
};
</script>

<template>
  <h1>Vuic</h1>
  <Button @click="toggleTheme">Toggle Theme</Button>
  <Button variant="primary" @click="toggleTheme">Toggle Theme</Button>
</template>

<script lang="ts">
export default {
  components: {
    Button,
  },
};
</script>
