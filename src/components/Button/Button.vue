<script lang="ts" setup>
const emit = defineEmits(["click"]);
</script>

<script lang="ts">
import { MarginMixin } from "@/mixins/Margin.mixin";

export default {
  name: "Button",
  props: {
    variant: {
      type: String as () => "default" | "primary" | "nobg",
      required: false,
      default: "default",
    },
    size: {
      type: String as () => "default" | "large",
      required: false,
      default: "default",
    },
  },
  extends: MarginMixin,
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
    :style="{ ...applyMargin(m, my, mx, mt, mr, mb, ml) }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
