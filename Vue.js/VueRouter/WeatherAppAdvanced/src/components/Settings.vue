<template>
  <section class="stack">
    <h1>Settings</h1>
    <p>
      This page demonstrates a component-level guard using
      <code>onBeforeRouteLeave</code>.
    </p>

    <label for="cityInput">Preferred city</label>
    <input id="cityInput" v-model="preferredCity" placeholder="Grand Rapids" />

    <label>
      <input v-model="hasUnsavedChanges" type="checkbox" />
      I have unsaved changes
    </label>

    <button @click="saveChanges">Simulate Save</button>
    <router-link to="/forecast">Try leaving this page</router-link>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const preferredCity = ref("Allendale");
const hasUnsavedChanges = ref(false);

function saveChanges() {
  hasUnsavedChanges.value = false;
}

onBeforeRouteLeave(() => {
  if (!hasUnsavedChanges.value) {
    return true;
  }

  return window.confirm("You have unsaved changes. Leave this page anyway?");
});
</script>
