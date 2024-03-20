import { defineStore } from "pinia";
import { Product } from "../types";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return { products: [] as Product[] };
  },
  persist: true,
});
