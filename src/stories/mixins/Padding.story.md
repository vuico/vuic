---
group: "mixins"
title: "Padding"
icon: "carbon:chemistry"
---

# Padding mixin

You can set margin for any component that implements Padding mixin, for example [Card](/vuic/#/story/src-components-card-card-story-vue).

### Props

| Prop | Type   | Required | Default value | Description                    |
| ---- | ------ | -------- | ------------- | ------------------------------ |
| p    | number | -        | undefined     | padding (px)                   |
| py   | number | -        | undefined     | paddingTop, paddingBottom (px) |
| px   | number | -        | undefined     | paddingRight, paddingLeft (px) |
| pt   | number | -        | undefined     | paddingTop (px)                |
| pr   | number | -        | undefined     | paddingRight (px)              |
| pb   | number | -        | undefined     | paddingBottom (px)             |
| pl   | number | -        | undefined     | paddingLeft (px)               |

### Priorities

1. pt, pr, pb, pl
2. py, px
3. p
