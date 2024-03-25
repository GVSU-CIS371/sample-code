<template>
  <div class="user-detail">
    <div class="user-image">
      <img :src="user!.picture.large" alt="User Picture" />
    </div>
    <div class="user-info">
      <h2>{{ user!.name.first }} {{ user!.name.last }}</h2>
      <p><strong>Age:</strong> {{ user!.dob?.age }} years old.</p>
      <p>
        <strong>Location:</strong> {{ user!.location.coordinates.latitude }},
        {{ user!.location.coordinates.longitude }}
      </p>
    </div>
    <button @click="goBack" class="back-button">Go Back</button>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import { randomUsers } from "../data/usersData";
import { useRouter } from "vue-router";
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
.user-detail {
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 800px;
  margin: 40px auto;
}

.user-image img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 2px solid #ccc;
  margin-right: 20px;
}

.user-info {
  flex: 1;
}

.user-info h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.user-info p {
  margin: 10px 0;
  font-size: 18px;
  line-height: 1.5;
}
</style>
