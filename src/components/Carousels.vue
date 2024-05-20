<script setup>
import img from '../images/logo.png';
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
const images = ref([
"https://rickandmortyapi.com/api/character/avatar/10.jpeg",
"https://rickandmortyapi.com/api/character/avatar/9.jpeg"]);
</script>

<template>
    <div>
        <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt="" class="rounded-lg mx-2 sm:h-[300px] sm:w-[1000px] md:h-[400px] lg:w-[2000px] lg:h-[475px] xl:h-[500px] xl:w-[3000px]"> 
       <!--  <Carousel :autoplay="true">
            <Slide v-for="(image,index) in images" :key="index" class="flex">
                <div class="e">
                    <img class="rounded-lg mx-2 sm:h-[300px] sm:w-[1000px] md:h-[400px] lg:w-[2000px] lg:h-[475px] xl:h-[500px] xl:w-[3000px]"  :src="image" alt="Slide">
                </div>
                </Slide>
        </Carousel> -->
    </div>
</template>

<style scoped>

</style>