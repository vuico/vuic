<script lang="ts" setup>
import Button from "./Button.vue";
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

### Import

```typescript
import { Button } from "@vuico/vuic";
```

### Props

| Prop    | Type                             | Required | Default value | Description        |
| ------- | -------------------------------- | -------- | ------------- | ------------------ |
| variant | "default" or "primary" or "nobg" | -        | "default"     | Look of the button |
| size    | "default" or "large"             | -        | "default"     | Size of the button |

### Events

| Event  | Type       | Required | Description           |
| ------ | ---------- | -------- | --------------------- |
| @click | () => void | -        | Fires on button click |

### Implements

- [Margin mixin](/vuic/#/story/src-stories-mixins-margin-story-js)
</docs>
