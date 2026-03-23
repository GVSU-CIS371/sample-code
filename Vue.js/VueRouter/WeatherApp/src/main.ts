import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Forecast from "./components/Forecast.vue";
import Settings from "./components/Settings.vue";
import Hourly from "./components/Hourly.vue";
import ForecastByZip from "./components/ForecastByZip.vue";

// Step 2A: Define routes and create router instance
const routes = [
  { path: "/", component: Home },
  { path: "/forecast", component: Forecast },
  { path: "/settings", component: Settings },
  { path: "/hourly", component: Hourly },
  {
    name: "ForecastByZip",
    component: ForecastByZip,
    props: true,
    path: "/region/:zipCode/:numDays",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Step 2B: Use the router instance in the Vue app
createApp(App).use(router).mount("#app");
