<template>
  <v-app-bar height="80px" app color="white" elevation="0" hide-on-scroll>
    <!-- <v-app-bar height="80px" app color="white" elevation="0"> -->
    <template>
      <v-spacer></v-spacer>
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
        </div>
      </router-link>
 {{isLogin}}
      <!-- 화면 이동용 라우터 -->
      <router-link to="/total" style="text-decoration:none" class="ma-1">
        <strong class="router-text d-none d-sm-flex"
          >전체만화</strong
        ></router-link
      >

      <router-link to="/writer" style="text-decoration:none" class="ma-1"
        ><strong class="router-text d-none d-sm-flex"
          >작가홈</strong
        ></router-link
      >

      <router-link to="/genre/add" style="text-decoration:none" class="ma-1"
        ><strong class="router-text d-none d-sm-flex"
          >장르추가</strong
        ></router-link
      >

      <v-spacer></v-spacer>
      <!-- 검색창 -->

      <v-btn class="primary--text" icon @click="dialog = !dialog">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- 로그인 버튼 -->
      <p class="ma-4" v-if="!isLogin">
        <router-link to="/login" style="text-decoration:none">
          <v-btn depressed color="primary" outlined small rounded>
            <span class="primary--text font-weight-bold">로그인</span>
          </v-btn>
        </router-link>
      </p>

      <v-menu v-if="isLogin" min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
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
                v-if="userInfo.userType == 'author'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/writer_home_writer"
                v-if="userInfo.userType == 'author'"
              >
                <v-btn depressed rounded text>
                  작가 홈
                </v-btn>
              </router-link>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'author'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/add/webtoon/"
                v-if="userInfo.userType == 'author'"
              >
                <v-btn depressed rounded text>
                  작품 등록
                </v-btn>
              </router-link>

              <v-divider
                class="my-3"
                v-if="userInfo.userType == 'author'"
              ></v-divider>

              <router-link
                style="text-decoration:none"
                to="/register_state"
                v-if="userInfo.userType == 'author'"
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
    </template>

    <v-spacer></v-spacer>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-text-field label="작품/작가 검색"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">
            취소
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      dialog: false,
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
  font-size: 17px;
}
.user-state-text {
  color: gray;
  font-size: 10px;
}
.serchInput {
  border-radius: 5px;
}
</style>
