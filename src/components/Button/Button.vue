<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<script lang="ts">
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      required: false,
      default: "outlined",
    },
    color: {
      type: String,
      required: false,
      default: "black",
    },
  },
};
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

<style lang="scss" scoped>
@import "./Button.scss";
</style>
