import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Edit from "./components/Edit.vue";

// Define routes
const myComponentRoutes = [
  { path: "/", component: Home },
  { path: "/detail/:id", component: Detail, props: true },
  { name: "editById", path: "/edit/:id", component: Edit, props: true },
];

// Create router instance
const myRouter = createRouter({
  history: createWebHashHistory(),
  routes: myComponentRoutes,
});

// Boot the app
createApp(App).use(myRouter).mount("#app");
