<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-0">
        <v-img src="../img/code.png" alt="" height="300" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pl-8" cols="4">
        <writerprofile/>
        <!-- 작가 프로필 -->
        <router-link to="/ono_writer">
          <v-col align="center">
            <v-btn>1:1 문의</v-btn>
        </v-col></router-link>
      </v-col>
      <v-col cols="8">
        <webtoonround :webtoon_round_State="1" />
        <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import writerprofile from "../components/Writer-profile.vue"
import webtoonround from "../components/webtoon-round.vue"

export default {
  name: "WRITER_Home",
  components: {
    writerprofile,
    webtoonround,
  },
};
</script>

<style scoped>

</style>