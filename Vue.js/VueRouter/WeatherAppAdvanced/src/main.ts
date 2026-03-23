import { createApp } from "vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Forecast from "./components/Forecast.vue";
import Hourly from "./components/Hourly.vue";
import Settings from "./components/Settings.vue";
import StationByZip from "./components/StationByZip.vue";
import AlertsCenter from "./components/AlertsCenter.vue";
import NotFound from "./components/NotFound.vue";
import GuideSidebar from "./components/GuideSidebar.vue";
import ForecastSidebar from "./components/ForecastSidebar.vue";
import SettingsSidebar from "./components/SettingsSidebar.vue";
import AlertsSidebar from "./components/AlertsSidebar.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      sidebar: GuideSidebar,
    },
    meta: { transition: "fade" },
  },
  {
    path: "/forecast",
    name: "Forecast",
    components: {
      default: Forecast,
      sidebar: ForecastSidebar,
    },
    meta: { transition: "slide-left" },
  },
  {
    path: "/hourly",
    name: "Hourly",
    components: {
      default: Hourly,
      sidebar: ForecastSidebar,
    },
    meta: { transition: "slide-up" },
    // Route-level guard:
    // this page requires query ?unlocked=yes
    beforeEnter: (to) => {
      if (to.query.unlocked !== "yes") {
        return {
          name: "Forecast",
          query: { guardNotice: "Add ?unlocked=yes to enter Hourly route." },
        };
      }
      return true;
    },
  },
  {
    path: "/settings",
    name: "Settings",
    components: {
      default: Settings,
      sidebar: SettingsSidebar,
    },
    meta: { transition: "fade" },
  },
  {
    path: "/station/:zipCode/:days",
    name: "StationByZip",
    components: {
      default: StationByZip,
      sidebar: GuideSidebar,
    },
    props: {
      default: true,
      sidebar: false,
    },
    meta: { transition: "slide-left" },
  },
  {
    path: "/alerts",
    name: "Alerts",
    components: {
      default: AlertsCenter,
      sidebar: AlertsSidebar,
    },
    meta: {
      transition: "fade",
      requiresPasscode: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    components: {
      default: NotFound,
      sidebar: GuideSidebar,
    },
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Global guard:
// /alerts requires ?passcode=gvsu
router.beforeEach((to) => {
  if (to.meta.requiresPasscode && to.query.passcode !== "gvsu") {
    return {
      name: "Home",
      query: { notice: "Use ?passcode=gvsu to access Alerts." },
    };
  }
  return true;
});

createApp(App).use(router).mount("#app");
