<template>
  <!-- 작품 소개 컴포넌트 -->
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="3">
        <v-row>
          <v-col>
            <h4>{{ webtoon.title }}</h4>
          </v-col>
        </v-row>

        <v-row>
          <v-card elevation="0" height="90px">
            <v-row>
              <v-col>
                <div class="grey--text">
                  {{ webtoon.genreType[0].genre.name }}
                </div>
                <div class="grey--text">{{ webtoon.user.authorName }}</div>
              </v-col>
              <v-col>
                <v-chip outlined color="primary" @click="like">
                  좋아요 : {{ likes }}
                </v-chip>
              </v-col>
            </v-row>

            <v-row class="mt-10">
              <span>
                {{ webtoon.workDescription }}
              </span>
            </v-row>
          </v-card>
        </v-row>
      </v-col>

      <v-col cols="5">
        <v-img
          :src="webtoon.workThumbnail"
          max-height="200px"
          max-width="auto"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "WriterWebtoon_intro",
  props: {
    // webtoonId : 부모 컴포넌트에서 받아온 작가 아이디
    webtoonId: String,
  },
  data() {
    return {
      likes: 0,
      webtoon: [],
    };
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
    like() {
      axios
        .post(
          "http://localhost:5000/user/like",
          {
            workId: this.webtoonId,
          },
          { withCredentials: true }
        )
        .then((res) => {
          // this.genre = response.data;
          console.log(res);
          //likes;
          this.likes++;
        });
    },
    getWebtoonBanner() {
      //현재 페이지에서 작품에 대한
      //api로 가져와야하는 값
      //썸네일(썸네일 보다는 Banner를 가져오는게 좋을꺼 같은데 현재에는 banner 라는 것이 없으니 썸네일로 대체)
      //작품 제목
      //작품 장르
      //작가 이름
    },
  },
  mounted() {
    // 좋아요 갯수받는 api
    axios
      .get("http://localhost:5000/like/" + this.webtoonId, {
        withCredentials: true,
      })
      .then((res) => {
        // this.genre = response.data;
        this.likes = res.data.likeCounts;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:5000/${this.$route.params.id}/episode/`, {
        withCredentials: true,
      })
      .then((res) => {
        this.webtoon = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5em;
}
</style>
