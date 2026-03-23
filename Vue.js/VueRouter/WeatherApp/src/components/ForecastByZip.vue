<template>
  <section>
    <h1>Forecast by ZIP</h1>
    <p>ZIP code (route param): {{ zipCode }}</p>
    <p>Number of days (raw param): {{ numDays }}</p>
    <p v-if="parsedDays !== null">Number of days (parsed number): {{ parsedDays }}</p>
    <router-link to="/">Back to Home</router-link>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";

type ForecastRouteParams = {
  zipCode: string;
  numDays: string;
};

const props = defineProps<ForecastRouteParams>();

const parsedDays = computed(() => {
  const value = Number.parseInt(props.numDays, 10);
  return Number.isNaN(value) ? null : value;
});
</script>
