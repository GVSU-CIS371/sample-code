<template>
  <div class="item">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <span>Price: {{ item.price }}</span>
    <div class="quantity-selector">
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="count" min="0" max="5" />
    </div>
    <button @click="$emit('addToCart', count), (count = 0)">Add to Cart</button>
  </div>
</template>
<script setup lang="ts">
import { definEmits, ref } from "vue";
import { Product } from "../types";
const { item } = defineProps<{ item: Product }>();
defineEmits(["addToCart"]);
const count = ref(0);
</script>
<!-- https://stackblitz.com/edit/vitejs-vite-3jymwy?file=src%2Fstores%2FItemStore.ts,src%2Fdata%2Fproducts.json,src%2Fcomponents%2FStoreItem.vue,src%2Ftypes.ts,src%2FApp.vue -->
