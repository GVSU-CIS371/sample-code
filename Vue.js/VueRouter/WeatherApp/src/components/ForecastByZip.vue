<template>
  <h1>{{ numDays }}-day forecast for ZIP code {{ zipCode }}</h1>
</template>
<script setup lang="ts">
type ForecastDetailType = {
  zipCode: string;
  numDays: number;
};
defineProps<ForecastDetailType>();
</script>
