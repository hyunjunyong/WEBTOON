<template>
  <!-- 작품 소개 컴포넌트 -->
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="3">
        <v-row>
          <v-col cols="8">
            <v-card elevation="0" class="pl-5" width="auto">
              <h1>눈내리는 소리</h1>
            </v-card>
          </v-col>
        </v-row>
        <v-card elevation="0" class="pl-5" height="90px">
          <div class="grey--text">장르</div>
          <div class="grey--text">작가 A</div>
          <div>
            <v-btn icon color="purple" @click="increment()">
              <v-icon>mdi-thumb-up</v-icon>{{ count }}
            </v-btn>
          </div>
          <div>작품 소개</div>
          겨울을 빼았긴 마을에 눈을 찾아오려는 소년의 모험
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-img
          src="../img/webtoon/눈내리는소리1화(식자간격수정판)/02_작품홈.jpg"
          max-height="200px"
          max-width="auto"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WriterWebtoon_intro",
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5em;
}
</style>
