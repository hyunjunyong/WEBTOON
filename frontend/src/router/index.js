import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TOTAL from "../views/TOTAL.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/total",
    name: "TOTAL",
    component: TOTAL,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
