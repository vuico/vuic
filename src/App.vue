<script lang="ts" setup>
import Button from "@/components/Button/Button.vue";
import { setTheme, getTheme } from ".";

const toggleTheme = () => {
  setTheme(getTheme() === "light" ? "dark" : "light");
};
</script>

<template>
  <h1>Vuic</h1>
  <Button variant="filled" color="orange" @click="toggleTheme">Button</Button>
</template>

<script lang="ts">
export default {
  components: {
    Button,
  },
};
</script>
