<script lang="ts" setup>
import Card from "./Card.vue";
</script>

<template>
  <Story
    title="Card"
    :layout="{ type: 'grid', width: '100%' }"
    group="components"
  >
    <Variant title="Default">
      <Card :m="40" :p="100">Card</Card>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Card

### Import

```typescript
import { Card } from "@vuico/vuic";
```

### Props

| Prop    | Type                | Required | Default value | Description      |
| ------- | ------------------- | -------- | ------------- | ---------------- |
| variant | "default" or "nobg" | -        | "default"     | Look of the card |

### Implements

- [Margin mixin](/vuic/#/story/src-stories-mixins-margin-story-js)
- [Padding mixin](/vuic/#/story/src-stories-mixins-margin-story-js)

Defaults:

```typescript
{
  p: 24;
}
```
</docs>
