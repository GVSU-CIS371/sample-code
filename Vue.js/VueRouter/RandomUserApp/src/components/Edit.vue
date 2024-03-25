<template>
  <div class="container">
    <button @click="goBack">Go Back</button>
    <div class="user-image">
      <img :src="user!.picture.large" alt="User Picture" />
    </div>
    <div class="edit-section">
      <div class="field">
        <label>Name:</label>
        <input type="text" v-model="user!.name.first" />
      </div>

      <div class="field">
        <label>Age:</label>
        <input
          type="range"
          v-model.number="user!.dob.age"
          min="1"
          max="100"
          step="2"
        />
        <span>{{ user!.dob.age }} years old</span>
      </div>

      <div class="field">
        <label>Latitude:</label>
        <input
          type="text"
          v-model.number="user!.location.coordinates.latitude"
        />
      </div>

      <div class="field">
        <label>Longitude:</label>
        <input
          type="text"
          v-model.number="user!.location.coordinates.longitude"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";
import { randomUsers } from "../data/usersData";
const { id } = defineProps({
  id: String,
});
const user = computed(() => randomUsers.value.find((u) => u.id === id));
const router = useRouter();

function goBack() {
  router.back();
}
</script>
<style scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  margin: 40px auto;
}

.user-image img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 2px solid #ccc;
}

.edit-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.field {
  display: flex;
  gap: 10px;
  align-items: center;
}

.field label {
  width: 80px;
  font-weight: bold;
}

button {
  padding: 8px 15px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
