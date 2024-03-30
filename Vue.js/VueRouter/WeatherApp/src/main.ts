import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Forecast from "./components/Forecast.vue";
import Settings from "./components/Settings.vue";
import Hourly from "./components/Hourly.vue";
import ForecastByZip from "./components/ForecastByZip.vue";

// Step 2A: Define routes and create router instance
const myComponentRoutes = [
  { path: "/", component: Home },
  { path: "/forecast", component: Forecast },
  { path: "/settings", component: Settings },
  { path: "/hourly", component: Hourly },
  {
    name: "ByZip",
    component: ForecastByZip,
    props: true,
    path: "/region/:zipCode/:numDays",
    // path: "/region/:zipCode/next/:numDays",
  },
];
const myRouter = createRouter({
  history: createWebHashHistory(),
  routes: myComponentRoutes,
});

// Step 2B: Use the router with your Vue.js app
createApp(App).use(myRouter).mount("#app");
