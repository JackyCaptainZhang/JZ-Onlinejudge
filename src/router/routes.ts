import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "View challenges",
    component: HomeView,
  },
  {
    path: "/about",
    name: "My",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
