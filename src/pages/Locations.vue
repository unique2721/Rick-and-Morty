<script setup>
import {ref} from 'vue'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* pages */
import Footer from "./Footer.vue";
/* route information */
import { useRoute } from "vue-router";
const route = useRoute();
const locationId = parseInt(route.params.id);
console.log(locationId);
const locationResult = gql`
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
 }`;
const { result, loading, error } = useQuery(locationResult);
</script>
<template>
  <h1 class="text-center text-3xl font-bold m-[20px]">Location Details</h1>
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }} </p>
  <p class="text-center text-3xl my-5" v-else-if="loading && !error">Loading...</p>
  <div v-else>
    <div>
        <div v-for="location in result.locations.results" :key="location.id">
            <div class=" bg-teal-950 py-[30px] flex justify-center items-center flex-col flex-wrap text-white text-3xl leading-10">
              <ul>
                <li>Name: <span>{{ location.name }}</span></li>
                <li>Type: <span>{{ location.type }}</span></li>
                <li>Dimension: <span>{{ location.dimension }}</span></li>
                <li>Created: <span>{{ location.created }}</span></li>
              </ul> 
            </div>
            <h3 class="text-center text-3xl m-[20px] font-bold italic">
          Residents in this Location
        </h3>
        <div class="bg-slate-700 grid grid-cols-3 gap-5 p-5 text-white text-3xl">
          <div v-for="resident in location.residents" :key="resident.id">
            <div
              class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-slate-950 flex justify-between items-center flex-nowrap"
            >
              <img
                :src="`${resident.image}`"
                :alt="resident.name"
                class="rounded-tl-lg rounded-bl-lg w-[250px]"
              />
              <ul class="pr-5">
                <li>
                  <p>
                    Name: <span> {{ resident.name }}</span>
                  </p>
                  <p>
                    Status: <span> {{ resident.status }}</span>
                  </p>
                  <p>
                    Species: <span>{{ resident.species }}</span>
                  </p>
                  <p>
                    Gender: <span> {{ resident.gender }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>
