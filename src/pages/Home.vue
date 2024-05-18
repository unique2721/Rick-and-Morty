<script setup>
/* routing */
import { RouterLink } from "vue-router";
/* home page views */
import EpisodeLists from "../homepageviews/EpisodeLists.vue";
import CharacterList from "../homepageviews/CharacterLists.vue";
import LocationList from "../homepageviews/LocationLists.vue";

/* carousels */
import { Carousel, Slide } from "vue-carousel";
import { Location } from "graphql";
/* carousel images */
</script>
<template>
  <div class="p-5 flex justify-between">
    <div>
      <h1 class="text-center text-3xl p-7 font-bold">
        Welcome to <span>Rick and Morty</span>
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
    <div>
      <img src="../images//logo.png" alt="" />
    </div>
  </div>
  <EpisodeLists />
  <!-- list of episodes -->
  <CharacterList />
  <!-- list of characters -->
  <LocationList />
  <!-- list of locations -->
</template>

<style scoped></style>
