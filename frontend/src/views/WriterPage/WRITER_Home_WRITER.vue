<template>
  <!-- 작가 입장에서보는 작가홈 -->
  <v-card elevation="0">
    <v-card elevation="0" height="200" ma="5" color="primary"> </v-card>

    <!-- 최상단 이미지 -->
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <!-- 작가 프로필 -->
          <v-row class="justify-end">
            <v-col align="center" cols="2">
              <v-img
                :src="webtoons[0].user.authorAvatar"
                alt=""
                style="border-radius:10px"
                max-width="160px"
                max-height="160px"
              />
            </v-col>
            <v-col cols="10">
              <v-card elevation="0" class="mb-3">
                <v-card-title>{{ webtoons[0].user.authorName }}</v-card-title>
                <v-card-text>{{
                  webtoons[0].user.authorDescription
                }}</v-card-text>
              </v-card>

              <Modal :modalState="5" />
            </v-col>
          </v-row>
          <!-- <writerprofile /> -->
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <!-- 특정화수를 수정할 수 있는 컴포넌트 -->
          <!-- <webtoonround :webtoon_round_State="1" :webtoons="webtoons" /> -->
          <WebtoonListWriterVersion :webtoons="webtoons" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// import writerprofile from "../../components/Writer-profile.vue";
//import webtoonround from "../../components/webtoon-round.vue";
import WebtoonListWriterVersion from '../../components/round/webtoonListWriterVersion.vue';
import Modal from '../../components/modal.vue';
import axios from 'axios';

export default {
  name: 'WRITER_Home',
  data() {
    return {
      webtoons: [],
    };
  },
  components: {
    // writerprofile,
    //webtoonround,
    WebtoonListWriterVersion,
    Modal,
  },
  mounted() {
    axios
      .get('http://localhost:5000/writer/work', {
        withCredentials: true,
      })
      .then((res) => {
        this.webtoons = res.data;
        console.log(res);
      });
  },
};
</script>

<style scoped></style>
