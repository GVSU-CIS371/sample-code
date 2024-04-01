import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Home from "./components/Home.vue";

// Define routes
const myComponentRoutes = [{ path: "/", component: Home }];

// Create router instance
const myRouter = createRouter({
  history: createWebHashHistory(),
  routes: myComponentRoutes,
});
const pinia = createPinia();

const vuetify = createVuetify({
  icons: { defaultSet: "mdi", aliases, sets: { mdi, fa } },
  components,
  directives,
});

// Boot the app
createApp(App).use(myRouter).use(pinia).use(vuetify).mount("#app");
