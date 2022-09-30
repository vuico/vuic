<script lang="ts" setup>
import Button from "./Button.vue";
import { hstEvent } from "histoire/client";
</script>

<template>
  <Story
    title="Button"
    :layout="{ type: 'grid', width: '100%' }"
    group="components"
  >
    <Variant title="Default">
      <Button>Button</Button>
    </Variant>
    <Variant title="Primary">
      <Button variant="primary">Button</Button>
    </Variant>
    <Variant title="Primary, Large">
      <Button variant="primary" size="large">Button</Button>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Button

Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
