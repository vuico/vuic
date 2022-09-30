import { Q as defineAsyncComponent, _ as __vitePreload, R as useDark, S as useToggle, U as markRaw, E as reactive, d as defineComponent, r as ref, V as watchEffect, o as openBlock, q as createBlock, W as mergeProps, X as resolveDynamicComponent, h as createCommentVNode } from "./vendor.b38c95bb.js";
const Comp2 = { "title": "Getting Started", "icon": "carbon:text-align-justify", "group": "introduction", "docsOnly": true, "variants": [] };
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./Button.story.3f667ae9.js"), true ? ["assets/Button.story.3f667ae9.js","assets/vendor.b38c95bb.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./Input.story.39a3aea1.js"), true ? ["assets/Input.story.39a3aea1.js","assets/vendor.b38c95bb.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
let files = [
  { "id": "src-components-button-button-story-vue", "path": ["Button"], "filePath": "src/components/Button/Button.story.vue", "story": { "id": "src-components-button-button-story-vue", "title": "Button", "group": "atoms", "layout": { "type": "grid", "width": "100%" }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-button-button-story-vue-0", "title": "Outlined, Black", "icon": null, "iconColor": null }, { "id": "src-components-button-button-story-vue-1", "title": "Oulined, Orange", "icon": null, "iconColor": null }, { "id": "src-components-button-button-story-vue-2", "title": "Filled, Orange", "icon": null, "iconColor": null }, { "id": "src-components-button-button-story-vue-3", "title": "Filled, Purple", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 0, component: Comp0 },
  { "id": "src-components-input-input-story-vue", "path": ["Input"], "filePath": "src/components/Input/Input.story.vue", "story": { "id": "src-components-input-input-story-vue", "title": "Input", "group": "atoms", "layout": { "type": "grid", "width": "100%" }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-input-input-story-vue-0", "title": "Default", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 1, component: Comp1 },
  { "id": "src-stories-getting-started-story-js", "path": ["Getting Started"], "filePath": "src/stories/getting-started.story.js", "story": { "id": "src-stories-getting-started-story-js", "title": "Getting Started", "group": "introduction", "layout": { "type": "single", "iframe": true }, "icon": "carbon:text-align-justify", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "index": 2, component: Comp2 }
];
let tree = [{ "group": true, "id": "introduction", "title": "Introduction", "children": [{ "title": "Getting Started", "index": 2 }] }, { "group": true, "id": "atoms", "title": "Atoms", "children": [{ "title": "Button", "index": 0 }, { "title": "Input", "index": 1 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/eugenevolynko/Projects/vuic/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" } }], "outDir": "/Users/eugenevolynko/Projects/vuic/docs", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "introduction", "title": "Introduction" }, { "id": "atoms", "title": "Atoms" }] }, "theme": { "title": "Vuic - Components", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "hash", "viteIgnorePlugins": [] };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.b38c95bb.js").then((n) => n.aJ), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor.b38c95bb.js").then((n) => n.aK), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  tree as a,
  clientSupportPlugins as b,
  customLogos as c,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  toggleDark as t
};
