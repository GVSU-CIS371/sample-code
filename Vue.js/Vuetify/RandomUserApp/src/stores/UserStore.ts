import { defineStore } from "pinia";
import { RandomUsers } from "../types/user";

export const useUserStore = defineStore("UserStore", {
  state: () => {
    return { users: { results: [] } as RandomUsers };
  },

  actions: {
    async fill() {
      const res = await fetch(
        "https://randomuser.me/api?results=30&nat=gb,fr&inc=name,email,picture,location,dob"
      );
      this.users = await res.json();
    },
  },
});
