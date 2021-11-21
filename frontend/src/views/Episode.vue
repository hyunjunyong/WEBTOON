<template>
  <!-- 
    작품의 에피소드가 보여지는 화면
   -->
  <v-container>
    <v-row justify="center" class="ma-0">
      <v-col cols="8"><Webtoonimage /> </v-col>
      <!-- 웹툰 특정 화수를 클릭할 때 나타나는 이미지 컴포넌트 -->
    </v-row>

    <v-row>
      <Viewerend />
    </v-row>
  </v-container>
</template>

<script>
import Webtoonimage from "../components/Webtoon-image";
import Viewerend from "../components/viewer-end.vue";
import axios from "axios";

export default {
  name: "VIEWER",
  components: {
    Webtoonimage,
    Viewerend,
  },
  data() {
    return {
      episodeImages: [],
    };
  },
  created() {
    this.getEpisodeImages();
  },
  methods: {
    getEpisodeImages() {
      //해당 에피소드의 에피소드 이미지 리스트를 받아서
      //data의 episodeImages에 넣어야함...
      //던져줄 데이터는 에피소드 id
      //받는 데이터는 이미지만...
      axios
        .get(`http://localhost:5000/episode/${this.$route.params.id}`)
        .then((res) => {
          this.episodeImages = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
