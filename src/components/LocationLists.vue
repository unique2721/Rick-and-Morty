<script setup>
/* querying */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* locations */
const locationResult = ref(gql`
  query Locations {
    locations {
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }`);
const { result, loading, error } = useQuery(locationResult);
</script>
<template>
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p v-if="loading && !error" class="text-center text-3xl">Loading...</p>
  <div v-else>
    <h1 class=" h1 text-center text-3xl p-5 font-bold text-white bg-slate-800">List of Locations</h1>
    <div class="bg-slate-800 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
      <div v-for="location in result.locations.results" :key="location.id">
        <RouterLink :to="`/locations/${location.id}`">
          <div
            class="hover:border-2 h-[200px] p-1.5 flex justify-evenly items-center rounded-xl text-slate-100 bg-gray-950 flex-wrap">
            <h1 class="font-bold text-3xl text-green-500">Name:</h1>
            <p class="p text-2xl hover:underline hover:text-orange-400"> {{ location.name }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>
