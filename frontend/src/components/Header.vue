<template>
  <v-container>
    <v-app-bar height="80px" app color="white" elevation="0">
      <router-link to="/" style="text-decoration:none">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../img/개발자의품격로고.png"
            transition="scale-transition"
            max-width="80px"
          />

          <div class="text-h4 font-weight-bold primary--text">
            개발자의 품격
          </div>
        </div>
      </router-link>

      <!-- 화면 이동용 라우터 -->
      <p class="ma-4">
        <router-link to="/total" style="text-decoration:none" class="ma-1">
          <strong class="router-text">전체만화</strong></router-link
        >

        <router-link to="/writer" style="text-decoration:none" class="ma-1"
          ><strong class="router-text">작가홈</strong></router-link
        >

        <router-link to="/admin" style="text-decoration:none" class="ma-1"
          ><strong class="router-text">관리자홈</strong></router-link
        >

        <router-link to="/genre/add" style="text-decoration:none" class="ma-1"
          ><strong class="router-text">장르추가</strong></router-link
        >
      </p>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <!-- 검색창 -->

      <p class="mt-12">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          color="primary"
          rounded
          clearable
        ></v-text-field>
      </p>

      <v-spacer></v-spacer>

      <!-- 로그인 버튼 -->
      <p class="ma-4" v-if="!isLogin">
        <router-link to="/login" style="text-decoration:none">
          <v-btn depressed color="white" large rounded dark>
            <v-img
              src="../img/login.png"
              max-width="30px"
              max-height="30px"
            ></v-img>
            <span class="black--text font-weight-bold">로그인</span>
          </v-btn>
        </router-link>
      </p>
      <v-menu v-else min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" right absolute>
            <v-avatar color="red" size="40">
              H
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="red" size="65">
                {{ userInfo.name }}
              </v-avatar>

              <h3 class="mt-3">{{ userInfo.name }}</h3>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'user'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/apply/writer"
                v-if="userInfo.userType == 'user'"
              >
                <v-btn depressed rounded text>
                  작가 신청 하기
                </v-btn>
              </router-link>

              <!--
                작가용
              -->
              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'writer'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/writer_home_writer"
                v-if="userInfo.userType == 'writer'"
              >
                <v-btn depressed rounded text>
                  작가 홈
                </v-btn>
              </router-link>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'writer'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/webtoon/add"
                v-if="userInfo.userType == 'writer'"
              >
                <v-btn depressed rounded text>
                  작품 등록
                </v-btn>
              </router-link>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'writer'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/register_state"
                v-if="userInfo.userType == 'writer'"
              >
                <v-btn depressed rounded text>
                  등록 작품 상태
                </v-btn>
              </router-link>

              <!-- 
                관리자용
              -->

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'admin'"
              ></v-divider>

              <router-link
                to="/admin"
                style="text-decoration:none"
                v-if="userInfo.userType == 'admin'"
              >
                <v-btn depressed rounded text>
                  관리자 홈
                </v-btn>
              </router-link>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'admin'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/Notice_list"
                v-if="userInfo.userType == 'admin'"
              >
                <v-btn
                  depressed
                  rounded
                  text
                  v-if="userInfo.userType == 'admin'"
                >
                  작품 승인 요청
                </v-btn>
              </router-link>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'admin'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/Notice_list"
                v-if="userInfo.userType == 'admin'"
              >
                <v-btn
                  depressed
                  rounded
                  text
                  v-if="userInfo.userType == 'admin'"
                >
                  공지
                </v-btn>
              </router-link>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'admin'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/"
                v-if="userInfo.userType == 'admin'"
              >
                <v-btn depressed rounded text>
                  작가 승인
                </v-btn>
              </router-link>

              <v-divider class="my-3"></v-divider>

              <router-link style="text-decoration:none" to="/like_list">
                <v-btn depressed rounded text>
                  찜한 작품 목록보기
                </v-btn>
              </router-link>

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

              <v-btn depressed rounded text @click="signout">
                로그아웃
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

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
    ...mapActions(["signout", "signout"]),
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
  },
};
</script>

<style>
.router-text {
  color: black;
  font-size: 20px;
}
.user-state-text {
  color: gray;
  font-size: 10px;
}
.serchInput {
  border-radius: 5px;
}
</style>
