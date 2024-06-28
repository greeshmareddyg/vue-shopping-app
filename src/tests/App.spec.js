import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { productsStore } from "@/stores/products";
import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { describe, it, expect, beforeEach } from "vitest";

describe("Unit test case for App", () => {
  let router;

  beforeEach(async () => {
    setActivePinia(createPinia());

    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/", name: "Home", component: { template: "<div>Home</div>" } },
        {
          path: "/cart",
          name: "CartView",
          component: { template: "<div>CartView</div>" },
        },
      ],
    });

    router.push("/");
    await router.isReady();
  });

  it("renders header and navigation links correctly", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    const store = productsStore();
    store.cart = [];

    expect(wrapper.find(".header-notification").text()).toContain(
      "Long weekend offer"
    );

    const logoImg = wrapper.find(".brand-logo");
    expect(logoImg.exists()).toBe(true);
    expect(logoImg.attributes("src")).toBe(
      "/src/assets/greesh-logo-transparent.png"
    );
    expect(logoImg.attributes("alt")).toBe("logo");
    expect(logoImg.attributes("height")).toBe("90");
    expect(logoImg.attributes("width")).toBe("90");

    const cartButton = wrapper.find("button");
    expect(cartButton.exists()).toBe(true);
    expect(cartButton.find(".cart-visually-hidden").text()).toBe("Cart");
    expect(cartButton.find(".cart-count").exists()).toBe(false);

    await cartButton.trigger("click");

    const navLinks = wrapper.findAll("nav .nav-column a");
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].text()).toBe("HOME");
    expect(navLinks[1].text()).toBe("SHOP");
    expect(navLinks[2].text()).toBe("CONTACT");
  });
});
