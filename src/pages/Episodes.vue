<script setup>
/* query only needed data here */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

/* route information */
import { useRoute } from "vue-router";
const route = useRoute();

const characterId = parseInt(route.params.id);
console.log(route.params.id);

const episodeResult = gql`
  query Episodes{
    episodes {
      results {
        id
        name
        air_date
        episode
        created
        characters {
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
`;
const { result, loading, error } = useQuery(episodeResult);
</script>

<template>
  <h1 class="text-center text-3xl">List of Episodes</h1>
  <p v-if="error">
    Something went wrong... <span>error: {{ error.message }}</span>
  </p>
  <p class="text-center text-3xl" v-if="loading">Loading...</p>
  <div v-else>
  <div class="c grid grid-cols-3 gap-5 text-white text-3xl">
   <div class="whole" v-for="episode in result.episodes.results" :key="episode.id">
    <div>
      <h1>Name: {{ episode.name }}</h1>
      <p>Air Date: {{ episode.air_date }}</p>
      <p>Episode: {{ episode.episode }}</p>
      <p>Created: {{ episode.created }}</p>
      <h2>Characters in this Episode</h2> 
    </div>
    <div class="flex justify-between items-center"  v-for="character in episode.characters" :key="character.id">
      <img :src="`${character.image}`" :alt="character.name" class="w-[200px] h-[200px]">
      <ul>
        <li>
          <p>Name: {{ character.status }}</p>
          <p>Air Date: {{ character.species }}</p>
          <p>Episode: {{ character.gender }}</p>
        </li>
      </ul>
    </div>

  </div>
</div>
</div>
</template>

<style scoped>
.c {
  background-color: darkslategrey;
}

.whole {
  background-color: rgba(0, 0, 0, 0.734);
}
</style>
