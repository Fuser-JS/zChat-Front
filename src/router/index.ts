import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router";
import Home from "../layouts/homePage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
