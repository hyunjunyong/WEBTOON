import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TOTAL from "../views/TOTAL.vue";
import VIEWER from "../views/VIEWER.vue";
import WEBTOON_Home from "../views/WEBTOON_Home.vue";
import WEBTOON_Home_WRITER from "../views/WEBTOON_Home_WRITER.vue";
import WRITER_Home from "../views/WRITER_Home.vue";
import 개인정보처리방침 from "../views/개인정보처리방침.vue";
import 이용약관 from "../views/이용약관.vue";
import 공지 from "../views/공지.vue";
import 회사정보 from "../views/회사정보.vue";
import 모달테스트 from "../views/모달테스트.vue";
import EDIT_EPISODE from "../views/EDIT_EPISODE";
import register_writer from "../views/register_writer";
import BOARDLIST from "../views/BOARDLIST.vue";
import BOARDWRITER from "../views/BOARDWRITER.vue";

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
  {
    path: "/개인정보처리방침",
    name: "개인정보처리방침",
    component: 개인정보처리방침,
  },
  {
    path: "/이용약관",
    name: "이용약관",
    component: 이용약관,
  },
  {
    path: "/공지",
    name: "공지",
    component: 공지,
  },
  {
    path: "/회사정보",
    name: "회사정보",
    component: 회사정보,
  },
  {
    path: "/모달테스트",
    name: "모달테스트",
    component: 모달테스트,
  },
  {
    path: "/EDIT_EPISODE",
    name: "EDIT_EPISODE",
    component: EDIT_EPISODE,
  },
  {
    path: "/register_writer",
    name: "register_writer",
    component: register_writer,
  },
  {
    path: "/Boardlist",
    name: "BOARDLIST",
    component: BOARDLIST,
  },
  {
    path: "/Boardwriter",
    name: "BOARDWRITER",
    component: BOARDWRITER,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
