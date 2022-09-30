<script lang="ts" setup>
import Input from "./Input.vue";
</script>

<template>
  <Story
    title="Input"
    :layout="{ type: 'grid', width: '100%' }"
    group="components"
  >
    <Variant title="Default">
      <Input placeholder="Placeholder" />
    </Variant>
  </Story>
</template>
