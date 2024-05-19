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
   <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
    <p v-if="loading && !error" class="text-center text-3xl">Loading...</p>
  <div v-else>
   <h1 class="text-center text-3xl m-[20px]">Episode Details</h1>
  <div class="container text-white text-3xl">
   <div v-for="episode in result.episodes.results" :key="episode.id">
    <div class="inner">
      <h1>Name: {{ episode.name }}</h1>
      <p>Air Date: {{ episode.air_date }}</p>
      <p>Episode: {{ episode.episode }}</p>
      <p>Created: {{ episode.created }}</p>
    </div>
    <h2 class="text-center text-3xl m-[20px]">Characters in this Episode</h2> 
    <div v-for="character in episode.characters" :key="character.id">
      <div class="whole"> 
        <img :src="`${character.image}`" :alt="character.name" class="w-[200px] h-[200px]">
        <ul>
          <li>
            <p>Name:   <span> {{ character.name }}</span></p>
            <p>Status:  <span> {{ character.status }}</span></p>
            <p>Species:  <span>{{ character.species }}</span></p>
            <p>Gender:   <span> {{ character.gender }}</span> </p>
          </li>
        </ul>
     </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>

.container {
  background-color: darkslategrey;
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(85, 107, 47, 0.343);
  padding: 30px 0px;
  font-style: italic;
  line-height: 1.5;
}

span:hover {
  color: rgba(245, 245, 245, 0.76);
  font-style: italic;
}

.whole {
 display: grid;
 grid-template-columns: repeat(3,1fr);
}


</style>
