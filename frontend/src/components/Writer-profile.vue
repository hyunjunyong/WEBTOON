<template>
  <!-- 작가 프로필 -->
  <v-row class="justify-end">
    <v-col align="center" cols="2">
      <v-img
        src="../img/writer_profile.png"
        alt=""
        max-width="160px"
        max-height="160px"
      />
      

    </v-col>
    <v-col cols="8">
      <v-card class="mb-3">
        <v-card-title>작가 A</v-card-title>
        <v-card-text>작가 한줄 소개</v-card-text>
      </v-card>

      <v-row justify="center">
        <v-btn class="mt-3" outlined color="indigo" @click="increment">
          좋아요
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      
        <router-link style="text-decoration:none" to="/propose">
          <v-col align="center">
            <v-btn outlined color="indigo">작가에게 제안하기</v-btn>
          </v-col>
        </router-link>

        <router-link style="text-decoration:none" to="/Boardlist">
          <v-col align="center">
            <v-btn outlined color="indigo">1:1 문의</v-btn>
          </v-col>
        </router-link>
      </v-row>
    </v-col>
    
    <v-col cols="2">좋아요 : {{ count }}</v-col>
  </v-row>
</template>

<script>
export default {
  name: "Writer_profile",
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


