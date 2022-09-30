<script lang="ts" setup>
import { ButtonProps } from "./Button.props";

defineProps({
  ...ButtonProps,
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    :class="{
      button: true,
      [`button--${variant}-${color}`]: true,
    }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
