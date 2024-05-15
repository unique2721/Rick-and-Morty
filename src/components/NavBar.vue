<script setup>
/* routing */
import {RouterLink} from 'vue-router'

</script>

<template>
    <div class="flex justify-between">
        <img src="" alt="logo">
        <ul class="flex p-10">
            <li class="p-10 text-2xl"><RouterLink active-class="active" to="/">Home</RouterLink></li>
            <li class="p-10 text-2xl"><RouterLink active-class="active" to="/episodes">Episodes</RouterLink></li>
            <li class="p-10 text-2xl"><RouterLink active-class="active" to="/characters">Characters</RouterLink></li>
            <li class="p-10 text-2xl"><RouterLink active-class="active" to="/locations">Locations</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
.active {
    background-color: rgba(0, 0, 0, 0.225);
}
</style>
