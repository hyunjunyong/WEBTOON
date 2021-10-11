import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TOTAL from "../views/TOTAL.vue";
import WriterWebtoon_intro from "../components/WriterWebtoon-intro.vue";

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
  {
    path: "/writerwbtoon_intro",
    name: "WriterWebtoon_intro",
    component: WriterWebtoon_intro,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
