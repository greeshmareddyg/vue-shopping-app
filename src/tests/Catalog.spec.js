import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CatalogView from "@/views/Catalog.vue";
import { productsStore } from "@/stores/products";
import { setActivePinia, createPinia } from "pinia";

const routes = [{ path: "/product/:id", name: "ProductView" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe("Unit test case for CatalogView", () => {
  let store;

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    store = productsStore();
    store.$state.products = [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
      { id: 3, title: "Product 3" },
    ];
    store.$state.searchText = "";
    store.$state.filteredProductsData = store.$state.products;
  });

  it("filters products based on search text", async () => {
    const setSearch = vi.fn();
    const wrapper = mount(CatalogView, {
      global: {
        plugins: [router, setSearch, createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const input = wrapper.find("v-text-field");
    expect(input.exists()).toBe(true);

    await input.trigger("update:modelValue", "Product 1");
    await wrapper.vm.$nextTick();
  });
});
