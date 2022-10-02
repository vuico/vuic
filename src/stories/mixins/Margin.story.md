---
group: "mixins"
title: "Margin"
icon: "carbon:chemistry"
---

# Margin mixin

You can set margin for any component that implements Margin mixin, for example [Button](/vuic/#/story/src-components-button-button-story-vue).

### Props

| Prop | Type   | Required | Default value | Description                  |
| ---- | ------ | -------- | ------------- | ---------------------------- |
| m    | number | -        | undefined     | margin (px)                  |
| my   | number | -        | undefined     | marginTop, marginBottom (px) |
| mx   | number | -        | undefined     | marginRight, marginLeft (px) |
| mt   | number | -        | undefined     | marginTop (px)               |
| mr   | number | -        | undefined     | marginRight (px)             |
| mb   | number | -        | undefined     | marginBottom (px)            |
| ml   | number | -        | undefined     | marginLeft (px)              |

### Priorities

1. mt, mr, mb, ml
2. my, mx
3. m
