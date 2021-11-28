<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" class="black">
        <v-img
          src="../img/webtoon/04. 물고기인간(출판형)/01_01_writer_썸네일.png"
          height="200"
          style="border-radius:10px"
        />
      </v-col>
    </v-row>
    <!-- 최상단 이미지 -->
    <v-row justify="center">
      <v-col cols="8">
        <!-- 작가 프로필 -->
        <Writerprofile :writerHomeInfo="writerHomeInfo" />

        <!-- 회사사용자만 볼 수 있음 -->
      </v-col> </v-row
    ><v-row justify="center">
      <v-col cols="8">
        <!-- 작품으로 이동하는 컴포넌트 -->
        <WebtoonList :writerHomeInfo="writerHomeInfo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Writerprofile from "../components/Writer-profile.vue";
import WebtoonList from "../components/round/webtoonList.vue";
import axios from "axios";
export default {
  name: "WRITER_Home",
  data() {
    return {
      writerHomeInfo: "",
    };
  },
  components: {
    Writerprofile,
    WebtoonList,
  },
  mounted() {
    axios
      .get(`http://localhost:5000/writer/${this.$route.params.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
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
