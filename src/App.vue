<script lang="ts" setup>
import Button from "@/components/Button/Button.vue";
import { state, setTheme } from "./index";

const toggleTheme = () => {
  setTheme(state.settings.theme === "light" ? "dark" : "light");
};
</script>

<template>
  <h1>Vuic</h1>
  <Button :mb="16">Button</Button>
  <Button variant="primary" :mb="16">Button</Button>
  <Button variant="primary" size="large" @click="toggleTheme">
    Toggle Theme
  </Button>
</template>
