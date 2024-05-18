<script setup>
import {ref} from 'vue'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* route information */
import { useRoute } from "vue-router";
const route = useRoute();

const locationId = parseInt(route.params.id);
console.log(route.params.id);


const locationResult = (gql`
    query {
     locations {
     results {
       id
       name
       type
       dimension
       created
       residents {
         id
         name
         status
         species
         gender
         image
       }
     }
   }
 }
`);
const { result, loading, error } = useQuery(locationResult);

</script>

<template>
  <p v-if="error">
    Something went wrong... <span>error: {{ error.message }}</span>
  </p>
  <h1 class="text-center text-3xl">Location Details</h1>
  <p class="text-center text-3xl" v-if="loading">Loading...</p>
  <div v-else>
  <div class="c grid grid-cols-3 gap-5 text-white text-3xl">
    <div v-for="location in result.locations.results" :key="location.id">
    
    </div>
  </div>
  </div>


</template>

<style scoped>


</style>
