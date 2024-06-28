<template>
  <div>

    <div class="grid-container shop-page">
      <div class="column c1-3-lg"></div>
      <div class="column  c1-6-lg"> 
        <div class="search-shop">
          <v-text-field clearable label="Search" class="search-input" v-model="searchText" @input="setSearch(searchText)"></v-text-field>
        </div>
        <span class="number-styling" v-if="searchText"> {{ filteredProducts.length }} results based on your search # {{ store.searchText}}</span>
        <span v-if="searchText && filteredProducts.length === 0"></span>
        <span class="number-styling" v-if="!searchText && filteredProducts"> {{ filteredProducts.length }} items </span>
      </div>
    </div>  
    

    <div class="products-list grid-container">
      <div class="column">
        <v-row no-gutters>
          <v-col
              class=""
              v-for="product in filteredProducts"
              :key="product.id"
              cols="12"
              sm="4"
              @click="goToProductPage(product.id)"
          >
          <ErrorBoundary>
            <product-item
                :product-data="product"
                @item-clicked="goToProductPage"
            />
          </ErrorBoundary>  
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import ProductItem from "@/components/ProductItem.vue";
  import ErrorBoundary from '@/components/ErrorBoundary.vue';
  export default defineComponent({
    name: 'CatalogView',
    components: {
      ProductItem,
      ErrorBoundary
    }
  })
</script>

<script setup>
  import { onMounted, ref, computed } from "vue";
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";

  const store = productsStore()
  const router = useRouter()

  

  let searchText = ref('')

  const goToProductPage = (id) => {
    router.push({ name: 'ProductView', params: { id } })
  }

  
  function setSearch (input) {
    store.setSearchText(input)
  }

  const getSearchText = computed(() => {
    return store.searchText

  })
  


  const filteredProducts = computed(() => {
    console.log('filteredProductsData', store.filteredProductsData)
    return store.filteredProductsData
  })

  console.log('products', store.products)
  onMounted(async () => {
    await store.fetchProductsFromAPI()

  })

</script>

<style scoped>

.products-list {
  text-align: center

}


.v-field__field {
  border-bottom: 1px solid grey;
  background-color: blue;
}

.card-title {
    font-size: 16px;

}
.products-page {
  text-align: center;
}

.products-item-card {
  font-size: 30px;
  color: #5471a7;
  border: 1px solid #ffd700;
  margin: 1rem;

}

.products-item-card:hover {
  
  background: #fae99d ;
}

</style>