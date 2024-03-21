<script setup lang="ts">
import Timer from "./components/Timer.vue";
</script>

<template>
  <h1>Hello Stylish Timers</h1>

  <div id="timers">
    <Timer :updateInterval="100" :faceColor="`red`"></Timer>
    <Timer :startLabel="`Go`"></Timer>
  </div>
</template>
<style>
#timers {
  display: flex;
  justify-content: space-evenly;
}
</style>
