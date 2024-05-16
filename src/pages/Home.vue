<script setup>
/* routing */
import { RouterLink } from "vue-router";
/* carousels */
import { Carousel, Slide } from 'vue-carousel';
/* carousel images */

import images from '../data/images.json'
/* querying */
import {ref} from 'vue'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const episodes = ref([]);
const characters = ref([]);
const locations = ref([]);

/* episodes */

const {result }  = useQuery(gql`
  query {
    episodes {
     results {
      name
     }
   }
 }`);


 /* characters */
const {resultt }  = useQuery(gql`
  query {
characters {
  results {
    name
  }
 }
}`);

/* locations */
const {resulttt }  = useQuery(gql`
 query {
locations {
  results {
    name
  }
 }
}`);
</script>
/* query data for each here */

<template>
  <div class="p-5">
    <div>
      <h1 class="text-center text-3xl p-7 font-bold">
        Welcome to Rick and Morty
      </h1>
      <p>
        Rick and Morty is an American adult animated science fiction sitcom
        created by <strong>Justin Roiland</strong> and
        <strong>Dan Harmon</strong>. The show follows the misadventures of an
        eccentric, alcoholic scientist Rick Sanchez and his good-hearted but
        easily influenced grandson Morty Smith, who split their time between
      domestic life and interdimensional adventures.
    </p>
    <p>
      The series premiered on December 2, 2013, on Cartoon Network's late-night
      programming block, Adult Swim. It has since gained a massive cult
      following for its clever writing, unique humor, and imaginative
      storytelling.
    </p>
    <p>
      Rick and Morty has received critical acclaim for its originality,
      creativity, and emotional depth, as well as its exploration of existential
      themes and philosophical concepts.
    </p>
    <p>
      The show has won numerous awards, including the Primetime Emmy Award for
      Outstanding Animated Program, and has been praised by critics and
      audiences alike for its groundbreaking approach to animation and
      storytelling.
    </p>
    <p>
      With its eclectic mix of humor, wit, and thought-provoking ideas, Rick and
      Morty has become one of the most beloved and influential animated series
      of the 21st century.
    </p>
    <h3>
      created by: <strong>Justin Roiland</strong> and
      <strong>Dan Harmon</strong>
    </h3>
    <h3>
      Genere: <strong>animated science fiction sitcom</strong>
    </h3>
    <h3>
      Stars: <strong>Justin Roiland</strong> and <strong>Dan Harmon</strong>
    </h3>
    <h3>rating: <strong>9.1</strong> / <strong>10</strong></h3>
  </div>
</div>
  
  <div class="flex justify-between">
  <!-- list of episodes -->
    <div v-for="episode in result?.episodes || []" :key="episode.id" class="text-xl" > 
      <RouterLink
      :to="`/episodes/${episode.id}`">
      {{ episode[0].name }}
      {{ episode[1].name }}
      {{ episode[2].name }}
      {{ episode[3].name }}
      {{ episode[4].name }}
      {{ episode[5].name }}
      {{ episode[6].name }}
      {{ episode[7].name }}
      
    </RouterLink>
  </div>

    <!-- list of characters -->
    <div v-for="character in resultt?.characters || []" > 
      <RouterLink
      :to="`/characters/${character.id}`">
      {{ character }}
    </RouterLink>
  </div>

    <!-- list of locations -->
    <div v-for="location in resulttt?.locations || []" > 
      <RouterLink
      :to="`/locations/${location.id}`">
      {{ location }}
    </RouterLink>
  </div>
  </div>
</template>
