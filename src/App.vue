<template>

  <!-- Header -->
  <header>
    <div class="header-notification">Long weekend offer 20% offer and freeshipping</div>
      <div class="grid-container">
        <div class="column c1-2-md c1-4-lg"></div>
        <div class="column c1-2-md c1-4-lg">
          <img alt="logo" class="brand-logo" :height="90" :width="90" src="./assets/greesh-logo-transparent.png" rel="preload"/>
        </div>
        <div class="column c1-2-md c1-4-lg">
          <button @click="router.push({ name: 'CartView' })">
            Cart
            <span class="cart-count" v-if="store.cart.length > 0">
              {{ store.cart.length }}
            </span>
          </button> 
        </div>
    </div>
  </header>

  <!-- Navbar with routes -->

  <nav class="grid-container app-navigation">
    <div class="column c1-4-lg"></div>
    <div class="column c1-4-lg nav-column">
      <router-link to="/"> HOME </router-link>
      <router-link to="/catalog">SHOP</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
    <div class="column c1-4-lg"></div>
  </nav>

  <!-- Main router-view -->
  <main>
    <RouterView />
    <footer> 
      <p> Copyright © 2024 Greeshma Reddy.</p>   
    </footer>
  </main>

</template>

<script setup>
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";

  const router = useRouter()
  const store = productsStore()
</script>


<style scoped>

.nav-column {
  border-bottom: 1px solid #ffd700;
}
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}

.app-navigation {
    height: 30px;
    text-align: center;
    color: #5471a7;
}

.app-profile-button {
    border: none;
    background: none;
    width: 20%;
    /* padding-right: 1.5rem; */
}

.app-profile-button {
    padding: 10px;

}
.app-profile-button:hover {
    background-color: #E4EBF6;
}

a, a:visited {
  font-weight: 500;
  color: black;
  text-decoration: none;
  padding: 10px;
}

.router-link-exact-active {
    background-color: #E4EBF6;
}

a:active, a:hover {
    background-color: #E4EBF6;
    border-radius: 4px;
}




.cart-count {
  transform: translateY(50%);
}

footer {
  margin-top: 3rem;
  width: 100%;
  text-align: center;
  border-top: 2px solid #ffd700;
  bottom: 0;
  padding: 1rem;
 } 
</style>
