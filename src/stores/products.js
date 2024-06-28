import { defineStore } from 'pinia'


export const productsStore = defineStore('products', {
  state: () => ({
    counter: 0,
    products: [],
    cart: [],
    searchText: '',
    filteredProducts: [],
    cartTotal: 0
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
            throw error;
          })

          console.log('api called')
          console.log('response', this.products)
    },

    addToCart(product) {
      console.log('cart called ', this.cart)
      this.cart.push(product)
    },

    removeFromCart(id) {
      console.log('product ID', id)
      this.cart = this.cart.filter((item) => item.id !== id)
    },
    setSearchText(input) {
      this.searchText = input
    },
  },
  mutations: {

  },
  getters: {
    filteredProductsData: (state) => {
      return state.products.filter((product) => product.title.toLowerCase().includes(state.searchText.toLowerCase()))
    },
    getCartTotal: (state) => {
      let total = state.cart.reduce((sum, item) => sum + item.price, 0);
      return Math.round(total * 100) / 100
    },
    getCategoriesData: (state) => {
      return state.products.filter((item) => item.category)
    }

  }

})