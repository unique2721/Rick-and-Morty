<script setup>
import {ref} from 'vue'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
const episodes = ref([])
const {result }  = useQuery(gql`
query {
episodes {
  results {
    name
    air_date
    episode
    created
    characters {
      name
      status
      species
      gender
      image
    }
  }
}
}
`);
console.log

</script>

<template>
  <h1>Episode Details</h1>
  <div v-for="episode in result?.episodes || []">
    <h1>Name: {{ episode[0].name }}</h1>
    <p>Air Date: {{ episode[0].air_date }}</p>
    <p>Episode: {{ episode[0].episode }}</p>
    <p>Created: {{ episode[0].created }}</p>
    <h2>Characters in this Episode</h2>
    <ul>
      <li v-for="character in episode.characters" :key="character.id">
        <img :src="character.image" alt="character.name" style="width: 100px" />
        <p>Name: {{ character[0].name }}</p>
        <p>Status: {{ character[0].status }}</p>
        <p>Species: {{ character[0].species }}</p>
        <p>Gender: {{ character[0].gender }}</p>
      </li>
    </ul>
  </div>
</template>
