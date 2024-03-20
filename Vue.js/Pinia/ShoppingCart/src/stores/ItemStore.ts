import { defineStore } from "pinia";
import products from "../data/products.json";
import { Product } from "../types";

export const useItemStore = defineStore("ItemStore", {
  state: () => {
    return { items: products as Product[] };
  },
});
