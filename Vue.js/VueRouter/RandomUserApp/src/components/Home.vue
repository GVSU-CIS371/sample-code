<template>
  <table class="user-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Location</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, idx) in randomUsers" :key="idx">
        <td>
          <router-link :to="`/detail/${user.id}`">
            {{ user.name.first }} {{ user.name.last }}
          </router-link>
        </td>
        <td>{{ user.dob?.age }}</td>
        <td>{{ user.location?.coordinates.latitude }}</td>
        <td>
          <button class="edit-button" @click="editUser(user.id)">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { randomUsers } from "../data/usersData";
import { useRouter } from "vue-router";
const rt = useRouter();

function editUser(uid: string) {
  rt.push({ name: "editById", params: { id: uid } });
}
</script>

<style scoped>
.user-table {
  border-collapse: collapse;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.user-table th,
.user-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.user-table th {
  background-color: #140230;
  color: white;
}

.user-table tr:hover {
  background-color: #eee;
}

.edit-button {
  padding: 5px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
