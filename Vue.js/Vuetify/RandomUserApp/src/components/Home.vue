<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-account-search"></v-icon> &nbsp; Find User
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      v-model:search="search"
      :items="userStore.users.results"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="showItem(item)">
          mdi-account-box
        </v-icon>
      </template>
      <template v-slot:header.name>
        <div class="text-start">Name</div>
      </template>
      <template v-slot:header.dob>
        <div class="text-end">Age</div>
      </template>
      <template v-slot:header.location>
        <div class="text-center">Address</div>
      </template>
      <template v-slot:item.location="{ item }">
        {{ item.location.city }}. {{ item.location.state }}.
        {{ item.location.country }}
      </template>
      <template v-slot:item.dob="{ item }">
        {{ item.dob.age }}
      </template>
      <template v-slot:item.picture="{ item }">
        <v-card class="my-2" elevation="2" rounded width="64">
          <v-img :src="item.picture.large" cover></v-img>
        </v-card>
      </template>
      <template v-slot:item.name="{ item }">
        {{ item.name.first }}. {{ item.name.last }}
      </template>
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <!-- You answer  -->
        </v-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../stores/UserStore";
import { User } from "../types/user";
const search = ref("");
const userStore = useUserStore();
userStore.fill();
const dialog = ref(false);
const headers = ref([
  { text: "Picture", value: "picture" },
  { text: "Name", value: "name" },
  { text: "location", value: "location" },
  { text: "Age", value: "dob" },
  { title: "Actions", key: "actions", sortable: false },
]);
const curUser = ref<User>({
  name: { first: "", last: "", title: "" },
  email: "",
  location: {
    city: "",
    state: "",
    country: "",
    postcode: "",
    coordinates: { latitude: 0, longitude: 0 },
  },
  dob: { date: "", age: 0 },
  picture: {
    large: "",
    medium: "",
    thumbnail: "",
  },
});
function showItem(item: User) {
  curUser.value = item;
  dialog.value = true;
}
function close() {
  dialog.value = false;
}
</script>
