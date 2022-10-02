<script lang="ts">
import { MarginMixin } from "@/mixins/Margin.mixin";
import { PaddingMixin } from "@/mixins/Padding.mixin";

export default {
  name: "Card",
  props: {
    variant: {
      type: String as () => "default" | "nobg",
      required: false,
      default: "default",
    },
  },
  extends: MarginMixin,
};
</script>

<template>
  <div
    :class="{
      'vuic-card': true,
      'vuic-card--nobg': variant === 'nobg',
    }"
    :style="{ ...applyMargin(m, my, mx, mt, mr, mb, ml) }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "./Card.scss";
</style>
