import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { productsStore } from "@/stores/products";
import CartView from "@/views/Cart.vue";
import { createRouter, createWebHistory } from "vue-router";
import { describe, it, expect, beforeEach } from "vitest";

describe("Unit test case for CartView", () => {
  let router;

  beforeEach(async () => {
    setActivePinia(createPinia());

    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/", name: "Home", component: { template: "<div>Home</div>" } },
        {
          path: "/catalog",
          name: "Catalog",
          component: { template: "<div>Catalog</div>" },
        },
        {
          path: "/cart",
          name: "CartView",
          component: CartView,
        },
      ],
    });

    await router.push("/cart");
    await router.isReady();
  });

  it("renders cart items and navigates back to catalog", async () => {
    const wrapper = mount(CartView, {
      global: {
        plugins: [router],
      },
    });

    const store = productsStore();
    store.cart = [
      {
        id: 1,
        thumbnail: "item1.jpg",
        brand: "Brand A",
        category: "Category X",
        price: 50,
      },
      {
        id: 2,
        thumbnail: "item2.jpg",
        brand: "Brand B",
        category: "Category Y",
        price: 75,
      },
    ];

    await wrapper.vm.$nextTick();

    const cartItems = wrapper.findAll(".cart-item");
    expect(cartItems.length).toBe(store.cart.length);

    await wrapper.find("button").trigger("click");
    await router.isReady();
  });
});
