import axios from "axios";
import VueCookies from "vue-cookies";
//import router from "../router";
//import state from "../store";

axios.defaults.baseURL = "http://localhost:8080";

//한 페이지에 오랫동안 머무르다가 accessToken이 만료된 상태에서 호출하는 것을 대비함...
axios.interceptors.request.use(async function(config) {
  return config;
});

axios.interceptors.response.use(async function(response) {
  const AT = VueCookies.get("accessToken");
  const RT = VueCookies.get("refreshToken");

  //console.log(testA);
  //console.log(testB);

  //AT만 만료 되었을 때
  //AT & RT 만료되었을 때

  if (!RT) {
    if (!AT) {
      console.log("ㅗㅜㅑ 로그인상태가 아니군요!!!");
    }
    return response;
  }

  if (!AT) {
    console.log("ㅗㅜㅑ 세션이 만료가 되었어요 다시 호출할께염!!!!");
    axios.get("http://localhost:5000/auth/session");
  }

  return response;
});

export default axios;
