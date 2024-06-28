<template>
  <v-sheet class="ma-2 pa-2">
    <v-card
        class="product"
    >
      <v-img
          :src="props.productData.thumbnail"
          height="200px"
          cover
          :alt="props.productData.title"
      ></v-img>
      
      <v-card-title>
        {{ props.productData.title }}
      </v-card-title>

      <v-card-subtitle>
        $ {{ props.productData.price }}
      </v-card-subtitle>
      
        <!-- <v-btn class="addcart-btn" @click="goToProductPage(props.productData.id)">
          add to cart 
        </v-btn> -->

    
                                                
    </v-card>
  </v-sheet>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'ProductItem',
  })
</script>

<script setup>
  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    }
  })

  const emit = defineEmits(['item-clicked'])

  const goToProductPage = (productId) => {
    emit('item-clicked', productId)
  }
</script>
<style scoped>
.product {

  text-align: center;
  padding-bottom: 1rem;
  border: 1px solid #ffd700;
}

.product:hover {
  background-color: #E4EBF6;
}

.addcart-btn {
  text-align: center;
  color: #5471a7;
  margin: 1rem;
}
</style>