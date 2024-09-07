import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../layouts/homePage.vue";
import SignUp from "../layouts/signUp.vue";
import SignIn from "../layouts/signIn.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signUp",
    component: SignUp,
  },
  {
    path: "/signIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
