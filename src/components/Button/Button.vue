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
      'vuic-button': true,
      'vuic-button--primary': variant === 'primary',
      'vuic-button--large': size === 'large',
      'vuic-button--nobg': variant === 'nobg',
    }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
