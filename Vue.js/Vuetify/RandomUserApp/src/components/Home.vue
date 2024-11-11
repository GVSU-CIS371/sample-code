<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-account-search"></v-icon>
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
      :headers="[
        { title: 'Picture', key: 'picture', sortable: false },
        { title: 'Name', key: `name`, sortable: false },
        { title: 'Location', key: 'location', sortable: false },
        { title: 'Age', key: 'dob', sortable: false },
        { title: 'Actions', key: 'actions', sortable: false },
      ]"
      :search="search"
      :items="userStore.users.results"
      item-value="name.first"
      :filter-keys="['name.first', 'name.last']"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-img
              :src="item.picture.thumbnail"
              max-width="50"
              max-height="50"
              cover
            ></v-img>
          </td>
          <td>{{ item.name.first }}. {{ item.name.last }}</td>
          <td>
            {{ item.location.city }}. {{ item.location.state }}.
            {{ item.location.country }}
          </td>
          <td>{{ item.dob.age }}</td>
          <td>
            <v-icon class="me-2" size="small" @click="showDetails(item)">
              mdi-account-box
            </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="400px">
      <!-- You answer ...  -->
    </v-dialog>
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
</script>
