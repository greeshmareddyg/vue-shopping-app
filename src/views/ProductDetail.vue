<template>


  <div class="grid-container product-page">
    <div class="column product-page-breadcrumb">
      <div>
        <v-btn variant="text" @click="router.push({ name: 'HomeView' })">Home</v-btn>/
        <v-btn variant="text" @click="router.push({ name: 'Catalog' })">Shop</v-btn>/
        <v-btn variant="text" @click="goToProductPage(selectedProduct.id)"> {{ selectedProduct.title }}</v-btn>
      </div>
    </div>  

      <div class="column c1-2-md c1-4-lg">
        <div class="product-image">
          <img :src="selectedProduct.thumbnail" :alt="selectedProduct.title" rel="preload">
        </div>
      </div>
      <div class="column c1-2-md c1-8-lg">
        <div class="product-details">
          <h3>{{ selectedProduct.title }}</h3> 
          <p>{{ selectedProduct.brand }} brand </p>
          <div class="number-styling"> 
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#5471a7" height="16px" width="16px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> 
              {{ selectedProduct.rating }} rating | reviews 
            </h4>
            <h3>            
              <span class="item-discount-percentage"> -{{ selectedProduct.discountPercentage }}%</span>
              <span>Price: ${{ selectedProduct.price }} </span>
              <span class="product-addtocart"> 
                <v-btn
                    variant="elevated"
                    color="#5471a7"
                    @click="addToCart">
                    Add to cart
                </v-btn>
              </span>
           </h3>
          </div>


          <v-divider class="border-opacity-100" color="info"></v-divider>
          <div class="about-product"> 
            <h3>About Product </h3> 
            {{ selectedProduct.description }}
            <br/>
            <br/>
            <p><b>Brand:</b> {{ selectedProduct.brand }} </p>
            <p><b>Category:</b> {{ selectedProduct.category }}</p>
            <p><b>Weight:</b>{{ selectedProduct.weight }}</p>

          </div>

          
            <v-divider class="border-opacity-100" color="info"></v-divider>

            <h3>Reviews </h3>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#5471a7" height="16px" width="16px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> 
              {{ selectedProduct.rating }} rating 
            </h4>

            <!-- <div class="grid-container review-section"> -->
              <div class="column review-section-review" v-for="review in selectedProduct.reviews" :key="review.reviewerName"> 
                <h4>{{ review.reviewerName }} | rating:  {{ review.rating }}</h4>
                <p>{{ review.comment }}</p>
                <v-divider></v-divider>  
              </div>
            <!-- </div>     -->
          
        </div>
      </div>
  </div>
    

</template>


<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'ProductDetails'
  })
</script>

<script setup>
  import { computed, onMounted } from "vue";
  import { productsStore } from "@/stores/products";
  import { useRoute, useRouter } from "vue-router";

  const store = productsStore()
  const router = useRouter()
  const route = useRoute()

  

  const selectedProduct = computed(() => {
    console.log('route.params.id', route.params.id)
    return store.products.find((item) => item.id === Number(route.params.id))
  })

  const goToProductPage = (id) => {
    router.push({ name: 'ProductView', params: { id } })
  }

  const addToCart = () => {
    store.addToCart(selectedProduct.value)
    store.getCartTotal
    router.push({ name: 'CartView' })
  }
</script>

<style scoped>

.product-page {
  text-align: left;
}
.product {
  display: flex;
  margin-top: 50px;
}
.product-page-goback-button .v-btn__content {
  border-bottom: 1px solid blue;
}

.product-image {
  margin-right: 24px;
}

.item-discount-percentage {
  color: #CC0C39;
}

.product-details, .about-product {
  padding-bottom: 1rem;
}

.product-addtocart {
  margin: 2rem;
}


.review-section {
  text-align: left;
}

.review-section-review {
  padding: 10px;
  margin-top: 10px;
  line-height: 1.5rem;
}
@media screen and (max-width:950px) {

  .product-page-breadcrumb {
    display: none;
  }

  .product-details, .about-product {
    text-align: center;
  }
  .product-addtocart {
  margin-top: 1rem;
}

}
</style>