// utils
import { defineComponent } from "vue";

export const PaddingMixin = defineComponent({
  props: {
    p: Number,
    py: Number,
    px: Number,
    pt: Number,
    pr: Number,
    pb: Number,
    pl: Number,
  },
  methods: {
    applyPadding(
      p?: number,
      py?: number,
      px?: number,
      pt?: number,
      pr?: number,
      pb?: number,
      pl?: number,
    ) {
      return {
        paddingTop: `${pt || py || p}px`,
        paddingRight: `${pr || px || p}px`,
        paddingBottom: `${pb || py || p}px`,
        paddingLeft: `${pl || px || p}px`,
      };
    },
  },
});
