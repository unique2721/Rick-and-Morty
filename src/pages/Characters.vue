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
   <div class="i">
    <span class="text-3xl">Characters</span> <input type="text" placeholder="search character by name"  />
  </div>
  <p v-if="error">
    Something went wrong... <span>error: {{ error.message }}</span>
  </p>
  <p class="text-center text-3xl" v-if="loading">Loading...</p>

  <div v-else>
    <div  class="c grid grid-cols-3 gap-5 text-white text-3xl"> 
      <div v-for="character in result.characters.results" :key="character.id">
        <div class="flex justify-between">
          <img
            :src="character.image"
            :alt="character.name"
            class="rounded-tl-lg rounded-bl-lg h-[250px] w-[300px]"
          />
          <div>      
            <h1>Name: {{ character.name }}</h1>
            <h1>Status: {{ character.status }}</h1>
            <h1>Species: {{ character.species }}</h1>
            <h1>Gender: {{ character.gender }}</h1>
          </div>
        </div>
        <!-- episodes in each character -->
        <div v-for="episode in character.episodes" :key="episode.id">
          <h1>Episodes Participated</h1>
        <ul>
        <li>
          <p>Name: {{ character.name }}</p>
          <p>Air Date: {{ character.air_date }}</p>
          <p>Episode: {{ character.episode }}</p>
          <p>Created: {{ character.created }}</p>
        </li>
      </ul>
      </div>
      <!-- last known location of the character -->
        <div v-for="location in character.locations" :key="location.id">
          <h1>Last Known Locations</h1>
        <ul>
        <li>
          <p>Name: {{ character.name }}</p>
          <p>Type: {{ character.type }}</p>
          <p>Dimension: {{ character.dimension }}</p>
        </li>
      </ul>
      </div>
      </div>
    </div>
  </div>

  <!-- each character details -->
  <!-- <h1>Character Details</h1>
  <p v-if="error">
    Something went wrong... <span>error: {{ error.message }}</span>
  </p>
  <p v-if="loading" class="text-center text-3xl">Loading...</p>

  <div class="c grid grid-cols-3 gap-5" v-else>
    <div v-for="character in result.characters.results" :key="character.id">
      <div>
        <div>
          <img
            :src="character.image"
            alt="character image"
            class="rounded-tl-lg rounded-bl-lg h-[250px] w-[300px]"
          />
          <h1>{{ character.name }}</h1>
          <h1>{{ character.status }}</h1>
          <h1>{{ character.species }}</h1>
          <h1>{{ character.gender }}</h1>
        </div>
      </div>
    </div>
  </div>
    <h2>Episodes Participated</h2>
    <ul>
      <li v-for="episod in character.episode" :key="episode.id">
        <p>Name: {{ episod.name }}</p>
        <p>Air Date: {{ episod.air_date }}</p>
        <p>Episode: {{ episod.episode }}</p>
        <p>Created: {{ episod.created }}</p>
      </li>
    </ul>
    <h2>Last Known Location</h2>
     
  </div> -->
</template>

<style scoped>
.i {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
input {
  padding: 5px;
  font-size: 1.5rem;
  border: 2px solid;
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
}
</style>
