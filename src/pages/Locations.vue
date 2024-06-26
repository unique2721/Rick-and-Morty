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
  <h1 class="text-center text-3xl font-bold p-5 text-white bg-slate-800">Location Details</h1>
  <p class="text-center text-3xl" v-if="error">Error: {{ error.message }}</p>
  <p class="text-center text-3xl my-5" v-else-if="loading && !error">
    Loading...
  </p>
  <div v-else>
    <div
      class="bg-slate-900 py-[30px] flex justify-center items-center flex-col flex-wrap text-white text-3xl leading-10">
      <ul>
        <li>
          <span class=" text-green-500">
            Name:
          </span>
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[150px]">{{ result.location.name
            }}</span>
        </li>
        <li>
          <span class=" text-green-500">
            Type:
          </span>
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[150px]">{{ result.location.type
            }}</span>
        </li>
        <li>
          <span class=" text-green-500">
            Dimension:
          </span>
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[150px]">{{ result.location.dimension
            }}</span>
        </li>
        <li>
          <span class=" text-green-500">
            Created:
          </span>
          <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[150px]">{{ result.location.created
            }}</span>
        </li>
      </ul>
    </div>
    <h3 class="text-center text-3xl p-5 text-white bg-slate-950 font-bold italic">
      Residents in this Location
    </h3>
    <div
      class="bg-slate-950 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 p-5 text-white text-2xl">
      <div v-for="resident in result.location.residents" :key="resident.id">
        <div
          class="hover:border-2 shadow-md border-emerald-50 rounded-xl bg-slate-900 flex justify-between items-center flex-nowrap">
          <img :src="`${resident.image}`" :alt="resident.name"
            class="rounded-tl-lg rounded-bl-lg sm:w-[250px] md:w-[250px] lg:w-[200px]" />
          <ul class="pr-5">
            <li>
              <p>
                <span class=" text-green-500">
                  Name:
                </span>
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ resident.name }}</span>
              </p>
              <p>
                <span class=" text-green-500">
                  Status:
                </span>
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">
                  {{ resident.status }}</span>
              </p>
              <p>
                <span class=" text-green-500">
                  Species:
                </span>
                <span class="hover:italic hover:text-orange-500 hover:cursor-pointer ml-[50px]">{{ resident.species
                  }}</span>
              </p>
              <p>
                <span class=" text-green-500">
                  Gender:
                </span>
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
