<template>
    <div class="grid-container error-page">
        <div class="column">
      <h1>Error Page</h1>
      <h3> page not found</h3>
      <v-btn @click="router.push({ name: 'HomeView' })">Go to Home </v-btn>
    </div>

    </div>
    
  </template>
  
  <script>
    import { defineComponent } from "vue";
    export default defineComponent({
      name: 'Not found'
    })
  </script>
  
  <script setup>

    import { useRouter } from "vue-router";
  
    const router = useRouter()

  
  </script>
  
  <style scoped>

  </style>