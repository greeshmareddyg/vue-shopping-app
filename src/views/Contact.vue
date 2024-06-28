<template>
    <div class="grid-container contact-page">

      <!-- <div class="column c1-2-md c1-4-lg">
        <h3>Contact Page</h3>
        <v-card
          class="mx-auto"
          subtitle="Greeshma's brand"
          width="400"
        >
          <template v-slot:title>
            <span class="font-weight-black">GG</span>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            ADDRESS<br/>
            Morrisville <br/>
            NC, 27560
          </v-card-text>
        </v-card>
      </div>
      <div class="column c1-2-md c1-8-lg">
        <v-btn @click="getLocation()">get location</v-btn>
        {{ lat }} , {{ lng }}

        <div ref="mapContainer" style="width: 400px; height: 400px"></div>


      </div>   -->

      <div class="column ">

        <h3>Contact Page</h3>

        
        <h4>GG Brand</h4>
        <p>Greeshma's Brand</p>
        <p> ADDRESS<br/>
            Morrisville <br/>
            NC, 27560</p>
            
      </div>
      <div class="column">
        
        <v-btn variant="elevated" color="#5471a7" @click="getLocation()">click to get your location</v-btn>
       <p class="number-styling lang-lat-text"> lat and lng  : {{ lat }} , {{ lng }} </p> 

       <h3>The location pinned to Morrisville, NC</h3>
       you can also drag and pin and see the lat and lng response in console.
      </div>
      <div class="column c1-4-lg">
      </div>
      <div class="column c1-2-md c1-8-lg">




        <div ref="mapContainer" class="contact-map" ></div>


      </div>

    </div>
  </template>
  
  <script>
    import { defineComponent } from "vue";
    export default defineComponent({
      name: 'Contact'
    })
  </script>
  
  <script setup>

    import { useRouter } from "vue-router";

    import { onMounted, ref } from "vue";
    import L from "leaflet";

  
    const router = useRouter()


  const lat = ref(0);
  const lng = ref(0);
  const map = ref();
  const mapContainer = ref();

  /*

  Using Leaflet for the maps.
  used lat and lan
  send the data to the api and got the response.
  
  */

  onMounted(() => {
    //setting morrisville lat and lng
    map.value = L.map(mapContainer.value).setView([35.83, -78.83], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map.value);
  });

  //getting lat and lng from location.
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        lat.value = position.coords.latitude;
        lng.value = position.coords.longitude;
        map.value.setView([lat.value, lng.value], 13);

        L.marker([lat.value, lng.value],{draggable : true})
        .addTo(map.value)
        .on("dragend",(event)=> {
          console.log('new pin', event)
        });


      });
    }
  } 

  
  </script>
  
  <style scoped>

  .contact-page {
    color: #5471a7;
    /* align-items: left; */
  } 

  .lang-lat-text {
    margin-top: 1rem;
    margin-bottom: 0.5 rem;
  }

  .contact-map {
    width: 300px;
    height: 300px
  }

  @media screen and (max-width:950px) {


    .contact-map {
    width: 250px;
    height: 250px
  }


  }

/* #map { height: 180px; } */


  </style>