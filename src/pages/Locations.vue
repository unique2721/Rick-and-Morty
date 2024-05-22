<script setup>
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
/* components */
import Footer from "../components/Footer.vue";
/* route information */
import { useRoute } from "vue-router";
const route = useRoute();
const locationId = ref(parseInt(route.params.id));
/* query only needed data here */
const locationResult = ref(gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      created
      residents {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`);
const { result, loading, error } = useQuery(locationResult, {
  id: locationId, //pass id variable
});
</script>
<template>
  <!-- location details -->
  <h1 class="text-center text-3xl font-bold m-[20px]">Location Details</h1>
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p class="text-center text-3xl my-5" v-else-if="loading && !error">
    Loading...
  </p>
  <div v-else>
    <div
      class="bg-teal-950 py-[30px] flex justify-center items-center flex-col flex-wrap text-white text-3xl leading-10">
      <ul>
        <li>
          Name:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ result.location.name
            }}</span>
        </li>
        <li>
          Type:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ result.location.type
            }}</span>
        </li>
        <li>
          Dimension:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ result.location.dimension
            }}</span>
        </li>
        <li>
          Created:
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ result.location.created
            }}</span>
        </li>
      </ul>
    </div>
    <h3 class="text-center text-3xl m-[20px] font-bold italic">
      Residents in this Location
    </h3>
    <div
      class="bg-slate-700 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5 text-white text-3xl">
      <div v-for="resident in result.location.residents" :key="resident.id">
        <div
          class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-slate-950 flex justify-between items-center flex-nowrap">
          <img :src="`${resident.image}`" :alt="resident.name" class="rounded-tl-lg rounded-bl-lg w-[250px]" />
          <ul class="pr-5">
            <li>
              <p>
                Name:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ resident.name }}</span>
              </p>
              <p>
                Status:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ resident.status }}</span>
              </p>
              <p>
                Species:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ resident.species
                  }}</span>
              </p>
              <p>
                Gender:
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ resident.gender }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
