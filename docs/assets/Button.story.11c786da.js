import { aq as defineComponent, ar as openBlock, as as createElementBlock, at as renderSlot, au as normalizeClass, av as resolveComponent, aw as createBlock, ax as withCtx, ay as createVNode, az as createTextVNode } from "./vendor.4da1c531.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const Button_vue_vue_type_style_index_0_scoped_ceff2a60_lang = "";
const __default__ = {
  name: "Button"
};
const _sfc_main$1 = defineComponent({
  ...__default__,
  props: {
    variant: { type: String, required: false, default: "outlined" },
    color: { type: String, required: false, default: "black" },
    onClick: { type: Function, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass({
      button: true,
      [`button--${$setup.props.variant}-${$setup.props.color}`]: true
    }),
    onClick: _cache[0] || (_cache[0] = (...args) => $props.onClick && $props.onClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
_sfc_main$1.__file = "src/components/Button/Button.vue";
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ceff2a60"], ["__file", "/Users/eugenevolynko/Projects/vuic/src/components/Button/Button.vue"]]);
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
    group: "atoms"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Outlined, Black" }, {
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
      createVNode(_component_Variant, { title: "Oulined, Orange" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], { color: "orange" }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Filled, Orange" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            variant: "filled",
            color: "orange"
          }, {
            default: withCtx(() => [
              createTextVNode("Button")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Filled, Purple" }, {
        default: withCtx(() => [
          createVNode($setup["Button"], {
            variant: "filled",
            color: "purple"
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
_sfc_main.__file = "src/components/Button/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/eugenevolynko/Projects/vuic/src/components/Button/Button.story.vue"]]);
export {
  Button_story as default
};
