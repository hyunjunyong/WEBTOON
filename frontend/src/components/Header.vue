<template>
  <v-app-bar height="80px" app color="white" elevation="0" hide-on-scroll>
    <!-- <v-app-bar height="80px" app color="white" elevation="0"> -->
    <template>
      <v-row justify="center" align="center" height="80px">
        <v-col cols="1">
          <router-link to="/" style="text-decoration:none" center>
            <!-- <v-icon x-large color="primary" ma="10"> mdi-heart </v-icon> -->
            <v-img src="../img/logo.png" height="60px" contain></v-img>
          </router-link>
        </v-col>

        <!-- 화면 이동용 라우터 -->
        <v-col cols="3">
          <router-link to="/total" style="text-decoration:none">
            <strong class="router-text">전체만화</strong></router-link
          >
        </v-col>

        <!-- 검색창 -->
        <v-col cols="2">
          <v-btn
            class="primary--text d-flex d-sm-none"
            icon
            @click="dialog = !dialog"
          >
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
            class="d-none d-sm-flex mt-7"
            v-model="searchInfo"
            @keyup.enter="search"
          ></v-text-field>
        </v-col>

        <!-- 로그인 버튼 -->
        <v-col cols="1">
          <p v-if="!isLogin">
            <router-link to="/login" style="text-decoration:none">
              <v-btn class="mt-5" depressed color="primary" outlined rounded>
                <span class="primary--text font-weight-bold">로그인</span>
              </v-btn>
            </router-link>
          </p>
          <v-menu v-if="isLogin" min-width="200px" tile rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar color="primary" size="40">
                  <v-icon dark>
                    mdi-account-circle
                  </v-icon>
                </v-avatar>
              </v-btn>
            </template>

            <v-card>
              <v-list flat>
                <v-list-item-group>
                  <div class="text-center">
                    <v-avatar color="primary" size="70">
                      {{ userInfo.name }}
                    </v-avatar>

                    <h3 class="my-3">{{ userInfo.name }}</h3>

                    <v-divider></v-divider>

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'user'"
                    >
                      <router-link
                        style="text-decoration:none"
                        to="/apply/writer"
                      >
                        <v-list-item-title>
                          작가 신청
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider v-if="userInfo.userType == 'user'"></v-divider>

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'user'"
                    >
                      <router-link style="text-decoration:none" to="/like_list">
                        <v-list-item-title>
                          찜한 작품
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <!--
                작가용
              -->
                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'author'"
                    >
                      <router-link
                        style="text-decoration:none"
                        to="/writer_home_writer"
                      >
                        <v-list-item-title class="center">
                          작가 홈
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider v-if="userInfo.userType == 'author'"></v-divider>

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'author'"
                    >
                      <router-link
                        style="text-decoration:none"
                        to="/add/webtoon/"
                      >
                        <v-list-item-title>
                          작품 등록
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider v-if="userInfo.userType == 'author'"></v-divider>

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'author'"
                    >
                      <router-link
                        style="text-decoration:none"
                        to="/add/episode/"
                      >
                        <v-list-item-title>
                          에피소드 등록
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider v-if="userInfo.userType == 'author'"></v-divider>

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'author'"
                    >
                      <router-link
                        style="text-decoration:none"
                        to="/register_state"
                      >
                        <v-list-item-title>
                          등록작품 상태
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider v-if="userInfo.userType == 'author'"></v-divider>

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'author'"
                    >
                      <router-link style="text-decoration:none" to="/like_list">
                        <v-list-item-title>
                          찜한 작품
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <!-- 
                관리자용
              -->

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'admin'"
                    >
                      <router-link to="/admin" style="text-decoration:none">
                        <v-list-item-title>
                          관리자 홈
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider v-if="userInfo.userType == 'admin'"></v-divider>

                    <v-list-item
                      class="justify-center"
                      v-if="userInfo.userType == 'admin'"
                    >
                      <router-link
                        style="text-decoration:none"
                        to="/Notice_list"
                      >
                        <v-list-item-title>
                          공지
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item class="justify-center">
                      <router-link
                        style="text-decoration:none"
                        to="/personal_information"
                      >
                        <v-list-item-title>
                          정보 변경
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item class="justify-center">
                      <router-link style="text-decoration:none" to="">
                        <v-list-item-title @click="signout">
                          로그아웃
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                  </div>
                </v-list-item-group>
              </v-list>
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
import { mapState, mapActions } from 'vuex';
import axios from 'axios';
export default {
  name: 'Header',
  data() {
    return {
      dialog: false,
      searchInfo: null,
    };
  },
  methods: {
    ...mapActions(['signout', 'signout']),

    // 검색창 메소드
    search() {
      console.log(this.searchInfo);

      axios
        .get(`http://localhost:5000/search?searchInput=${this.searchInfo}`, {
          withCredentials: true,
        })
        .then((res) => {
          this.$store.searchInfo = res;
          this.$router.push('searchResult').catch(() => {});
          console.log(res);
        })
        .then((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapState(['isLogin', 'userInfo']),
  },
};
</script>

<style>
.router-text {
  color: black;
  font-size: 17px;
}
</style>
