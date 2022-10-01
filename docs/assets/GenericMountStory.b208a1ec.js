import { X as defineAsyncComponent, Y as useDark, Z as useToggle, _ as markRaw, R as reactive, d as defineComponent, k as ref, $ as watchEffect, o as openBlock, c as createBlock, m as mergeProps, a0 as resolveDynamicComponent, q as createCommentVNode } from './vendor.4da1c531.js';

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/vuic/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
    // @ts-ignore
    if (!true || !deps || deps.length === 0) {
        return baseModule();
    }
    return Promise.all(deps.map((dep) => {
        // @ts-ignore
        dep = assetsURL(dep);
        // @ts-ignore
        if (dep in seen)
            return;
        // @ts-ignore
        seen[dep] = true;
        const isCss = dep.endsWith('.css');
        const cssSelector = isCss ? '[rel="stylesheet"]' : '';
        // @ts-ignore check if the file is already preloaded by SSR markup
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
            return;
        }
        // @ts-ignore
        const link = document.createElement('link');
        // @ts-ignore
        link.rel = isCss ? 'stylesheet' : scriptRel;
        if (!isCss) {
            link.as = 'script';
            link.crossOrigin = '';
        }
        link.href = dep;
        // @ts-ignore
        document.head.appendChild(link);
        if (isCss) {
            return new Promise((res, rej) => {
                link.addEventListener('load', res);
                link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
            });
        }
    })).then(() => baseModule());
};

const Comp1 = {"title":"Roadmap","icon":"carbon:checkbox-checked","group":"more","docsOnly":true,"variants":[]};

const Comp2 = {"title":"Getting Started","icon":"carbon:text-align-justify","group":"introduction","docsOnly":true,"variants":[]};

const Comp3 = {"title":"Installation","icon":"carbon:arrow-shift-down","group":"introduction","docsOnly":true,"variants":[]};

const Comp4 = {"title":"Config","icon":"carbon:settings","group":"configuration","docsOnly":true,"variants":[]};

const Comp5 = {"title":"Settings","icon":"carbon:settings-adjust","group":"configuration","docsOnly":true,"variants":[]};

const Comp6 = {"title":"Theme","icon":"carbon:color-palette","group":"configuration","docsOnly":true,"variants":[]};

const Comp0 = defineAsyncComponent(() => __vitePreload(() => import('./Button.story.79349e82.js'),true?["assets/Button.story.79349e82.js","assets/vendor.4da1c531.js"]:void 0));
let files = [{"id":"src-components-button-button-story-vue","path":["Button"],"filePath":"src/components/Button/Button.story.vue","story":{"id":"src-components-button-button-story-vue","title":"Button","group":"components","layout":{"type":"grid","width":"100%"},"icon":null,"iconColor":null,"docsOnly":false,"variants":[{"id":"src-components-button-button-story-vue-0","title":"Default","icon":null,"iconColor":null},{"id":"src-components-button-button-story-vue-1","title":"Primary","icon":null,"iconColor":null},{"id":"src-components-button-button-story-vue-2","title":"Primary, Large","icon":null,"iconColor":null}]},"supportPluginId":"vue3","index":0, component: Comp0},
{"id":"src-stories-more-roadmap-story-js","path":["Roadmap"],"filePath":"src/stories/more/Roadmap.story.js","story":{"id":"src-stories-more-roadmap-story-js","title":"Roadmap","group":"more","layout":{"type":"single","iframe":true},"icon":"carbon:checkbox-checked","docsOnly":true,"variants":[]},"supportPluginId":"vanilla","index":1, component: Comp1},
{"id":"src-stories-introduction-gettingstarted-story-js","path":["Getting Started"],"filePath":"src/stories/introduction/GettingStarted.story.js","story":{"id":"src-stories-introduction-gettingstarted-story-js","title":"Getting Started","group":"introduction","layout":{"type":"single","iframe":true},"icon":"carbon:text-align-justify","docsOnly":true,"variants":[]},"supportPluginId":"vanilla","index":2, component: Comp2},
{"id":"src-stories-introduction-installation-story-js","path":["Installation"],"filePath":"src/stories/introduction/Installation.story.js","story":{"id":"src-stories-introduction-installation-story-js","title":"Installation","group":"introduction","layout":{"type":"single","iframe":true},"icon":"carbon:arrow-shift-down","docsOnly":true,"variants":[]},"supportPluginId":"vanilla","index":3, component: Comp3},
{"id":"src-stories-configuration-config-story-js","path":["Config"],"filePath":"src/stories/configuration/Config.story.js","story":{"id":"src-stories-configuration-config-story-js","title":"Config","group":"configuration","layout":{"type":"single","iframe":true},"icon":"carbon:settings","docsOnly":true,"variants":[]},"supportPluginId":"vanilla","index":4, component: Comp4},
{"id":"src-stories-configuration-settings-story-js","path":["Settings"],"filePath":"src/stories/configuration/Settings.story.js","story":{"id":"src-stories-configuration-settings-story-js","title":"Settings","group":"configuration","layout":{"type":"single","iframe":true},"icon":"carbon:settings-adjust","docsOnly":true,"variants":[]},"supportPluginId":"vanilla","index":5, component: Comp5},
{"id":"src-stories-configuration-theme-story-js","path":["Theme"],"filePath":"src/stories/configuration/Theme.story.js","story":{"id":"src-stories-configuration-theme-story-js","title":"Theme","group":"configuration","layout":{"type":"single","iframe":true},"icon":"carbon:color-palette","docsOnly":true,"variants":[]},"supportPluginId":"vanilla","index":6, component: Comp6}];
let tree = [{"group":true,"id":"introduction","title":"Introduction","children":[{"title":"Getting Started","index":2},{"title":"Installation","index":3}]},{"group":true,"id":"configuration","title":"Configuration","children":[{"title":"Config","index":4},{"title":"Settings","index":5},{"title":"Theme","index":6}]},{"group":true,"id":"components","title":"Components","children":[{"title":"Button","index":0}]},{"group":true,"id":"more","title":"More","children":[{"title":"Roadmap","index":1}]}];

const config = {"plugins":[{"name":"builtin:tailwind-tokens"},{"name":"builtin:vanilla-support","supportPlugin":{"id":"vanilla","moduleName":"/Users/eugenevolynko/Projects/vuic/node_modules/histoire/dist/node/builtin-plugins/vanilla-support","setupFn":"setupVanilla"}},{"name":"@histoire/plugin-vue","supportPlugin":{"id":"vue3","moduleName":"@histoire/plugin-vue","setupFn":"setupVue3","importStoriesPrepend":"import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'"}}],"outDir":"/Users/eugenevolynko/Projects/vuic/docs","storyMatch":["**/*.story.vue","**/*.story.svelte"],"storyIgnored":["**/node_modules/**","**/dist/**"],"supportMatch":[{"id":"vanilla","patterns":["**/*.js"],"pluginIds":["vanilla"]},{"id":"vue","patterns":["**/*.vue"],"pluginIds":["vue3"]}],"tree":{"file":"title","order":"asc","groups":[{"id":"introduction","title":"Introduction"},{"id":"configuration","title":"Configuration"},{"id":"components","title":"Components"},{"id":"more","title":"More"}]},"theme":{"title":"Vuic - Components","colors":{"primary":{"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"},"gray":{"50":"#fafafa","100":"#f4f4f5","200":"#e4e4e7","300":"#d4d4d8","400":"#a1a1aa","500":"#71717a","600":"#52525b","700":"#3f3f46","750":"#323238","800":"#27272a","850":"#1f1f21","900":"#18181b","950":"#101012"}}},"responsivePresets":[{"label":"Mobile (Small)","width":320,"height":560},{"label":"Mobile (Medium)","width":360,"height":640},{"label":"Mobile (Large)","width":414,"height":896},{"label":"Tablet","width":768,"height":1024},{"label":"Laptop (Small)","width":1024,"height":null},{"label":"Laptop (Large)","width":1366,"height":null},{"label":"Desktop","width":1920,"height":null},{"label":"4K","width":3840,"height":null}],"backgroundPresets":[{"label":"Transparent","color":"transparent"},{"label":"White","color":"#fff"},{"label":"Light gray","color":"#aaa"},{"label":"Dark gray","color":"#333"},{"label":"Black","color":"#000"}],"sandboxDarkClass":"dark","routerMode":"hash","viteIgnorePlugins":[]};
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
          'vanilla': () => __vitePreload(() => import('./vendor.4da1c531.js').then(n => n.aD),true?[]:void 0),
  'vue3': () => __vitePreload(() => import('./vendor.4da1c531.js').then(n => n.aE),true?[]:void 0)
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

export { __vitePreload as _, tree as a, _sfc_main as b, customLogos as c, clientSupportPlugins as d, files as f, histoireConfig as h, isDark as i, mapFile as m, toggleDark as t };
