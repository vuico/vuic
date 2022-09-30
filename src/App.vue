<script lang="ts" setup>
import Button from "@/components/Button/Button.vue";
import Input from "./components/Input/Input.vue";
</script>

<template>
  <h1>Vuic</h1>
  <Button variant="filled" color="orange">Button</Button>
  <Input value="Value" />
</template>

<script lang="ts">
export default {
  components: {
    Button,
    Input,
  },
};
</script>
