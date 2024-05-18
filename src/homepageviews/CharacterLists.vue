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
    <h1 class="font-bold m-[15px] text-center text-3xl">List of Characters</h1>
    <div class="c grid grid-cols-3 gap-5 p-5">
      <div v-for="character in result.characters.results" :key="character.id">
        <RouterLink :to="`/characters/${character.id}`">
          <div class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-black flex justify-between items-center flex-wrap italic">
          <img
            :src="character.image"
            :alt="character.name"
            class="rounded-tl-lg rounded-bl-lg w-[250px]"
          />
          <div>  
            <h1 class=" hover:underline hover:text-orange-400 text-white text-3xl">{{ character.name }}</h1>
          </div>
      </div>
        </RouterLink>
      </div>
    </div>
    </div>
</template>

<style scoped>
.c {
  background-color: rgba(0, 0, 0, 0.854);

}
.whole {
  background-color: rgba(0, 0, 0, 0.666);
}
.whole:hover {
  box-shadow: 2px 2px 2px rgba(245, 245, 245, 0.655);
}
</style>
