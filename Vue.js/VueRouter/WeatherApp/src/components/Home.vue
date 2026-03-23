<template>
  <section>
    <h1>Home</h1>
    <p>
      This page shows two navigation styles: declarative links and programmatic
      routing.
    </p>
    <nav class="links">
      <router-link to="/forecast">Go to Forecast (router-link)</router-link>
      <router-link
        :to="{ name: 'ForecastByZip', params: { zipCode: '49428', numDays: '7' } }"
      >
        View ZIP 49428 forecast
      </router-link>
      <router-link to="/settings">Open Settings</router-link>
    </nav>
    <button @click="openForecastByZip">
      Programmatic nav: ZIP 48823 for 10 days
    </button>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function openForecastByZip() {
  router.push({
    name: "ForecastByZip",
    params: { zipCode: "48823", numDays: "10" },
  });
}
</script>
<style scoped>
.links {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
</style>
