import {   createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue";
// import ProductDetail from "@/views/ProductDetail.vue";
// import Cart from "@/views/Cart.vue";

const router = _createRouter({
  history: import.meta.env.SSR
  ? createMemoryHistory("/")
  : createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      //chunks
      component: () => import('@/views/ProductDetail.vue')
    },
    {
      path: '/cart',
      name: 'CartView',
      component: () => import('@/views/Cart.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue')
    }


    
  ]
})

export default router
