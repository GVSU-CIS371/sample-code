import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   // COPY this from your Firebase Console
//   apiKey: "your-api-key-goes-here",
//   authDomain: "your-project-name-here.firebaseapp.com",
//   databaseURL: "https://your-project-name-here.firebaseio.com",
//   projectId: "your-project-name-here",
//   storageBucket: "your-project-name.appspot.com",
//   messagingSenderId: "xxxxxxxx",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF-CRMH-LsqbrVSB5ZF_eBUYU8P-kdAIE",
  authDomain: "cis371-demo-770dc.firebaseapp.com",
  projectId: "cis371-demo-770dc",
  storageBucket: "cis371-demo-770dc.appspot.com",
  messagingSenderId: "988644841148",
  appId: "1:988644841148:web:3b246d80be5da0bccb62b9",
  measurementId: "G-X2KWMBZYFB",
};
initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
