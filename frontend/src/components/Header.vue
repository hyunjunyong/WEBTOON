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

        <router-link to="/Boardlist"
          ><strong class="router-text">게시판</strong></router-link
        >
      </p>

      <v-spacer></v-spacer>

      <v-row class="red ma-3 serchInput">
        <v-img
          src="../img/free-icon-detective-magnifying-glass-14877.png"
          max-width="30"
          class="ma-1 radius"
        ></v-img>

        <input />
      </v-row>

      <v-hover><v-avatar color="red" size="40">HJ</v-avatar></v-hover>
    </v-app-bar>
  </v-container>
</template>

<style>
.router-text {
  color: black;
}
.serchInput {
  border-radius: 5px;
}
</style>
