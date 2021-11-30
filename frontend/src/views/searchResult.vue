<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card class="mx-auto" elevation="0" tile>
          <h2>작가 검색 결과</h2>
          <v-list>
            <template v-for="index in $store.searchInfo.data.authors">
              <v-list-item @click="useRouterWriter(index.id)" :key="index">
                <v-list-item-avatar
                  style="border-radius:10px"
                  width="200px"
                  height="150px"
                >
                  <v-img :src="index.authorAvatar" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    ><h3>
                      {{ index.authorName }} | {{ index.authorDescription }}
                    </h3></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
        <v-card class="mx-auto" elevation="0" tile>
          <h2>작품 검색결과</h2>
          <v-list>
            <template v-for="index in $store.searchInfo.data.works">
              <v-list-item @click="useRouterWebtoon(index.id)" :key="index">
                <v-list-item-avatar
                  style="border-radius:10px"
                  width="200px"
                  height="150px"
                >
                  <v-img :src="index.workThumbnail" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    ><h3>
                      {{ index.title }} | {{ index.workDescription }}
                    </h3></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  setup() {},
  create() {},
  mounted() {
    axios
      .get(
        `http://localhost:5000/search?searchInput=${this.$store.searchInfo}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  },
  unmounted() {},
  methods: {
    useRouterWriter(index) {
      this.$router.push({
        name: "WRITER_Home",
        params: {
          id: index,
        },
      });
    },
    useRouterWebtoon(index) {
      this.$router.push({
        name: "WEBTOON_HOMR",
        params: {
          id: index,
        },
      });
    },
  },
};
</script>
<style scoped></style>
