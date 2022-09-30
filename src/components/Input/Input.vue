<script lang="ts" setup>
const emit = defineEmits(["change"]);
</script>

<script lang="ts">
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
  },
};
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

<style lang="scss" scoped>
@import "./Input.scss";
</style>
