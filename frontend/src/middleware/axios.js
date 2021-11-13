import axios from 'axios';
import router from "../router"
//import state from "../store";

axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.request.use(async function(config){
    return config;
});

axios.interceptors.response.use(async function(response){

    if(response.status != 200){
        alert("로그아웃되었습니다. 로그인하세요");
        router.push("/login");
    }

    return response;
});

export default axios;