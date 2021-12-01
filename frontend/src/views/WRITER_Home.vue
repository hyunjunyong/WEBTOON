<template>
  <v-card elevation="0">
    <v-card elevation="0" height="200" ma="5" color="primary"> </v-card>

    <!-- 최상단 이미지 -->
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <!-- 작가 프로필 -->
          <Writerprofile :writerHomeInfo="writerHomeInfo" />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8">
          <!-- 작품으로 이동하는 컴포넌트 -->
          <WebtoonList :writerHomeInfo="writerHomeInfo" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Writerprofile from '../components/Writer-profile.vue';
import WebtoonList from '../components/round/webtoonList.vue';
import axios from 'axios';

export default {
  name: 'WRITER_Home',
  data() {
    return {
      writerHomeInfo: {
        id: null,
        authorAvatar: null,
        authorDescription: null,
        authorName: null,
        work: Array,
      },
    };
  },
  components: {
    Writerprofile,
    WebtoonList,
  },
  mounted() {
    axios
      .get(`http://localhost:5000/author/${this.$route.params.id}`)
      .then((res) => {
        //console.log(res.data);
        this.writerHomeInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.profile_Img {
  position: absolute;
  top: 10em;
  left: 7em;
}
</style>
