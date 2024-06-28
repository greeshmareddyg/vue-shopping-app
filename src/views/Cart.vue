<template>
  <div class="cart-view">
      <div v-if="!store.cart.length" class="grid-container" style="text-align: center">
        <div class="column" >
        <h2>Empty Cart ...</h2>
        <v-btn @click="router.push({ name: 'Catalog' })">Go to Shop</v-btn>
        </div>
      </div>
      <div class="cart-items grid-container" v-else>
        <div class="column cart-heading"> 
          <h3>Shopping Cart</h3>
           <v-divider></v-divider> 
        </div>

        <div
            class="cart-item column"
            v-for="item in store.cart"
            :key="item.id"
        >
            <div class="item-details">
            <img :src="item.thumbnail" alt="item.title" rel="preload">
            <div>
              <h4>{{ item.title }}</h4>
              <p style="color:green">stock {{  item.stock }}</p>
              <p>{{ item.shippingInformation }}</p>
            </div>
            <div>
              <p>Price: ${{ item.price }}</p>
              <p><button @click="removeFromCart(item.id)">Remove</button></p>
              
            </div>
            
            <!-- <span> {{ item.title }}</span>
            <span>Brand: {{ item.brand }}</span>
            <span>Category: {{ item.category }}</span>
            <span>Price: ${{ item.price }}</span>
            <button @click="removeFromCart(item.id)">Remove</button> -->
          </div>
          <v-divider></v-divider>  
        </div>
        <div class="column cart-total number-styling"> <h2>Total  {{ store.getCartTotal }} </h2></div>



      </div>
    
  </div>

</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'CartView'
  })
</script>

<script setup>
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";


  const router = useRouter()

  const store = productsStore()

  const removeFromCart = (id) => {
    store.removeFromCart(id)
  }



</script>

<style scoped>

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 10px; */
  /* border-radius: 8px; */
  /* padding: 16px; */
}

.cart-heading {
  text-align: left;
}

.item-details img {
  width: 20%;
}

.cart-total {
  text-align: right;
}
</style>