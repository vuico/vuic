import { aq as defineComponent, ar as openBlock, as as createElementBlock, av as resolveComponent, aw as createBlock, ax as withCtx, ay as createVNode } from "./vendor.4da1c531.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const Input_vue_vue_type_style_index_0_scoped_d890ad85_lang = "";
const __default__ = {
  name: "Input"
};
const _sfc_main$1 = defineComponent({
  ...__default__,
  props: {
    placeholder: { type: String, required: false, default: "" },
    value: { type: String, required: false, default: "" },
    onChange: { type: Function, required: false }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["value", "placeholder"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    type: "text",
    class: "input",
    value: $props.value,
    onChange: _cache[0] || (_cache[0] = (...args) => $setup.props.onChange && $setup.props.onChange(...args)),
    placeholder: $props.placeholder
  }, null, 40, _hoisted_1);
}
_sfc_main$1.__file = "src/components/Input/Input.vue";
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-d890ad85"], ["__file", "/Users/eugenevolynko/Projects/vuic/src/components/Input/Input.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Input };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Input",
    layout: { type: "grid", width: "100%" },
    group: "atoms"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["Input"], { placeholder: "Placeholder" })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/Input/Input.story.vue";
const Input_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/eugenevolynko/Projects/vuic/src/components/Input/Input.story.vue"]]);
export {
  Input_story as default
};
