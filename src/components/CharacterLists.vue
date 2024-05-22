<script setup>
/* querying */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* characters */
const characterResult = ref(gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`);
const { result, loading, error } = useQuery(characterResult);
</script>
<template>
  <!-- list of characters -->
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p v-if="loading && !error" class="text-center text-3xl">Loading...</p>
  <div v-else>
    <h1 class="font-bold p-5 bg-gray-950 text-white text-center text-3xl">List of Characters</h1>
    <div class=" bg-gray-950 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 p-5">
      <div v-for="character in result.characters.results" :key="character.id">
        <RouterLink :to="`/characters/${character.id}`">
          <div
            class="hover:border-2 shadow-xl border-emerald-50 rounded-xl bg-slate-900 flex justify-between items-center flex-wrap italic">
            <img :src="character.image" :alt="character.name" class="rounded-tl-lg rounded-bl-lg w-[250px]" />
            <div class="pr-5">
              <h1 class=" hover:underline hover:text-orange-400 text-white text-3xl">{{ character.name }}</h1>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>
