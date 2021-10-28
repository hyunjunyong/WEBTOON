<template>
  <!-- 
  관리자 로그인 시 메인화면
 -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <router-link to="/apply_webtoon" class="ma-2">
            <v-card>
          <v-card-title>
            작품 승인 신규 요청
          </v-card-title>
        </v-card>
        </router-link>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 4" :key="n" cols="3">
        <Thumbnail />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            공지
          </v-card-title>
        </v-card>
            <router-link to="/Notice_list" class="ma-2">
                <oneonone_question />
            </router-link>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            작가/회사 승인 신규 요청
          </v-card-title>
        </v-card>
            <oneonone_question />
      </v-col>
    </v-row>

    
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";
import oneonone_question from "../components/oneonone-question.vue";

export default {
  name: "Home",
  components: {
    Thumbnail,
    oneonone_question,

  },
};
</script>
