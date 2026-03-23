<template>
  <section class="stack">
    <h1>Forecast</h1>
    <p>
      The Hourly route uses a <code>beforeEnter</code> guard that requires
      <code>?unlocked=yes</code>.
    </p>

    <p v-if="guardNotice" class="guard-note">{{ guardNotice }}</p>

    <div class="stack">
      <router-link to="/hourly">Try Hourly without unlock</router-link>
      <router-link :to="{ name: 'Hourly', query: { unlocked: 'yes' } }">
        Enter Hourly with unlock query
      </router-link>
      <button @click="openStationByZip">Programmatic dynamic route</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const guardNotice = computed(() =>
  typeof route.query.guardNotice === "string" ? route.query.guardNotice : "",
);

function openStationByZip() {
  router.push({
    name: "StationByZip",
    params: { zipCode: "49503", days: "5" },
  });
}
</script>

<style scoped>
.guard-note {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  background: #e9f3ff;
  border: 1px solid #b9d8ff;
}
</style>
