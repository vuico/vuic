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

| Prop    | Type                             | Default value |
| ------- | -------------------------------- | ------------- |
| variant | "default" or "primary" or "nobg" | "default"     |
| size    | "default" or "large"             | "default"     |

- Margin Props
</docs>
