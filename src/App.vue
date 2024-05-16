<script setup>
/* routing */
import { RouterView } from "vue-router";
/* components */
import NavBar from "./pages/NavBar.vue";
import bit from './pages/bit.vue'
</script>

<template>
  <!-- <bit/> -->
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
