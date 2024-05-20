<template>
    <div>
      <carousel :autoplay="true" :autoplay-timeout="3000"> <!-- Set autoplay to true and specify autoplay timeout -->
        <slide>
          <img src="./images/logo.png.png" alt="Carousel Image" />
        </slide>
      </carousel>
    </div>
  </template>
  
  <script setup>
  import { Carousel, Slide } from 'vue-carousel';
  </script>
  