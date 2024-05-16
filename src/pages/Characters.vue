<script setup>
/* query only needed data here */
import {ref} from 'vue'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const characters = ref([]);
const {result:charactersResult }  = useQuery(gql`
  query {
  characters {
    results {
      id
      name
      status
      species
      gender
      image
      episode {
        name
        air_date
        episode
        created
      }
      location {
        name
        type
        dimension
      }
    }
  }
}
  `);

</script>

<template>
  <h1>Character Details</h1>

  <div v-for="character in charactersResult?.characters || []">
    <!-- Show character details -->
    <img :src="character.image" :alt="character.name" style="width: 100px" />
    <h1>Name: {{ character.name }}</h1>
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <h2>Episodes Participated</h2>
    <ul>
      <li v-for="episod in character.episode" :key="episode.id">
        <p>Name: {{ episod.name }}</p>
        <p>Air Date: {{ episod.air_date }}</p>
        <p>Episode: {{ episod.episode }}</p>
        <p>Created: {{ episod.created }}</p>
      </li>
    </ul>
    <h2>Last Known Location</h2>
     
  </div>
</template>
