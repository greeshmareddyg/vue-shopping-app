import { defineComponent, computed, resolveComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, p as productsStore } from "../entry-server.js";
import { useRouter, useRoute } from "vue-router";
import "node:path";
import "pinia";
import "vuetify";
import "vuetify/components";
import "vuetify/directives";
const ProductDetail_vue_vue_type_style_index_0_scoped_a3a43272_lang = "";
const __default__ = defineComponent({
  name: "ProductDetails"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const store = productsStore();
    const router = useRouter();
    const route = useRoute();
    const selectedProduct = computed(() => {
      return store.products.find((item) => item.id === Number(route.params.id));
    });
    const addToCart = () => {
      store.addToCart(selectedProduct.value);
      router.push({ name: "CartView" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: ($event) => unref(router).push({ name: "Catalog" }),
        color: "primary",
        variant: "elevated"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to catalog `);
          } else {
            return [
              createTextVNode(" Back to catalog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="product" data-v-a3a43272><div class="product-image" data-v-a3a43272><img${ssrRenderAttr("src", selectedProduct.value.thumbnail)} alt="" data-v-a3a43272></div><div class="product-details" data-v-a3a43272><p data-v-a3a43272>Brand: ${ssrInterpolate(selectedProduct.value.brand)}</p><p data-v-a3a43272>Description: ${ssrInterpolate(selectedProduct.value.description)}</p><h2 data-v-a3a43272>Price: $${ssrInterpolate(selectedProduct.value.price)}</h2>`);
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "elevated",
        color: "indigo-lighten-3",
        onClick: addToCart
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Add to cart`);
          } else {
            return [
              createTextVNode("Add to cart")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ProductDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3a43272"]]);
export {
  ProductDetail as default
};
