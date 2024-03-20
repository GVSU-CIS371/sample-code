<script setup lang="ts">
import { useItemStore } from "./stores/ItemStore";
import { useCartStore } from "./stores/CartStore";
import StoreItem from "./components/StoreItem.vue";
import { Product } from "./types";
const itemStore = useItemStore();
const cartStore = useCartStore();
const addToCart = (count: number, product: Product) => {
  cartStore.$patch((state) => {
    for (let i = 0; i < count; i++) {
      state.products.push(product);
    }
  });
};
</script>
<template>
  <ul>
    <li
      v-for="(item, idx) in itemStore.items"
      :key="`item-${idx}`"
      :item="item"
    >
      <StoreItem :item="item" @addToCart="addToCart($event, item)" />
    </li>
  </ul>

  <div class="cart">
    <h2>Cart Items</h2>
    <ul>
      <li v-for="(item, idx) in cartStore.products" :key="`cart-item-${idx}`">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
