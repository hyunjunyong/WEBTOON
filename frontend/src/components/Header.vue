<template>
  <v-container>
    <v-app-bar app color="white" dark elevation="0">
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../img/개발자의품격로고.png"
            transition="scale-transition"
            width="40"
          />

          <div>개발자의 품격</div>
        </div>
      </router-link>

      <!-- 화면 이동용 라우터 -->
      <p class="ma-4">
        <router-link to="/"
          ><strong class="router-text">홈</strong></router-link
        >
        <span class="router-text"> | </span>
        <router-link to="/total"
          ><strong class="router-text">전체만화</strong></router-link
        >
        <span class="router-text"> | </span>

        <router-link to="/writer"
          ><strong class="router-text">작가홈</strong></router-link
        >

        <span class="router-text"> | </span>

        <router-link to="/admin"
          ><strong class="router-text">관리자홈</strong></router-link
        >
      </p>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <!-- 검색창 -->
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- 로그인 버튼 -->
      <router-link to="/login">
        <v-btn class="black--text" rounded color="indigo" v-if="!isLogin">
          <v-img
            src="../img/login.png"
            max-width="30px"
            max-height="30px"
          ></v-img>
          로그인
        </v-btn>
      </router-link>

      <!-- 사용자 아바타 -->
      <!-- <v-menu v-if="isLogin" min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" right absolute>
            <v-avatar color="red" size="40">
              {{ user.initials }}
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="red">
                {{ user.initials }}
              </v-avatar>
              <h3>Team 1</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>

              <v-divider class="my-3"></v-divider>

              <v-btn depressed rounded text>
                작품
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text>
                작가 제안 현황
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <router-link
                style="text-decoration:none"
                to="/like_list_company"
              >
                <v-btn depressed rounded text>
                  찜한 작가 보기
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/like_list">
                <v-btn depressed rounded text>
                  찜한 작품 목록보기
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/apply/writer">
                <v-btn depressed rounded text>
                  작가 신청 하기
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/apply/Company">
                <v-btn depressed rounded text>
                  기업 신청 하기
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout">
                로그아웃
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu> -->
      <!--유저 사용자 아바타 -->
      <v-menu v-if="isLogin" min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" right absolute>
            <v-avatar color="red" size="40">
              {{ user.initials }}
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="red">
                {{ user.initials }}
              </v-avatar>
              <h3>Team 1</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>

              <v-divider class="my-3"></v-divider>
              <router-link
                style="text-decoration:none"
                to="/personal_information"
              >
                <v-btn depressed rounded text>
                  회원 정보 변경
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/like_list">
                <v-btn depressed rounded text>
                  찜한 작품 목록보기
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/apply/writer">
                <v-btn depressed rounded text>
                  작가 신청 하기
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/apply/Company">
                <v-btn depressed rounded text>
                  기업 신청 하기
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout">
                로그아웃
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      <!-- 작가 사용자 아바타 -->
      <!-- <v-menu v-if="isLogin" min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" right absolute>
            <v-avatar color="red" size="40">
              {{ user.initials }}
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="red">
                {{ user.initials }}
              </v-avatar>
              <h3>Team 1</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>

              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/personal_information">
              <v-btn depressed rounded text>
                회원 정보 변경
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <router-link
                style="text-decoration:none"
                to="/writer_home_writer"
              >
                <v-btn depressed rounded text>
                  작가 홈
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/webtoon/add">
                <v-btn depressed rounded text>
                  작품 등록
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/register_state">
                <v-btn depressed rounded text>
                  등록 작품 상태
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>

              <v-btn depressed rounded text>
                기업 제안
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/Boardlist">
                <v-btn depressed rounded text>
                  1:1 문의
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout">
                로그아웃
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu> -->
      <!-- 회사 사용자 아바타 -->
      <!-- <v-menu v-if="isLogin" min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" right absolute>
            <v-avatar color="red" size="40">
              {{ user.initials }}
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="red">
                {{ user.initials }}
              </v-avatar>
              <h3>Team 1</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>

              <v-divider class="my-3"></v-divider>

              <v-btn depressed rounded text>
                회원 정보 변경
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text>
                작가 제안 현황
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <router-link
                style="text-decoration:none"
                to="/like_list_company"
              >
                <v-btn depressed rounded text>
                  관심 작가
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/ProposeStatus">
                <v-btn depressed rounded text>
                  작가 정보 문의
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout">
                로그아웃
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu> -->

      <!-- 관리자 사용자 아바타 -->
      <!-- <v-menu v-if="isLogin" min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" right absolute>
            <v-avatar color="red" size="40">
              {{ user.initials }}
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="red">
                {{ user.initials }}
              </v-avatar>
              <h3>Team 1</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>

              <v-divider class="my-3"></v-divider>
              <router-link to="/admin" style="text-decoration:none">
                <v-btn depressed rounded text>
                  관리자 홈
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>

              <v-btn depressed rounded text>
                작품 승인 요청
              </v-btn>

              <v-divider class="my-3"></v-divider>

              <v-btn depressed rounded text>
                신규 문의
              </v-btn>

              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/Notice_list">
                <v-btn depressed rounded text>
                  공지
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/">
                <v-btn depressed rounded text>
                  작가 승인
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <router-link style="text-decoration:none" to="/">
                <v-btn depressed rounded text>
                  기업 승인
                </v-btn>
              </router-link>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout">
                로그아웃
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu> -->
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      testingText: "작품등록하기",
      userStatus: false,
      user: {
        initials: "HJ",
        fullName: "Yoo HJ",
        email: "yhj970105@gmail.com",
      },
    };
  },
  methods: {
    ...mapActions(["signout"]),
    test() {
      this.userStatus = !this.userStatus;
    },
    logout() {
      axios
        .delete("http://localhost:5000/auth/session", { withCredentials: true })
        .then((res) => {
          this.signout();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>

<style>
.router-text {
  color: black;
}
.user-state-text {
  color: gray;
  font-size: 10px;
}
.serchInput {
  border-radius: 5px;
}
#userStatusCard {
  position: absolute;
  top: 70px;
  right: 20px;
  margin: 0;
}
</style>
