<template>
  <section class="stack">
    <h1>Home</h1>
    <p>
      This advanced version demonstrates route transitions, named views, and
      navigation guards.
    </p>

    <p v-if="notice" class="notice">{{ notice }}</p>

    <div class="stack">
      <router-link to="/forecast">Go to Forecast</router-link>
      <router-link :to="{ name: 'StationByZip', params: { zipCode: '49423', days: '4' } }">
        Open dynamic route: station 49423 for 4 days
      </router-link>
      <button @click="openAlertsWithoutPasscode">Open Alerts (guard should redirect)</button>
      <button @click="openAlertsWithPasscode">Open Alerts (with passcode)</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const notice = computed(() =>
  typeof route.query.notice === "string" ? route.query.notice : "",
);

function openAlertsWithoutPasscode() {
  router.push({ name: "Alerts" });
}

function openAlertsWithPasscode() {
  router.push({ name: "Alerts", query: { passcode: "gvsu" } });
}
</script>

<style scoped>
.notice {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  background: #fff2cf;
  border: 1px solid #f4d37d;
}
</style>
