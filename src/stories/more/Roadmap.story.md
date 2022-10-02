---
group: "more"
title: "Roadmap"
icon: "carbon:checkbox-checked"
---

# Roadmap

### TODO

Bugs:

- `BUG` Styles are broken if pass theme.color to the VuicConfig:

```typescript
app.use(VuicPlugin, {
  theme: {
    color: {
      // broken
      primary: { dark: "#654321", light: "#654321" },
    },
    fontSize: {
      // works
      default: 20,
    },
  },
  defaultSettings: {
    theme: "dark",
  },
});
```

Docs:

- `DOCS` Store documentation inside Settings (state, setTheme)
- `DOCS` README
- `DOCS` License
- `DOCS` Histoire theme (logo, colors, favicon)

Refactor:

- `REFACTOR` Exported generic component types

Features:

- `FEATURE` Typization for VuicConfig (replace app.use(VuicPlugin, VuicConfig) by vuic = createVuic(VuicConfig); app.use(vuic))
- `FEATURE` theme prop for Button ("light" | "dark"), by default use value from settings
- `FEATURE` Option to register components globally
- `FEATURE` Margin, padding props for button (mb using mixines)
- (+) Margin
- (-) Padding
- (-) Docs page
- `FEATURE` Icon component
- `FEATURE` Fab component
- `FEATURE` Tailwind

### DONE

- `BUG` Histoire: Use VuicPlugin (no styles)
- `REFACTOR` Better (more universal way) to apply defaultConfig
- `FEATURE` Theme config
- `FEATURE` Plugin for Vue
