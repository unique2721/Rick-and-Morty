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

// const episodes = ref([]);
// const characters = ref([]);
// const locations = ref([]);

/* episodes */
const {episodes }  = useQuery(gql`
  query {
    episodes {
     results {
      name
     }
   }
 }
  `);

 /* characters */
const {characters }  = useQuery(gql`
  query {
characters {
  results {
    name
  }
}
}
  `);

/* locations */
const {locations }  = useQuery(gql`
 query {
locations {
  results {
    name
  }
}
}

  `);






/* query data for each here */
</script>

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
  
  <!-- carousels -->
  <div>

  </div>
</div>
  
  <!-- list of episodes -->
  <div class="flex justify-between">
    <div>
      <ul>
        <li>Episodes name</li>
      </ul>
    </div>
    <!-- list of characters -->
    <div>
      <ul>
        <li>Characters name</li>
      </ul>
    </div>
    <!-- list of locations -->
    <div>
      <ul>
        <li>Locations name</li>
      </ul>
    </div>

    <!-- <RouterLink
      v-for="episode in episodes"
      :key="episode.id"
      :to="`/episodes/${episode.id}`"
    >
      {{ episode.name }}
    </RouterLink> -->
    <!-- List each character -->
    <!-- <RouterLink
      v-for="character in characters"
      :key="character.id"
      :to="`/characters/${character.id}`"
    >
      {{ character.name }}
    </RouterLink> -->
    <!-- List each location -->
    <!-- <RouterLink
      v-for="location in locations"
      :key="location.id"
      :to="`/locations/${location.id}`"
    >
      {{ location.name }}
    </RouterLink> -->
  </div>
</template>
