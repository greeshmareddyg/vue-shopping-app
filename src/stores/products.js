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
    // Fetch Api data
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
      this.cart.push(product)
      console.log('cart called ', this.cart)
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
    // getters for different data rom products
    filteredProductsData: (state) => {
      return state.products.filter((product) => product.title.toLowerCase().includes(state.searchText.toLowerCase()))
    },
    getCartTotal: (state) => {
      let total = state.cart.reduce((sum, item) => sum + item.price, 0);
      return Math.round(total * 100) / 100
    },
    getCategoriesData: (state) => {
      console.log('get categories', state.products.reduce((acc,curr)=>(
        (acc[curr.category] = acc[curr.category] || []).push(curr), acc
      ), {}))
      let filteredcategories = state.products.reduce((acc,curr)=>(
        (acc[curr.category] = acc[curr.category] || []).push(curr), acc
      ), {})
      return filteredcategories
    }


  }

})