<template>
  <div>
    <h1>Forecast</h1>
    <router-link to="/hourly">Hourly</router-link>
    <button @click="canIHourly">Prime hourly</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
let prime_membership_is_confirmed = true;
const appNav = useRouter();
function canIHourly() {
  if (prime_membership_is_confirmed) {
    appNav.push({ path: "/hourly" });
  }
}
</script>
