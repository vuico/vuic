import { aq as defineComponent, ar as openBlock, as as createElementBlock, at as renderSlot, au as normalizeClass, av as resolveComponent, aw as createBlock, ax as withCtx, ay as createVNode, az as createTextVNode } from './vendor.4da1c531.js';

const Button_vue_vue_type_style_index_0_scoped_ceff2a60_lang = '';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const __default__ = {
  name: "Button",
  props: {
    variant: {
      type: String,
      required: false,
      default: "default"
    },
    size: {
      type: String,
      required: false,
      default: "default"
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  emits: ["click"],
  setup(__props, { expose, emit }) {
    expose();
    const __returned__ = { emit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass({
      button: true,
      "button--primary": $props.variant === "primary",
      "button--large": $props.size === "large",
      "button--nobg": $props.variant === "nobg"
    }),
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("click"))
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
_sfc_main$1.__file = 'src/components/Button/Button.vue';
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ceff2a60"], ["__file", "/Users/eugenevolynko/Projects/vuic/src/components/Button/Button.vue"]]);

const block0 = Comp => {
        Comp.doc = "<h1 id=\"button\" tabindex=\"-1\">Button <a class=\"header-anchor\" href=\"#button\" aria-hidden=\"true\">#</a></h1>\n<p>Checkout this <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"_blank\">cool video</a>!</p>\n";
      };

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Button };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: "100%" },
    group: "components"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], null, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Primary" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], { variant: "primary" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Primary, Large" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            variant: "primary",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = 'src/components/Button/Button.story.vue';
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/eugenevolynko/Projects/vuic/src/components/Button/Button.story.vue"]]);

export { Button_story as default };
