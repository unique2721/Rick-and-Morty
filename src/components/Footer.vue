<script setup>
const date = new Date().getFullYear();
</script>
<template>
<div class=" bg-green-950 text-white py-5 scroll-smooth">
    <h1 class="text-center font-bold text-3xl py-5 italic">Links</h1>
    <div class="flex justify-center items-center">
        <p class="text-3xl mr-5 italic"> &copy; {{date}} Gebremariam Kidane</p>
        <a href="https://github.com/unique2721/Rick-and-Morty" target="_blank" class="flex mr-10">
            <h1 class="mr-2 text-2xl">Github: </h1>
            <img src="../images/gitlogo.png" width="30px" height="30px" alt="git hub logo" class="rounded-full">
        </a>
          <a href="https://www.figma.com/proto/TPeEDafSEYvuq6d5GWoNJJ/Rick-and-Morty?node-id=1-176&t=D7Gh7x9EdgdePx3n-0&scaling=min-zoom&page-id=0%3A1" target="_blank" class="flex cursor-pointer">
            <h1 class="text-3xl mr-2">Figma: </h1>
            <img src="../images/figmalogo.png" width="40px" height="25px" alt="figma logo" class="rounded-full">
          </a>
    </div>
</div>
</template>