<template>
  <v-container>
    <v-app-bar app color="primary" dark>
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

        <router-link to="/viewer"
          ><strong class="router-text">이미지뷰어</strong></router-link
        >
        <span class="router-text"> | </span>

        <router-link to="/webtoon_home"
          ><strong class="router-text">작품</strong></router-link
        >
        <span class="router-text"> | </span>

        <router-link to="/webtoon_home_writer"
          ><strong class="router-text">작가</strong></router-link
        >
        <span class="router-text"> | </span>

        <router-link to="/writer_home"
          ><strong class="router-text">작가홈</strong></router-link
        >

        <span class="router-text"> | </span>

        <router-link to="/모달테스트"
          ><strong class="router-text">모달테스트</strong></router-link
        >
        <span class="router-text"> | </span>

        <router-link to="/register_writer"
          ><strong class="router-text">{{ testingText }}</strong></router-link
        >
        <span class="router-text"> | </span>

        <router-link to="/Boardlist"
          ><strong class="router-text">게시판</strong></router-link
        >

        <span class="router-text"> | </span>

        <router-link to="/kakao_login"
          ><strong class="router-text">kakao_login</strong></router-link
        >
        <span class="router-text"> | </span>

        <router-link to="/writer_home_company"
          ><strong class="router-text">작가홈,회사</strong></router-link
        >

      </p>

      <v-spacer></v-spacer>

      <v-row class="red ma-3 serchInput">
        <v-col>
          <v-img
            src="../img/free-icon-detective-magnifying-glass-14877.png"
            max-width="30"
            class="ma-1 radius"
          />
        </v-col>
        <v-col>
          <input />
        </v-col>
      </v-row>

      <v-avatar @click="test" color="red" size="40" v-click="test">HJ</v-avatar>

      <v-card id="userStatusCard" v-if="userStatus">
        <v-card-text class="user-state-text">
          <router-link to="/webtoon_home">
            작품
          </router-link>
        </v-card-text>
        <v-card-text>
          <router-link to="/작가정보문의">
            작가 정보 문의
          </router-link>
        </v-card-text>
        <v-card-text>
          <router-link to="/like_list_company">
            찜한 작가
          </router-link>
        </v-card-text>
        <v-card-text>
          <router-link to="/like_list">
            찜한 목록
          </router-link>
        </v-card-text>
        <v-card-text>
          <router-link to="/apply_writer">
            작가 신청
          </router-link>
        </v-card-text>
        <v-card-text>
          <router-link to="/apply_company">
            기업 회원 신청
          </router-link>
        </v-card-text>
      </v-card>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "이용약관",
  data() {
    return {
      testingText: "작품등록하기",
      userStatus: false,
    };
  },
  methods: {
    test() {
      this.userStatus = !this.userStatus;
    },
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
