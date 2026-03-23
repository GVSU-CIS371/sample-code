<template>
  <section class="stack">
    <h1>Station Details</h1>
    <p>ZIP route param: {{ zipCode }}</p>
    <p>Days route param (raw): {{ days }}</p>
    <p v-if="parsedDays !== null">Days route param (parsed): {{ parsedDays }}</p>
    <router-link to="/forecast">Back to Forecast</router-link>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

type StationByZipProps = {
  zipCode: string;
  days: string;
};

const props = defineProps<StationByZipProps>();

const parsedDays = computed(() => {
  const value = Number.parseInt(props.days, 10);
  return Number.isNaN(value) ? null : value;
});
</script>
