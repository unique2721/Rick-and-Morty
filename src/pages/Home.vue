<script setup>
/* routing */
import { RouterLink } from "vue-router";
/* carousels */
import { Carousel, Slide } from "vue-carousel";
/* carousel images */
import images from "../data/images.json";
/* querying */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";



/* episodes */

const {
  result: episodesResult,
  loading,
  error,
} = useQuery(gql`
  query {
    episodes {
      results {
        name
      }
    }
  }
`);

/* characters */
const { result: charactersResult } = useQuery(gql`
  query {
    characters {
      results {
        name
        image
      }
    }
  }
`);

/* locations */
const { result: locationsResult } = useQuery(gql`
  query {
    locations {
      results {
        name
      }
    }
  }
`);
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
        The series premiered on December 2, 2013, on Cartoon Network's
        late-night programming block, Adult Swim. It has since gained a massive
        cult following for its clever writing, unique humor, and imaginative
        storytelling.
      </p>
      <p>
        Rick and Morty has received critical acclaim for its originality,
        creativity, and emotional depth, as well as its exploration of
        existential themes and philosophical concepts.
      </p>
      <p>
        The show has won numerous awards, including the Primetime Emmy Award for
        Outstanding Animated Program, and has been praised by critics and
        audiences alike for its groundbreaking approach to animation and
        storytelling.
      </p>
      <p>
        With its eclectic mix of humor, wit, and thought-provoking ideas, Rick
        and Morty has become one of the most beloved and influential animated
        series of the 21st century.
      </p>
      <h3>
        created by: <strong>Justin Roiland</strong> and
        <strong>Dan Harmon</strong>
      </h3>
      <h3>Genere: <strong>animated science fiction sitcom</strong></h3>
      <h3>
        Stars: <strong>Justin Roiland</strong> and <strong>Dan Harmon</strong>
      </h3>
      <h3>rating: <strong>9.1</strong> / <strong>10</strong></h3>
    </div>
    <-- carousel of images -->
  </div>
  <div class="flex justify-between">
    <!-- list of episodes -->
    <div v-if="loading">
      <p>loading...</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
    <div v-else>
      <div v-for="episode in episodesResult?.episodes || []" class="text-xl">
        <RouterLink :to="`/episodes/${episode.id}`" class="episodes">
          <p class="e">{{ episode }}</p>
        </RouterLink>
      </div>

      <!-- list of characters -->
      <div v-for="character in charactersResult?.characters || []">
        <RouterLink :to="`/characters/${character.id}`">
          <p>{{ character }}</p>
        </RouterLink>
      </div>

      <!-- list of locations -->
      <div v-for="location in locationsResult?.locations || []">
        <RouterLink :to="`/locations/${location.id}`">
          <p>{{ location }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.e {
  margin-left: 20px;
  font-size: 1.3rem;
}
</style>
