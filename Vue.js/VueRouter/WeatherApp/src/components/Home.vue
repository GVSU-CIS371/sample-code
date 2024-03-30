<template>
  <div>
    <h1>Home</h1>
    <a href="#">For your comparison</a> |
    <router-link to="/forecast">Forecast</router-link> |
    <router-link to="/region/49428/7">Forecast by Zip 1</router-link> |
    <router-link to="/settings">Settings</router-link>
    <button @click="checkAtZip">Forecast by Zip 2</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const appNav = useRouter();
function checkAtZip() {
  appNav.push({
    name: "ByZip",
    params: { zipCode: "48823", numDays: 10 },
  });
}
</script>
