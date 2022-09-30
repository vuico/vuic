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
      default: "default",
    },
    size: {
      type: String,
      required: false,
      default: "default",
    },
  },
};
</script>

<template>
  <button
    :class="{
      button: true,
      'button--primary': variant === 'primary',
      'button--large': size === 'large',
      'button--nobg': variant === 'nobg',
    }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
