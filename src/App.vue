<script setup>
/* routing */
import { RouterView } from "vue-router";
/* components */
import NavBar from "./components/NavBar.vue";
</script>
<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>
