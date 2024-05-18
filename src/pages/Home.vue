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

/* characters */
const characterResult = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const { result, loading, error } = useQuery(characterResult);
</script>
/* query data for each here */

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
      <img src="../images//logo.png" alt="">
    </div>
  </div>

  <!-- list of episodes -->

  <!-- list of characters -->
  <div class="i">
    <span class="text-3xl">Characters</span> <input type="text" placeholder="search character by name"  />
  </div>
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p v-if="loading && !error" class="text-center text-3xl">Loading...</p>
  <p v-else class="text-center text-3xl">oops, Something went wrong!!</p>
  <div class="c grid grid-cols-3 gap-5 p-5" v-else>
    <div v-for="character in result.characters.results" :key="character.id" class="ch">
      <RouterLink :to="`/characters/${character.id}`">
      <div class="whole grid grid-cols-3 gap-5 rounded-xl">
        <img :src="character.image" alt="character image" class="rounded-tl-lg rounded-bl-lg h-[200px] w-[400px]" />
          <div class="flex justify-center items-center text-center text-white">
            <h1 class="text-3xl">{{ character.name }}</h1>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.c {
  background-color: darkslategrey;
}

.whole {
  background-color: rgba(0, 0, 0, 0.666);
}
.i {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
input {
  padding: 5px;
  font-size: 1.5rem;
  border: 2px solid;
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
}
</style>


