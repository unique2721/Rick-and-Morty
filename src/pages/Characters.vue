<script setup>
/* query only needed data here */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* pages */
import Footer from "./Footer.vue";
/* routing */
import { RouterView } from "vue-router";
/* route information */
import { useRoute } from "vue-router";
const route = useRoute();
const characterId = parseInt(route.params.id);

console.log(characterId);

const characterResult = gql`
  query ($id: ID!) {
  character (id: $id) {
    id
    name
    status
    species
    species
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
}`;
const { result, loading, error } = useQuery(characterResult, {
  id: characterId
});
</script>

<template>
  <h1 class="text-center text-3xl m-[20px] font-bold italic">
    Character Details
  </h1>
  <p v-if="error">
    Something went wrong... <span>error: {{ error.message }}</span>
  </p>
  <p class="text-center text-3xl my-5"  v-if="loading">Loading...</p>

  <div class="c" v-else>
    <div class="flex justify-center items-center bg-slate-950" >
        <div
        class="bg-slate-500 flex justify-between items-center flex-wrap "
        >
          <img
            :src="`${result.character.image}`"
            :alt="result.character.name"
            class="rounded-tl-lg rounded-bl-lg w-[300px]"
          />
          <ul class=" text-white text-3xl">
            <li class=" leading-10 ml-14">
              <p>
                Name: <span> {{ result.character.name }}</span>
              </p>
              <p>
                Status: <span> {{ result.character.status }}</span>
              </p>
              <p>
                Species: <span>{{ result.character.species }}</span>
              </p>
              <p>
                Gender: <span> {{ result.character.gender }}</span>
              </p>
            </li>
          </ul>
        </div>
        </div>
      <h1 class="text-center text-3xl m-[20px] font-bold italic">
        Episodes Participated
      </h1>
      <div class="bg-slate-700 grid grid-cols-3 gap-5 p-5 text-white text-3xl">
        <div v-for="episode in result.character.episode"
            :key="episode.id">
            <div class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-slate-950 flex justify-between items-center flex-wrap p-5">
              <ol>
                <li>Name: <span>{{ episode.name }}</span></li>
                <li>Air Date: <span>{{ episode.air_date }}</span></li>
                <li>Episode: <span>{{ episode.episode }}</span></li>
                <li>Created: <span>{{episode.created}}</span></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  <RouterView/>
  <Footer/>
</template>

<style scoped>
span:hover {
  font-style: italic;
  color: orange;
}
span {
  margin-left: 50px;
}
</style>
