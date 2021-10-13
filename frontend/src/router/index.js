import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TOTAL from "../views/TOTAL.vue";
import VIEWER from "../views/VIEWER.vue";
import WEBTOON_Home from "../views/WEBTOON_Home.vue";
import WEBTOON_Home_WRITER from "../views/WEBTOON_Home_WRITER.vue";
import WRITER_Home from "../views/WRITER_Home.vue";

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
    path: "/viewer",
    name: "VIEWER",
    component: VIEWER,
  },
  {
    path: "/webtoon_home",
    name: "WEBTOON_Home",
    component: WEBTOON_Home,
  },
  {
    path: "/webtoon_home_writer",
    name: "WEBTOON_Home_WRITER",
    component: WEBTOON_Home_WRITER,
  },
  {
    path: "/writer_home",
    name: "WRITER_Home",
    component: WRITER_Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
