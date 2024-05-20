<script setup>
/* routing */
import {RouterLink} from 'vue-router'
</script>
<template>
    <div class="flex justify-between items-center flex-wrap sticky top-0 z-10 bg-slate-600 text-white">
        <img src="../images/logo.png" alt="Rick and morty logo" class=" h-20 italic ml-[20px]">
        <div class="flex justify-center items-center m-[20px]">
        </div>
        <ul class="flex p-[10px]">
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/">Home</RouterLink></li>
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/episodes">Episodes</RouterLink></li>
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/characters">Characters</RouterLink></li>
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/locations">Locations</RouterLink></li>
        </ul>
    </div>
</template>
<style scoped>
li:hover {
    color: rgba(240, 248, 255, 0.666);
    font-style: italic;
}
</style>

