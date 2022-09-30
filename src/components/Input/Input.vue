<script lang="ts" setup>
export interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (value: Event) => void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
  value: "",
});
</script>

<template>
  <input
    type="text"
    class="input"
    :value="props.value"
    @change="props.onChange"
    :placeholder="placeholder"
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
