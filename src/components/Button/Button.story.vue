<script lang="ts" setup>
import Button from "./Button.vue";
</script>

<template>
  <Story title="Button" :layout="{ type: 'grid', width: '100%' }" group="atoms">
    <Variant title="Outlined, Black">
      <Button>Button</Button>
    </Variant>
    <Variant title="Oulined, Orange">
      <Button color="orange">Button</Button>
    </Variant>
    <Variant title="Filled, Orange">
      <Button variant="filled" color="orange">Button</Button>
    </Variant>
    <Variant title="Filled, Purple">
      <Button variant="filled" color="purple">Button</Button>
    </Variant>
  </Story>
</template>
