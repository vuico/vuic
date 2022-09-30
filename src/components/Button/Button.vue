<script lang="ts" setup>
export interface Props {
  variant?: "outlined" | "filled";
  color?: "black" | "orange" | "purple";
  onClick?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outlined",
  color: "black",
});
</script>

<template>
  <button
    :class="{
      button: true,
      [`button--${props.variant}-${props.color}`]: true,
    }"
    @click="props.onClick"
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
