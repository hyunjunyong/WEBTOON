<template>
  <!-- 작품 소개 컴포넌트 -->
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="5">
        <v-img
          src="../img/webtoon/눈내리는소리1화(식자간격수정판)/02_작품홈.jpg"
          height="200px"
          contain
        />
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="8">
            <v-card class="mb-10" width="auto">
              눈내리는 소리
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-btn icon color="deep-orange" @click="increment">
              <v-icon>mdi-thumb-up</v-icon>{{ count }}
            </v-btn>
          </v-col>
          <v-col cols="2">
            <router-link to="/edit_Webtoon">
              <v-img
                contain
                src="../img/setting.png"
                height="30px"
                width="30px"
              />
            </router-link>
          </v-col>
        </v-row>
        <v-card height="90px">
          작품 소개 <br />
          겨울을 빼았긴 마을에<br />눈을 찾아오려는 소년의 모험
        </v-card>
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

<style lang="scss" scoped></style>
