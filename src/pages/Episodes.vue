<script setup>
/* query only needed data here */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* pages */
import Footer from "./Footer.vue";
/* route information */
import { useRoute } from "vue-router";
const route = useRoute();
const characterId = parseInt(route.params.id);
console.log(route.params.id);
const episodeResult = gql`
  query Episodes {
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
  <h1 class="text-center text-3xl m-[20px] font-bold">Episode Details</h1>
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p v-if="loading && !error" class="text-center text-3xl">Loading...</p>
  <div v-else>
      <div v-for="episode in result.episodes.results" :key="episode.id">
        <div class=" bg-teal-950 py-[30px] flex justify-center items-center flex-col flex-wrap text-white text-3xl leading-10">
          <ul>
            <li>Name: <span>{{ episode.name }}</span></li>
            <li>Air Date: <span>{{ episode.air_date }}</span></li>
            <li>Episode: <span>{{ episode.episode }}</span></li>
            <li>Created: <span>{{ episode.created }}</span></li>
          </ul>
        </div>
        <h3 class="text-center text-3xl m-[20px] font-bold italic">
          Characters in this Episode
        </h3>
        <div class="bg-slate-700 grid grid-cols-3 gap-5 p-5 text-white text-3xl">
          <div v-for="character in episode.characters" :key="character.id">
            <div
              class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-slate-950 flex justify-between items-center flex-nowrap"
            >
              <img
                :src="`${character.image}`"
                :alt="character.name"
                class="rounded-tl-lg rounded-bl-lg w-[250px]"
              />
              <ul class="pr-5">
                <li>
                  <p>
                    Name: <span> {{ character.name }}</span>
                  </p>
                  <p>
                    Status: <span> {{ character.status }}</span>
                  </p>
                  <p>
                    Species: <span>{{ character.species }}</span>
                  </p>
                  <p>
                    Gender: <span> {{ character.gender }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
</template>
<style scoped>
span:hover {
  color: orange;
  font-style: italic;
}
</style>
