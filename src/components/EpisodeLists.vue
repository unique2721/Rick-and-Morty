<script setup>
import { RouterView } from "vue-router";
/* querying */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* episodes */
const episodeResult = ref(gql`
 query Episodes{
  episodes {
    results {
      id
      name
    }
  }
 }`)
const { result, loading, error } = useQuery(episodeResult);
</script>
<template>
  <!--  list of episodes  -->
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p v-if="loading && !error" class="text-center text-3xl">Loading...</p>
  <div v-else>
    <h1 class="text-center text-3xl text-white p-5 font-bold bg-slate-900">List of Episodes</h1>
    <div class="bg-slate-900 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-cols-3 gap-5 p-5">
      <div v-for="episode in result.episodes.results" :key="episode.id">
        <RouterLink :to="`/episodes/${episode.id}`">
          <div
            class="hover:border-2 h-[220px] p-5 flex justify-evenly items-center rounded-xl text-slate-100 bg-slate-950 flex-wrap hover:border-green-600">
            <h1 class="text-3xl font-bold text-green-500">Name:</h1>
            <p class="p text-2xl hover:underline hover:text-orange-400"> {{ episode.name }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>