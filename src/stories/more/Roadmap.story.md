---
group: "more"
title: "Roadmap"
icon: "carbon:checkbox-checked"
---

# Roadmap

### TODO

- Histoire: Use VuicPlugin
- Option to register components globally
- Theme config
- Margin, padding props for button (mb using mixines)
- License
- Tabs component
- Icon component
- Tailwind
- Better (more universal way) to apply defaultConfig:

```typescript
const createVuic = (config?: Config): Config => {
  const newConfig: Config = {
    theme: {
      color: {
        bg: config?.theme?.color?.bg || defaultConfig.theme?.color?.bg,
        card: config?.theme?.color?.card || defaultConfig.theme?.color?.card,
        border:
          config?.theme?.color?.border || defaultConfig.theme?.color?.border,
        primary:
          config?.theme?.color?.primary || defaultConfig.theme?.color?.primary,
        //
        text: config?.theme?.color?.text || defaultConfig.theme?.color?.text,
      },
    },
    defaultSettings: {
      theme:
        config?.defaultSettings?.theme || defaultConfig.defaultSettings?.theme,
    },
  };

  store.setTheme(newConfig.defaultSettings?.theme || "light");

  return newConfig;
};
```

### DONE

- Plugin
