import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // COPY this from your Firebase Console
  apiKey: "your-api-key-goes-here",
  authDomain: "your-project-name-here.firebaseapp.com",
  databaseURL: "https://your-project-name-here.firebaseio.com",
  projectId: "your-project-name-here",
  storageBucket: "your-project-name.appspot.com",
  messagingSenderId: "xxxxxxxx",
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
