import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TOTAL from "../views/TOTAL.vue";
import WriterWebtoon_intro from "../components/WriterWebtoon-intro.vue";
import Webtoon_image from "../components/Webtoon-image.vue";
import Writer_profile from "../components/Writer-profile.vue";

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
    path: "/writerwebtoon_intro",
    name: "WriterWebtoon_intro",
    component: WriterWebtoon_intro,
  },
  {
    path: "/webtoon_image",
    name: "Webtoon_image",
    component: Webtoon_image,
  },
  {
    path: "/writer_profile",
    name: "Writer_profile",
    component: Writer_profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
