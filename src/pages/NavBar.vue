<script setup>
/* routing */
import {RouterLink} from 'vue-router'

</script>

<template>
    <div class="flex justify-between items-center">
        <img src="../images/logo.png" alt="Rick and morty logo" class=" h-20 italic ml-[20px]">
        <div class="i">
        <input type="text" placeholder="search by name"  />
        </div>
        <ul class="flex p-10">
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/">Home</RouterLink></li>
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/episodes">Episodes</RouterLink></li>
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/characters">Characters</RouterLink></li>
            <li class=" px-10 text-xl"><RouterLink active-class="active" to="/locations">Locations</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
.active {
    background-color: rgba(0, 0, 0, 0.225);
}

.i {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
input {
  padding: 5px;
  font-size: 1.5rem;
  border: 2px solid;
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
}
</style>
