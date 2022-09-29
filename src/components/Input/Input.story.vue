<script lang="ts" setup>
import Input from "./Input.vue";
</script>

<template>
  <Story title="Input" :layout="{ type: 'grid', width: '100%' }" group="atoms">
    <Variant title="Default">
      <Input placeholder="Placeholder" />
    </Variant>
  </Story>
</template>
