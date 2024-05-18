<script setup>
/* querying */
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

/* episodes */

const episodeResult = ref(gql`
 query {
  episodes {
    results {
      id
      name
    }
  }
 }
`)
const { result, loading, error } = useQuery(episodeResult);

</script>
<template>
  <div class="container">

    <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
    <p v-if="loading && !error" class="text-center text-3xl">Loading...</p>
    <div  v-else>
      <h1 class=" h1 text-center text-3xl">List of Episodes</h1>
      <div class="c grid grid-cols-3 gap-5 p-5">
        <div v-for="episode in result.episodes.results" :key="episode.id" class="ch">
        <RouterLink :to="`/episodes/${episode.id}`">
          <div class=" e flex justify-evenly items-center">
            <h1 class="h1 text-3xl">Name:</h1> 
            <p class="p text-2xl"> {{ episode.name }}</p> 
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.container {
  background-color: rgba(100, 148, 237, 0.331);
}
.c {
  background-color: rgba(47, 79, 79, 0.624);

}
.h1 {
  margin: 15px;
  font-weight: bold;
}

.whole {
  background-color: rgba(0, 0, 0, 0.666);
}
.whole:hover {
  box-shadow: 2px 2px 2px rgba(245, 245, 245, 0.655);
}

.e {
  background-color: chartreuse;
  height: 200px;
  padding: 5px;
  border-radius: 10px;
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.707);
}
.e:hover {
  box-shadow: 2px 1px 2px blanchedalmond;
  border: 2px solid darkgrey;
}
.p:hover {
  text-decoration: underline;
  color: orange;
}

</style>