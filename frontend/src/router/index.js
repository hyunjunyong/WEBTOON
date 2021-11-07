import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TOTAL from "../views/TOTAL.vue";
import Episode from "../views/Episode.vue";

import WEBTOON_HOMR from "../views/WEBTOON_HOMR.vue";
import WEBTOON_Home_WRITER from "../views/WriterPage/WEBTOON_Home_WRITER.vue";
import WRITER_Home from "../views/WRITER_Home.vue";

import 개인정보처리방침 from "../views/개인정보처리방침.vue";
import 이용약관 from "../views/이용약관.vue";
import 회사정보 from "../views/회사정보.vue";

import ADD_EPISODE from "../views/WriterPage/ADD_Episode";
import register_Webtoon from "../views/WriterPage/register_Webtoon";

import ADD_Webtoon from "../views/WriterPage/ADD_Webtoon";
import register_state from "../views/WriterPage/register_state";
import ono_writer from "../views/ono-writer";
import LIKE_LIST from "../views/UserPage/Like_list.vue";

import LIKE_LIST_COMPANY from "../views/UserPage/Like_list_company.vue";
import Admin_Home from "../views/Admin/Admin_Home.vue";

import WRITER_Home_WRITER from "../views/WriterPage/WRITER_Home_WRITER.vue";
import Login from "../views/login.vue";
import Join from "../views/join.vue";

//Apply 관리자의 승인이 필요한 부분
import APPLY_WRITER from "../views/Apply/Writer.vue";
import APPLY_COMPANY from "../views/Apply/Company.vue";
import APPLY_WEBTOON from "../views/Apply/Webtoon.vue";
import APPLY_WEBTOON_DETAIL from "../views/Apply/Episode.vue";

//회사의 작가제안사항 확인
import ProposeStatus from "../views/ProposeStatus.vue";
import Propose from "../views/Propose.vue";
import Boardlist from "../views/UserPage/Boardlist.vue";
import BoardWriter from "../views/UserPage/Boardwriter.vue";

//공지
import Notice from "../views/notice.vue";
import Notice_List from "../views/notice_list.vue";

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
    path: "/episode",
    name: "Episode",
    component: Episode,
  },

  {
    path: "/webtoon",
    name: "WEBTOON_HOMR",
    component: WEBTOON_HOMR,
  },

  {
    path: "/writer",
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
    path: "/ProposeStatus",
    name: "ProposeStatus",
    component: ProposeStatus,
  },
  {
    path: "/Propose",
    name: "Propose",
    component: Propose,
  },

  //admin
  {
    path: "/admin",
    name: "Admin_Home",
    component: Admin_Home,
  },

  //Apply 관리자의 승인이 필요한 부분
  {
    path: "/Apply/writer",
    name: "APPLY_WRITER",
    component: APPLY_WRITER,
  },
  {
    path: "/Apply/Company",
    name: "APPLY_COMPANY",
    component: APPLY_COMPANY,
  },
  {
    path: "/Apply/webtoon",
    name: "APPLY_WEBTOON",
    component: APPLY_WEBTOON,
  },
  {
    path: "/Apply/episode",
    name: "APPLY_WEBTOON_DETAIL",
    component: APPLY_WEBTOON_DETAIL,
  },

  //CompanyPage ????

  // UserPage
  {
    path: "/Boardlist",
    name: "Boardlist",
    component: Boardlist,
  },
  {
    path: "/Boardwriter",
    name: "BoardWriter",
    component: BoardWriter,
  },
  {
    path: "/like_list",
    name: "LIKE_LIST",
    component: LIKE_LIST,
  },
  {
    path: "/like_list_company",
    name: "LIKE_LIST_COMPANY",
    component: LIKE_LIST_COMPANY,
  },

  // 로그인 연결
  {
    path: "/login",
    name: "LOGIN",
    component: Login,
  },
  {
    path: "/join",
    name: "JOIN",
    component: Join,
  },
  // WriterPage
  {
    path: "/writer_home_writer",
    name: "WRITER_Home_WRITER",
    component: WRITER_Home_WRITER,
  },
  {
    path: "/webtoon_home_writer",
    name: "WEBTOON_Home_WRITER",
    component: WEBTOON_Home_WRITER,
  },
  {
    path: "/register_Webtoon",
    name: "register_Webtoon",
    component: register_Webtoon,
  },
  {
    path: "/register_state",
    name: "register_state",
    component: register_state,
  },
  {
    path: "/episode/add",
    name: "ADD_EPISODE",
    component: ADD_EPISODE,
  },
  {
    path: "/webtoon/add",
    name: "ADD_Webtoon",
    component: ADD_Webtoon,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
