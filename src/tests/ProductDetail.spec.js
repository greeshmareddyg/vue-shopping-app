import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { describe, it, expect, vi } from "vitest";
import ProductDetails from "@/views/ProductDetail.vue";

vi.mock("@/stores/products", () => ({
  productsStore: vi.fn(() => ({
    products: [
      {
        id: 1,
        thumbnail: "image.jpg",
        title: "Test Product",
        brand: "Test Brand",
        description: "Test Description",
        price: 100,
        width: 20
      },
    ],
    addToCart: vi.fn(),
  })),
}));

describe("Unit test case for ProductDetails", () => {
  it("renders product details correctly", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/product/:id",
          name: "ProductDetails",
          component: ProductDetails,
        },
      ],
    });

    router.push("/product/1");
    await router.isReady();

    const wrapper = mount(ProductDetails, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find(".product-image img").attributes("src")).toBe(
      "image.jpg"
    );
    expect(wrapper.find(".product-image img").attributes("alt")).toBe(
      "Test Product"
    );

  });
});
