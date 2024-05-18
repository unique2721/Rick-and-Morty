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

const characterResult = gql`
  query Characters {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
        episode {
          id
          name
          air_date
          episode
          created
        }
        location {
          id
          name
          type
          dimension
        }
      }
    }
  }
`;

const { result, loading, error } = useQuery(characterResult);
</script>

<template>
  <h1 class="text-center text-3xl">Character Details</h1>
  <p v-if="error">
    Something went wrong... <span>error: {{ error.message }}</span>
  </p>
  <p class="text-center text-3xl" v-if="loading">Loading...</p>

  <div class="c grid grid-cols-3 gap-5" v-else>
    <div class="whole" v-for="character in result.characters.results" :key="character.id">
        <div class="flex justify-between">
          <img
            :src="character.image"
            alt="character image"
            class="rounded-tl-lg rounded-bl-lg h-[250px] w-[300px]"
          />
          <div>      
            <h1>{{ character.name }}</h1>
            <h1>{{ character.status }}</h1>
            <h1>{{ character.species }}</h1>
            <h1>{{ character.gender }}</h1>
          </div>
      </div>
      <div>
        <h1>Episodes Participated</h1>
        <ul>
          <li v-for="episode in character.episode" :key="episode.id">
            <h1>Name: {{ episode.name }}</h1>
            <p>Air Date: {{ episode.air_date }}</p>
            <p>Episode: {{ episode.episode }}</p>
            <p>Created: {{ episode.created }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

.whole {
  background-color: red;
}
</style>