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
    <Variant title="Outlined, Black">
      <Button @click="hstEvent('Click', $event)">Button</Button>
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

<docs lang="md">
# Button

Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
