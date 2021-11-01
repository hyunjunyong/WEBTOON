import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TOTAL from "../views/TOTAL.vue";
import VIEWER from "../views/VIEWER.vue";
import WEBTOON_Home from "../views/WEBTOON_Home.vue";
import WEBTOON_Home_WRITER from "../views/WriterPage/WEBTOON_Home_WRITER.vue";
import WRITER_Home from "../views/WRITER_Home.vue";
import 개인정보처리방침 from "../views/개인정보처리방침.vue";
import 이용약관 from "../views/이용약관.vue";
import 회사정보 from "../views/회사정보.vue";
import 모달테스트 from "../views/모달테스트.vue";
import EDIT_EPISODE from "../views/WriterPage/EDIT_EPISODE";
import register_Webtoon from "../views/WriterPage/register_Webtoon";
import BOARDLIST from "../views/UserPage/BOARDLIST.vue";
import BOARDWRITER from "../views/UserPage/BOARDWRITER.vue";
import kakao_login from "../views/kakao_login.vue";
import APPLY_WRITER from "../views/apply_writer.vue";
import APPLY_COMPANY from "../views/CompanyPage/apply_company.vue";
import edit_Webtoon from "../views/WriterPage/edit_Webtoon";
import register_state from "../views/WriterPage/register_state";
import ono_writer from "../views/ono-writer";
import LIKE_LIST from "../views/UserPage/Like_list.vue";
import Notice from "../views/notice.vue";
import Notice_List from "../views/notice_list.vue";
import 작가정보문의 from "../views/작가정보문의.vue";
import WRITER_Home_Company from "../views/CompanyPage/WRITER_Home_COMPANY.vue";
import 작가정보문의작성 from "../views/작가정보문의작성.vue";
import LIKE_LIST_COMPANY from "../views/UserPage/Like_list_company.vue";
import MANAGER_HOME from "../views/ManagePage/MANAGER_HOME.vue";
import APPLY_WEBTOON from "../views/ManagePage/apply_webtoon.vue";
import APPLY_WEBTOON_DETAIL from "../views/ManagePage/apply_webtoon_detail.vue";
import WRITER_Home_WRITER from "../views/WriterPage/WRITER_Home_WRITER.vue";

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
  {
    path: "/Manager_home",
    name: "MANAGER_HOME",
    component: MANAGER_HOME,
  },
  {
    path: "/apply_webtoon",
    name: "APPLY_WEBTOON",
    component: APPLY_WEBTOON,
  },
  {
    path: "/apply_webtoon_detail",
    name: "APPLY_WEBTOON_DETAIL",
    component: APPLY_WEBTOON_DETAIL,
  },
  {
    path: "/writer_home_writer",
    name: "WRITER_Home_WRITER",
    component: WRITER_Home_WRITER,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
