<script setup>
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* components */
import Footer from "../components/Footer.vue";
/* route information */
import { useRoute } from "vue-router";
const route = useRoute();
const episodeId = ref(parseInt(route.params.id));
/* query only needed data here */
const episodeResult = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
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
`;
const { result, loading, error } = useQuery(episodeResult, {
  id: episodeId,
});
</script>
<template>
  <!-- details information about each episode -->
  <h1 class="text-center text-3xl p-5 bg-slate-900 text-white font-bold">Episode Details</h1>
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p v-if="loading && !error" class="text-center text-3xl my-5">Loading...</p>
  <div v-else>
    <div
      class="bg-slate-950 py-[30px] flex justify-center items-center flex-col flex-wrap text-white text-3xl leading-10">
      <ul>
        <li>
          Name:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[100px]">{{ result.episode.name
            }}</span>
        </li>
        <li>
          Air Date:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[100px]">{{ result.episode.air_date
            }}</span>
        </li>
        <li>
          Episode:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[100px]">{{ result.episode.episode
            }}</span>
        </li>
        <li>
          Created:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[100px]">{{ result.episode.created
            }}</span>
        </li>
      </ul>
    </div>
    <h3 class="text-center text-3xl p-5 bg-slate-900 text-white font-bold italic">
      Characters in this Episode
    </h3>
    <div
      class="bg-slate-900 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 p-5 text-white text-2xl">
      <div v-for="character in result.episode.characters" :key="character.id">
        <div
          class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-slate-950 flex justify-between items-center flex-nowrap">
          <img :src="`${character.image}`" :alt="character.name" class="rounded-tl-lg rounded-bl-lg sm:w-[250px] md:w-[250px] lg:w-[200px]" />
          <ul class="pr-5">
            <li>
              <p>
                Name:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ character.name }}</span>
              </p>
              <p>
                Status:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ character.status }}</span>
              </p>
              <p>
                Species:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ character.species
                  }}</span>
              </p>
              <p>
                Gender:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ character.gender }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>