import { defineStore } from 'pinia'


export const productsStore = defineStore('products', {
  state: () => ({
    counter: 0,
    products: [],
    cart: [],
    searchText: '',
    filteredProducts: []
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
    },
    setSearchText(input) {
      console.log('called')
      this.searchText = input
      console.log('statetext', this.searchText)
    }
  },
  mutations: {

  },
  getters: {
    filteredProductsData: (state) => {
      return state.products.filter((product) => product.title.toLowerCase().includes(state.searchText.toLowerCase()))
    }
  }

})