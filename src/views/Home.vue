<template>
    <div class="home-page">
      <div class="grid-container app-home-features">
        <div class="column">
          <h2>About GG</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.</p> <br/> 

            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.</p>

        
            
            
        </div>  
          <div class="column" :style="{ color: '#5471a7' , fontWeight: 'bold' }">Our products</div>

          
          <div 
          v-for="(category, index) in getCategoriesData" 
          :key="index"
          @mouseleave="mouseLeaveFn" 
          @mouseover="mouseOverFn" 
          class="app-feature category-card-title app-features-fashion column c1-2-md c1-3-lg">
            <p class="uppercase " style="text-transform:uppercase">{{ index}}</p>
            <p class="product-qty">Qty {{ category.length }}</p>

          </div>
          <!-- <div class="app-feature app-features-beauty column c1-2-md c1-3-lg">
            Beauty
          </div>
          <div class="app-feature app-features-care column c1-2-md c1-3-lg">
            Featured
          </div>
          <div class="app-feature app-features-care column c1-2-md c1-3-lg">
            Featured
          </div> -->

          <!-- {{ getCategoriesData }} -->
      </div>
    </div>

  </template>
  
  <script>
    import { defineComponent } from "vue";
    export default defineComponent({
      name: 'HomeView'
    })
  </script>
  
  <script setup>

    import { useRouter } from "vue-router";
    import { productsStore } from "@/stores/products";
    import { ref, computed, onMounted } from "vue";
  
    const router = useRouter()
    const store = productsStore()

    const isHovered = ref(false)



    const getCategoriesData = computed(() => {
    console.log('getCategoriesData home' , store.getCategoriesData)
    return store.getCategoriesData
  })

    onMounted(async () => {
    await store.fetchProductsFromAPI()
    console.log('getCategoriesData home' , store.getCategoriesData)

  })



  
  </script>
  
  <style scoped>
  /* .app-home-features {
  text-align: center;
} */




.app-feature {
  font-size: 30px;
  color: #5471a7;
  padding-top: 70px;;
  padding: 2rem;
  margin: 1rem;
  border: 1px solid #ffd700;

  /* CSS pattern */
  background: radial-gradient(circle, #dbc546 10%, transparent 11%),radial-gradient(circle at bottom left, #dbc546 5%, transparent 6%),radial-gradient(circle at bottom right, #dbc546 5%, transparent 6%),radial-gradient(circle at top left, #dbc546 5%, transparent 6%),radial-gradient(circle at top right, #dbc546 5%, transparent 6%);
  background-size: 0.5em 0.5em;
  background-color: #ffffff;
  opacity: 1

}

.product-qty {
  font-size: 1rem;
}

.category-card-title {
  font-size: 1.5rem;
}

.app-feature:hover {
  
  background: #fae99d ;
  /* #fae99d
  #ffd700
   */
}

  </style>