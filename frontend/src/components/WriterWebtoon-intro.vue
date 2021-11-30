<template>
  <!-- 작품 소개 컴포넌트 -->
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="3" class="mr-10">
        <v-row>
          <v-col>
            <h2>{{ webtoon.title }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-card elevation="0" height="90px">
            <v-row>
              <v-col>
                <div class="grey--text">
                  {{ webtoon.genreType[0].genre.name }}
                </div>

                <div @click="useRouter(webtoon.user.id)" class="grey--text">
                  {{ webtoon.user.authorName }}
                </div>
              </v-col>
              <v-col>
                <v-chip @click="like" color="blue" :outlined="isBtnOutLine">
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

      <v-col cols="8">
        <v-img
          :src="webtoon.workThumbnail"
          max-height="300px"
          max-width="720px"
          style="border-radius:10px"
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
    webtoonId: null,
  },
  data() {
    return {
      likes: 0,
      isBtnOutLine: null,
      webtoon: {
        genreType: Array,
        user: null,
      },
    };
  },

  created() {
    // 좋아요 갯수받는 api
    axios
      .get("http://localhost:5000/like/" + this.webtoonId, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);

        this.likes = res.data.likeCounts;
        if (res.data.userLikeStatus == true) {
          this.isBtnOutLine = false;
        } else {
          this.isBtnOutLine = true;
        }

        // this.genre = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    this.webtoon.genreType[0] = {
      genre: {
        name: null,
      },
    };
    this.webtoon.user = {
      AuthorName: null,
    };
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
  mounted() {},
  methods: {
    useRouter(index) {
      this.$router.push({
        name: "WRITER_Home",
        params: {
          id: index,
        },
      });
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
          if (res.data == true) {
            this.likes++;
            this.isBtnOutLine = false;
          } else if (res.data.userLikeStatus == false && this.likes != 0) {
            this.likes--;
            this.isBtnOutLine = true;
          } else {
            this.isBtnOutLine = true;
            this.likes = 0;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5em;
}
.blue {
  background-color: blue;
}
</style>
