<template>
  <section>
    <h1>Forecast</h1>
    <p>
      Use this page to compare a direct <code>router-link</code> with a button
      that calls <code>router.push()</code>.
    </p>
    <div class="actions">
      <router-link to="/hourly">Open Hourly (router-link)</router-link>
      <button @click="goToHourly">Open Hourly (router.push)</button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToHourly() {
  router.push({ path: "/hourly" });
}
</script>
<style scoped>
.actions {
  display: grid;
  gap: 0.75rem;
  align-items: start;
}
</style>
