<script setup>
import {ref} from 'vue'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
const countries = ref([])
const {result }  = useQuery(gql`
query {
 countries   {
    name
    emoji
    capital
    code
    phone
    
  }
}
`);



</script>
<template>

<hr class="">
  <!-- {{ result }} -->
  <div class="grid  grid-cols-3   ">
  <div v-for="country in result?.countries || []" class="bg-gray-500 text-white my-2 mx-2 rounded-xl "> 
    <div v-html="country.emoji"></div>
    <p>{{ country.name }}</p>
    
    <p>{{ country.capital }}</p>
    <p>{{ country.code }}</p>
    <p>{{ country.phone }}</p>
   
   
  </div>
</div>
</template>
