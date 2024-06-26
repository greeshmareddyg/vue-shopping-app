import { basename } from "node:path";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, renderToString } from "vue/server-renderer";
import { useSSRContext, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, defineComponent, mergeProps, ref, onMounted, openBlock, createBlock, Fragment, renderList, createSSRApp } from "vue";
import { defineStore, createPinia } from "pinia";
import { useRouter, createRouter, createMemoryHistory } from "vue-router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const styles = "";
const productsStore = defineStore("products", {
  state: () => ({
    products: [],
    cart: []
  }),
  actions: {
    async fetchProductsFromAPI() {
      await fetch("https://dummyjson.com/products").then((res) => res.json()).then((json) => {
        this.products = json.products;
      }).catch((error) => {
        console.log("error:", error);
      });
      console.log("api called");
      console.log("response", this.products);
    },
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(id) {
      console.log("product ID", id);
      this.cart = this.cart.filter((item) => item.id !== id);
    }
  }
});
const App_vue_vue_type_style_index_0_scoped_ee014af4_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const router2 = useRouter();
    const store = productsStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[--><header data-v-ee014af4>`);
      _push(ssrRenderComponent(_component_v_toolbar, { title: "Application" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: ($event) => unref(router2).push({ name: "CartView" }),
              color: "primary",
              variant: "elevated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Items in Cart: ${ssrInterpolate(unref(store).cart.length)}`);
                } else {
                  return [
                    createTextVNode("Items in Cart: " + toDisplayString(unref(store).cart.length), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                onClick: ($event) => unref(router2).push({ name: "CartView" }),
                color: "primary",
                variant: "elevated"
              }, {
                default: withCtx(() => [
                  createTextVNode("Items in Cart: " + toDisplayString(unref(store).cart.length), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><main data-v-ee014af4>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ee014af4"]]);
const __default__$1 = defineComponent({
  name: "ProductItem"
});
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  emits: ["item-clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const goToProductPage = (productId) => {
      emit("item-clicked", productId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_sheet, mergeProps({ class: "ma-2 pa-2" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, { class: "product" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_img, {
                    src: props.productData.thumbnail,
                    height: "200px",
                    cover: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.productData.brand)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.productData.brand), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_subtitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` $ ${ssrInterpolate(props.productData.price)}`);
                      } else {
                        return [
                          createTextVNode(" $ " + toDisplayString(props.productData.price), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.productData.description)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.productData.description), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => goToProductPage(props.productData.id)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Add to cart `);
                            } else {
                              return [
                                createTextVNode(" Add to cart ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            onClick: ($event) => goToProductPage(props.productData.id)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add to cart ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_img, {
                      src: props.productData.thumbnail,
                      height: "200px",
                      cover: ""
                    }, null, 8, ["src"]),
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.productData.brand), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(" $ " + toDisplayString(props.productData.price), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.productData.description), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          onClick: ($event) => goToProductPage(props.productData.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add to cart ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, { class: "product" }, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    src: props.productData.thumbnail,
                    height: "200px",
                    cover: ""
                  }, null, 8, ["src"]),
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.productData.brand), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_subtitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" $ " + toDisplayString(props.productData.price), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.productData.description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        onClick: ($event) => goToProductPage(props.productData.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Add to cart ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ProductItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = defineComponent({
  name: "CatalogView",
  components: {
    ProductItem: _sfc_main$1
  }
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const store = productsStore();
    const router2 = useRouter();
    ref("");
    const goToProductPage = (id) => {
      router2.push({ name: "ProductView", params: { id } });
    };
    onMounted(async () => {
      await store.fetchProductsFromAPI();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-list" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        clearable: "",
        label: "Label",
        "prepend-icon": "$vuetify"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(store).products, (product) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: product.id,
                cols: "12",
                sm: "4",
                onClick: ($event) => goToProductPage(product.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      "product-data": product,
                      onItemClicked: goToProductPage
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$1, {
                        "product-data": product,
                        onItemClicked: goToProductPage
                      }, null, 8, ["product-data"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(store).products, (product) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: product.id,
                  cols: "12",
                  sm: "4",
                  onClick: ($event) => goToProductPage(product.id)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$1, {
                      "product-data": product,
                      onItemClicked: goToProductPage
                    }, null, 8, ["product-data"])
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Catalog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const router = createRouter({
  history: createMemoryHistory("/"),
  routes: [
    {
      path: "/",
      name: "Catalog",
      component: _sfc_main
    },
    {
      path: "/product/:id",
      name: "ProductView",
      //chunks
      component: () => import("./assets/ProductDetail-5adf3b59.js")
    },
    {
      path: "/cart",
      name: "CartView",
      component: () => import("./assets/Cart-49d5b63b.js")
    },
    {
      path: "/home",
      name: "HomeView",
      component: () => import("./assets/Home-90f77a6f.js")
    }
  ]
});
const main = "";
function createApp() {
  const app = createSSRApp(App);
  const vuetify = createVuetify({
    components,
    directives
  });
  app.use(createPinia());
  app.use(router);
  app.use(vuetify);
  return { app, router };
}
async function render(url, manifest) {
  const { app, router: router2 } = createApp();
  await router2.push(url);
  await router2.isReady();
  const ctx = {};
  const html = await renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
export {
  _export_sfc as _,
  productsStore as p,
  render
};
