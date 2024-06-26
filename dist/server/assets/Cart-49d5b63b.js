import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, p as productsStore } from "../entry-server.js";
import { useRouter } from "vue-router";
import "node:path";
import "pinia";
import "vuetify";
import "vuetify/components";
import "vuetify/directives";
const Cart_vue_vue_type_style_index_0_scoped_48492052_lang = "";
const __default__ = defineComponent({
  name: "CartView"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const store = productsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button data-v-48492052>Back to catalog</button>`);
      if (!unref(store).cart.length) {
        _push(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-48492052><h1 data-v-48492052>Empty Cart ...</h1></div>`);
      } else {
        _push(`<div class="cart-items" data-v-48492052><!--[-->`);
        ssrRenderList(unref(store).cart, (item) => {
          _push(`<div class="cart-item" data-v-48492052><div class="item-details" data-v-48492052><img${ssrRenderAttr("src", item.thumbnail)} alt="" data-v-48492052><span data-v-48492052>Brand: ${ssrInterpolate(item.brand)}</span><span data-v-48492052>Category: ${ssrInterpolate(item.category)}</span><span data-v-48492052>Price: $${ssrInterpolate(item.price)}</span><button data-v-48492052>Remove</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48492052"]]);
export {
  Cart as default
};
