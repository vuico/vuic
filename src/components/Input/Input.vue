<script lang="ts" setup>
import { InputProps } from "./Input.props";

defineProps({
  ...InputProps,
});

const emit = defineEmits(["change"]);
</script>

<template>
  <input
    type="text"
    class="input"
    :value="value"
    :placeholder="placeholder"
    @change="emit('change')"
  />
</template>

<script lang="ts">
export default {
  name: "Input",
};
</script>

<style lang="scss" scoped>
@import "./Input.scss";
</style>
