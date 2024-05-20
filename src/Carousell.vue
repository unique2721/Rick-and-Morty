<template>
    <div>
      <carousel :autoplay="true" :autoplay-timeout="3000"> <!-- Set autoplay to true and specify autoplay timeout -->
        <slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" alt="Carousel Image" />
        </slide>
      </carousel>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue-carousel';
  
  export default {
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        images: [
          { src: 'path/to/image1.jpg' },
          { src: 'path/to/image2.jpg' },
          { src: 'path/to/image3.jpg' },
          // Add more image objects as needed
        ]
      };
    },
  };
  </script>
  