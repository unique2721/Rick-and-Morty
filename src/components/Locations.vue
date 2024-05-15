<script setup></script>

<template>
  <div class="location">
    <h1>Location Details</h1>
    <!-- Show location details -->
    <h2>Residents</h2>
    <ul>
      <li v-for="resident in location.residents" :key="resident.id">
        <img :src="resident.image" alt="resident.name" style="width: 100px" />
        <p>Name: {{ resident.name }}</p>
        <p>Status: {{ resident.status }}</p>
        <p>Species: {{ resident.species }}</p>
        <p>Gender: {{ resident.gender }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
