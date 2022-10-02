// utils
import { defineComponent } from "vue";

export const MarginMixin = defineComponent({
  props: {
    m: Number,
    my: Number,
    mx: Number,
    mt: Number,
    mr: Number,
    mb: Number,
    ml: Number,
  },
  methods: {
    applyMargin(
      m?: number,
      my?: number,
      mx?: number,
      mt?: number,
      mr?: number,
      mb?: number,
      ml?: number,
    ) {
      return {
        marginTop: `${mt || my || m}px`,
        marginRight: `${mr || mx || m}px`,
        marginBottom: `${mb || my || m}px`,
        marginLeft: `${ml || mx || m}px`,
      };
    },
  },
});
