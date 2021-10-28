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
import 회사정보 from "../views/회사정보.vue";
import 모달테스트 from "../views/모달테스트.vue";
import EDIT_EPISODE from "../views/EDIT_EPISODE";
import register_Webtoon from "../views/register_Webtoon";
import BOARDLIST from "../views/BOARDLIST.vue";
import BOARDWRITER from "../views/BOARDWRITER.vue";
import kakao_login from "../views/kakao_login.vue";
import APPLY_WRITER from "../views/apply_writer.vue";
import APPLY_COMPANY from "../views/apply_company.vue";
import edit_Webtoon from "../views/edit_Webtoon";
import register_state from "../views/register_state";
import ono_writer from "../views/ono-writer";
import LIKE_LIST from "../views/Like_list.vue";
import Notice from "../views/notice.vue";
import Notice_List from "../views/notice_list.vue";
import 작가정보문의 from "../views/작가정보문의.vue";
import WRITER_Home_Company from "../views/WRITER_Home_COMPANY.vue";
import 작가정보문의작성 from "../views/작가정보문의작성.vue";
import LIKE_LIST_COMPANY from "../views/Like_list_company.vue";

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
    path: "/register_Webtoon",
    name: "register_Webtoon",
    component: register_Webtoon,
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
  {
    path: "/kakao_login",
    name: "kakao_login",
    component: kakao_login,
  },
  {
    path: "/apply_writer",
    name: "APPLY_WRITER",
    component: APPLY_WRITER,
  },
  {
    path: "/apply_company",
    name: "APPLY_COMPANY",
    component: APPLY_COMPANY,
  },
  {
    path: "/edit_Webtoon",
    name: "edit_Webtoon",
    component: edit_Webtoon,
  },
  {
    path: "/register_state",
    name: "register_state",
    component: register_state,
  },
  {
    path: "/ono_writer",
    name: "ono_writer",
    component: ono_writer,
  },
  {
    path: "/register_webtoon",
    name: "register_Webtoon",
    component: register_Webtoon,
  },
  {
    path: "/like_list",
    name: "LIKE_LIST",
    component: LIKE_LIST,
  },
  {
    path: "/Notice",
    name: "NoticE",
    component: Notice,
  },
  {
    path: "/Notice_list",
    name: "NOTICE_LIST",
    component: Notice_List,
  },
  {
    path: "/작가정보문의",
    name: "작가정보문의",
    component: 작가정보문의,
  },
  {
    path: "/writer_home_Company",
    name: "WRITER_Home_Company",
    component: WRITER_Home_Company,
  },
  {
    path: "/작가정보문의작성",
    name: "작가정보문의작성",
    component: 작가정보문의작성,
  },
  {
    path: "/like_list_company",
    name: "LIKE_LIST_COMPANY",
    component: LIKE_LIST_COMPANY,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
