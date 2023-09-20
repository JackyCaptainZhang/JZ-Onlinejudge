import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import accessEnum from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "View challenges",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "No Auth",
    component: NoAuthView,
    meta: {
      //Add this attribute to the page that needed the permission control
      access: accessEnum.NOT_LOGIN,
    },
  },
  {
    path: "/admin",
    name: "Admin View",
    component: AdminView,
    meta: {
      //Add this attribute to the page that needed the permission control
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/about",
    name: "My",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      //Add this attribute to the page that needed the permission control
      access: accessEnum.USER,
    },
  },
];
