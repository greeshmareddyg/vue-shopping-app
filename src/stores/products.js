import { defineStore } from 'pinia'


export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
      cart: [],
  }),

  actions: {
    async fetchProductsFromAPI() {
      await fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(json => {
            this.products = json.products;
          })
          .catch((error) => {
            console.log('error:', error)
          })

          console.log('api called')
          console.log('response', this.products)
    },

    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(id) {
      console.log('product ID', id)
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})