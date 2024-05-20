<script setup>
/* routing */
import { RouterLink } from "vue-router";
/* home page views */
import EpisodeLists from "../homepageviews/EpisodeLists.vue";
import CharacterList from "../homepageviews/CharacterLists.vue";
import LocationList from "../homepageviews/LocationLists.vue";
/* pages */
import Footer from "@/pages/Footer.vue";
/* carousels */
import { Carousel, Slide } from "vue-carousel";
/* carousel images */
</script>
<template>
  <div class="p-5 flex justify-between bg-yellow-50">
    <div>
      <h1 class="text-center text-3xl p-7 font-bold">
        Welcome to <span class="italic">Rick and Morty</span>
      </h1>
      <article class="text-2xl">
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
    </article>
    <div>
      <ul class="text-3xl font-semibold my-10">
        <li>Created by: Justin Roiland and Dan Harmon </li>
        <li>Genere: animated science fiction sitcom</li>
        <li>Stars: Justin Roiland< and Dan Harmon</li>
        <li>Rating: 9.1 / 10</li>
      </ul>
    </div>
    </div>
    <!-- carousel -->
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
  <Footer/>
</template>

