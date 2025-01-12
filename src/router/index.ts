import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: HomeView, name: "Home"},
    {path: "/about", component: AboutView, name: "About"},
  ],
});

export default router;