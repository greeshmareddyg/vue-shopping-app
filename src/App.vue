<template>

  <!-- Header -->
  <header class="grid-container app-home-features">
    <div  class="header-notification column">
      <div class="header-animation">Long weekend offer 20% offer on many products and free shipping </div>
    </div>
    <div class="column c1-4-lg"></div>
    <div class="column c1-4-lg">
      <img alt="logo" class="brand-logo" :height="90" :width="90" src="./assets/greesh-logo-transparent.png" rel="preload"/>
    </div>
    <div class="column c1-4-lg cart-column">
      <button @click="router.push({ name: 'CartView' })">
        <svg height=25 width=25 fill="#5471a7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <!-- accessibility -->
        <span class="cart-visually-hidden">Cart</span>
        <span class="cart-count" v-if="store.cart.length > 0">
          {{ store.cart.length }}
        </span>
      </button>       
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


.header-animation {
  position: relative;
  animation: mymove 3s;
  animation-iteration-count: infinite;
}

@keyframes mymove {
  from {top: 20px;}
  to {top: 0px;}
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

.cart-column {
  align-items: center;
}


.cart-visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0); 
  clip-path: inset(100%); 
  height: 1px; 
  overflow: hidden; 
  position: absolute; 
  white-space: nowrap; 
  width: 1px; 
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
