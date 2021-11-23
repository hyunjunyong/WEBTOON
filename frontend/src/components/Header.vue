<template>
  <v-app-bar height="80px" app color="white" elevation="0" hide-on-scroll>
    <!-- <v-app-bar height="80px" app color="white" elevation="0"> -->
    <template>
      <v-row justify=center no-gutters>
        <v-col cols="1" class="mt-3">
          <router-link to="/" style="text-decoration:none" center>
              <v-icon
                x-large
                color="primary"
                ma="10"
              > mdi-heart
              </v-icon>
          </router-link>
        </v-col>

        <!-- 화면 이동용 라우터 -->
        <v-col cols="3"  class="mt-5">
        <router-link to="/total" style="text-decoration:none">
          <strong class="router-text d-none d-sm-flex"
            >전체만화</strong
          ></router-link>
        </v-col>




        <!-- 검색창 -->
        <v-col cols="2">
          <v-btn class="primary--text mt-3 d-flex d-sm-none" icon @click="dialog = !dialog">
            <v-icon right>mdi-magnify</v-icon>
          </v-btn>

            <v-text-field
              clearable
              dense
              outlined
              rounded
              depressed
              label="작품/작가 검색"
              prepend-inner-icon="mdi-magnify"
              color="primary"
              class="mt-4 d-none d-sm-flex"
            ></v-text-field>

        </v-col>

        <!-- 로그인 버튼 -->
        <v-col cols="1">    
          <p class="ma-4" v-if="!isLogin">
            <router-link to="/login" style="text-decoration:none">
              <v-btn depressed color="primary" outlined rounded>
                <span class="primary--text font-weight-bold">로그인</span>
              </v-btn>
            </router-link>
          </p>

      <v-menu v-if="isLogin" min-width="350px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on" class="ma-2" >
            <v-avatar color="primary" size="40">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="primary" size="70">
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
                to="/add/episode/"
                v-if="userInfo.userType == 'author'"
              >
                <v-btn depressed rounded text>
                  에피소드 등록
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

      </v-col>
      </v-row>
    </template>


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
</style>
