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
            anim id est laborum.</p>
        </div>  

          
          <div class="app-feature app-features-fashion column c1-2-md c1-4-lg">
            Fashion

          </div>
          <div class="app-feature app-features-beauty column c1-2-md c1-4-lg">
            Beauty
          </div>
          <div class="app-feature app-features-care column c1-2-md c1-4-lg">
            Featured
          </div>
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
  
    const router = useRouter()

  
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

}

.app-feature:hover {
  
  background: #fae99d ;
  /* #fae99d
  #ffd700
   */
}

  </style>