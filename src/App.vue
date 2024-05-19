<script setup>
/* routing */
import { RouterView } from "vue-router";
/* pages */
import NavBar from "./pages/NavBar.vue";
</script>
<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>
