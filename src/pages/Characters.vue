<script setup>
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* components */
import Footer from "../components/Footer.vue";
/* routing */
import { RouterView } from "vue-router";
/* route information */
import { useRoute } from "vue-router";
const route = useRoute();
const characterId = parseInt(route.params.id);

/* query only needed data here */
const characterResult = gql`
  query Character($id: ID!) {
    character(id: $id) {
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
`;
const { result, loading, error } = useQuery(characterResult, {
  id: characterId, //pass that id variable dynamically
});
</script>

<template>
  <!-- details of each character -->
  <h1 class="text-center text-white text-3xl p-5 bg-slate-900 font-bold italic">
    Character Details
  </h1>
  <p v-if="error">
    Something went wrong... <span>error: {{ error.message }}</span>
  </p>
  <p class="text-center text-3xl my-5" v-if="loading">Loading...</p>

  <div v-else>
    <div class="flex justify-center items-center bg-slate-800">
      <div class="bg-slate-800 flex justify-between items-center flex-nowrap">
        <img :src="`${result.character.image}`" :alt="result.character.name"
          class="rounded-tl-lg rounded-bl-lg w-[300px]" />
        <ul class="text-white text-3xl">
          <li class="leading-10 ml-14">
            <p>
              Name:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                {{ result.character.name }}</span>
            </p>
            <p>
              Status:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                {{ result.character.status }}</span>
            </p>
            <p>
              Species:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{
                result.character.species }}</span>
            </p>
            <p>
              Gender:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                {{ result.character.gender }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <h1 class="text-center text-3xl p-5 text-white bg-slate-900 font-bold italic">
      Episodes Participated
    </h1>
    <div
      class="bg-slate-900 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 p-5 text-white sm:text-3xl lg:text-2xl">
      <div v-for="episode in result.character.episode" :key="episode.id">
        <div
          class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-slate-950 flex justify-between items-center flex-wrap p-5 h-[300px] sm:justify-center">
          <ol class="leading-10">
            <li>
              Name:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ episode.name }}</span>
            </li>
            <li>
              Air Date:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ episode.air_date
                }}</span>
            </li>
            <li>
              Episode:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ episode.episode
                }}</span>
            </li>
            <li>
              Created:
              <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ episode.created
                }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
  <Footer />
</template>
