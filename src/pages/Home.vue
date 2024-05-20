<script setup>
/* routing */
import { RouterLink } from "vue-router";
/* home page views */
import EpisodeLists from "../components/EpisodeLists.vue";
import CharacterList from "../components/CharacterLists.vue";
import LocationList from "../components/LocationLists.vue";
/* pages */
import Footer from "@/components/Footer.vue";
/* carousels */
import Carousels from '../components/Carousels.vue'
import { Carousel, Slide } from "vue-carousel";
/* carousel images */
</script>
<template>
  <h1 class="text-center text-3xl p-7 font-bold">
    Welcome to <span class="italic">Rick and Morty</span>
  </h1>
  <article class="p-5 flex sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-between bg-yellow-50">
      <div class="text-2xl">
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
      <ul class="text-3xl font-semibold my-10 md:text-center">
        <li>Created by: Justin Roiland and Dan Harmon </li>
        <li>Genere: animated science fiction sitcom</li>
        <li>Stars: Justin Roiland< and Dan Harmon</li>
        <li>Rating: 9.1 / 10</li>
      </ul>
    </div>
    <!-- carousel -->
    <div>
      <Carousels/>
    </div>
  </article>
  <EpisodeLists />
  <!-- list of episodes -->
  <CharacterList />
  <!-- list of characters -->
  <LocationList />
  <!-- list of locations -->
  <Footer/>
</template>

