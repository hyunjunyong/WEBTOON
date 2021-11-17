import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/total",
    name: "TOTAL",
    component: () => import("../views/TOTAL.vue"),
    meta: { userType: "user" },
    // meta 내부의 userType이 접근할 수 있는 권한을 부여하는 부분입니다.
  },
  {
    path: "/episode",
    name: "Episode",
    component: () => import("../views/Episode.vue"),
  },

  {
    path: "/webtoon",
    name: "WEBTOON_HOMR",
    component: () => import("../views/WEBTOON_HOMR.vue"),
  },

  {
    path: "/writer",
    name: "WRITER_Home",
    component: () => import("../views/WRITER_Home.vue"),
  },
  {
    path: "/개인정보처리방침",
    name: "개인정보처리방침",
    component: () => import("../views/개인정보처리방침.vue"),
  },
  {
    path: "/Tos",
    name: "Tos",
    component: () => import("../views/Tos.vue"),
  },
  {
    path: "/회사정보",
    name: "회사정보",
    component: () => import("../views/회사정보.vue"),
  },
  // boardlist,boardwriter와 겹쳐서 회의전까지는 일단 주석
  // {
  //   path: "/ono_writer",
  //   name: "ono_writer",
  //   component: ono_writer,
  // },

  {
    path: "/Notice",
    name: "NoticE",
    component: () => import("../views/notice.vue"),
  },
  {
    path: "/Notice_list",
    name: "NOTICE_LIST",
    component: () => import("../views/notice_list.vue"),
  },
  {
    path: "/ProposeStatus",
    name: "ProposeStatus",
    component: () => import("../views/ProposeStatus.vue"),
  },
  {
    path: "/Propose",
    name: "Propose",
    component: () => import("../views/Propose.vue"),
  },

  //admin
  {
    path: "/admin",
    name: "Admin_Home",
    component: () => import("../views/Admin/Admin_Home.vue"),
    meta: { userType: "admin" },
  },

  //Apply 관리자의 승인이 필요한 부분
  {
    path: "/Apply/writer",
    name: "APPLY_WRITER",
    component: () => import("../views/Apply/Writer.vue"),
  },
  {
    path: "/Apply/Company",
    name: "APPLY_COMPANY",
    component: () => import("../views/Apply/Company.vue"),
  },
  {
    path: "/Apply/webtoon",
    name: "APPLY_WEBTOON",
    component: () => import("../views/Apply/Webtoon.vue"),
  },
  {
    path: "/Apply/episode",
    name: "APPLY_WEBTOON_DETAIL",
    component: () => import("../views/Apply/Episode.vue"),
  },

  //CompanyPage ????

  // UserPage
  {
    path: "/Boardlist",
    name: "Boardlist",
    component: () => import("../views/UserPage/Boardlist.vue"),
  },
  {
    path: "/Boardwriter",
    name: "BoardWriter",
    component: () => import("../views/UserPage/Boardwriter.vue"),
  },
  {
    path: "/like_list",
    name: "LIKE_LIST",
    component: () => import("../views/UserPage/Like_list.vue"),
  },
  {
    path: "/like_list_company",
    name: "LIKE_LIST_COMPANY",
    component: () => import("../views/UserPage/Like_list_company.vue"),
  },
  {
    path: "/personal_information",
    name: "PERSONAL_INFORMATION",
    component: () => import("../views/UserPage/Personal_information.vue"),
  },

  // 로그인 연결
  {
    path: "/login",
    name: "LOGIN",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/join",
    name: "JOIN",
    component: () => import("../views/join.vue"),
  },
  // WriterPage
  {
    path: "/writer_home_writer",
    name: "WRITER_Home_WRITER",
    component: () => import("../views/WriterPage/WRITER_Home_WRITER.vue"),
  },
  {
    path: "/webtoon_home_writer",
    name: "WEBTOON_Home_WRITER",
    component: () => import("../views/WriterPage/WEBTOON_Home_WRITER.vue"),
  },
  {
    path: "/register_Webtoon",
    name: "register_Webtoon",
    component: () => import("../views/WriterPage/register_Webtoon.vue"),
  },
  {
    path: "/register_state",
    name: "register_state",
    component: () => import("../views/WriterPage/register_state.vue"),
  },
  {
    path: "/episode/add",
    name: "ADD_EPISODE",
    component: () => import("../views/WriterPage/ADD_Episode.vue"),
  },
  {
    path: "/webtoon/add",
    name: "ADD_Webtoon",
    component: () => import("../views/WriterPage/ADD_Webtoon.vue"),
  },
  //장르추가 *임시
  {
    path: "/genre/add",
    name: "ADD_Genre",
    component: () => import("../views/ADD_Genre.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// to : 라우터로 이동하여 도착 할 페이지
// from : 라우터를 실행하는 페이지
// next : 이동용 메서드
router.beforeEach(async (to, from, next) => {
  // 쿠키 체크해서 accessToken이 만료되면 재발급
  if (
    VueCookies.get("accessToken") == null &&
    VueCookies.get("refreshToken") != null
  ) {
    await axios.get("http://localhost:5000/auth/session");
  }

  // 로직 고민을 해봐야함....

  const userType = localStorage.getItem("userType");

  //해당 페이지에 접근 제한이 없거나, 접근 제한과 사용자 타입이 같으면 이동
  if (to.meta.userType == undefined || to.meta.userType == userType) {
    return next();
  } else {
    alert("해당 페이지로 이동할 수 있는 권한이 없는 사용자입니다.");
    return next(from.fullPath);
  }
});

export default router;
