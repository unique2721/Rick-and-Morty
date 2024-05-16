<script setup>
import {ref} from 'vue'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const locations = ref([]);

const {result:locationsResult }  = useQuery(gql`
    query {
     locations {
     results {
       id
       name
       type
       dimension
       created
       residents {
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
</script>

<template>
  <h1>Location Details</h1>
  <div v-for="location in locationsResult?.locations || []">
    <!-- Show location details -->
    <h1>Name: {{ location.name }}</h1>
    <p>Type: {{ location.type }}</p>
    <p>Dimension: {{ location.dimension }}</p>
    <p>Created: {{ location.created }}</p>

    <h2>Residents</h2>
    <ul>
      <li v-for="resident in location.residents" :key="resident.id">
        <img :src="resident.image" alt="resident.name" style="width: 100px" />
        <p>Name: {{ resident.name }}</p>
        <p>Status: {{ resident.status }}</p>
        <p>Species: {{ resident.species }}</p>
        <p>Gender: {{ resident.gender }}</p>
      </li>
    </ul> 
  </div>
</template>

<style scoped></style>
