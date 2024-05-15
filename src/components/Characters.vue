<script setup>
/* query only needed data here */
</script>

<template>
  <h1>Characters page</h1>
  <div>
    <h1>Character Details</h1>
    <!-- Show character details -->
    <h2>Episodes Participated</h2>
    <ul>
      <li v-for="episode in character.episodes" :key="episode.id">
        <p>Name: {{ episode.name }}</p>
        <p>Air Date: {{ episode.air_date }}</p>
        <p>Episode: {{ episode.episode }}</p>
        <p>Created: {{ episode.created }}</p>
      </li>
    </ul>
    <h2>Last Known Location</h2>
    <p>Name: {{ character.lastLocation.name }}</p>
    <p>Type: {{ character.lastLocation.type }}</p>
    <p>Dimension: {{ character.lastLocation.dimension }}</p>
  </div>
</template>
