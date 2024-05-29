<script setup>
/* routing */
import { RouterLink } from 'vue-router'
</script>
<template>
    <div
        class="flex justify-between items-center flex-wrap sticky top-0 z-10 bg-slate-600 text-white md:justify-center lg:justify-between">
        <img src="../images/logo.png" alt="Rick and morty logo" class=" h-20 ml-[20px] sm:hidden md:hidden lg:block">
        <div class="flex justify-center items-center m-[20px]">
        </div>
        <ul class="flex p-[10px]">
            <li class=" px-10 text-xl hover:italic hover:text-slate-300">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class=" px-10 text-xl hover:italic hover:text-slate-300">
                <RouterLink to="/episodes">Episodes</RouterLink>
            </li>
            <li class=" px-10 text-xl hover:italic hover:text-slate-300">
                <RouterLink to="/characters">Characters</RouterLink>
            </li>
            <li class=" px-10 text-xl hover:italic hover:text-slate-300">
                <RouterLink to="/locations">Locations</RouterLink>
            </li>
        </ul>
    </div>
</template>
