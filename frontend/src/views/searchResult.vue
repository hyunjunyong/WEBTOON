<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" class="ma-2">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            작가 검색결과
          </v-card-title>

          <v-list>
            <v-divider></v-divider>
            <template v-for="index in $store.searchInfo.data.authors">
              <v-list-item
                @click="useRouterWriter(index.id)"
                :key="index"
                three-line
              >
                <v-list-item-avatar
                  style="border-radius:10px"
                  width="150px"
                  height="100px"
                  aspect-ratio="1"
                >
                  <v-img :src="index.authorAvatar" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    ><h2>
                      {{ index.authorName }}
                    </h2></v-list-item-title
                  >

                  <v-list-item-subtitle>
                    <v-card color="transparent">
                      {{ index.authorDescription }}
                    </v-card>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>

        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
            작품 검색결과
          </v-card-title>

          <v-list>
            <v-divider></v-divider>
            <template v-for="index in $store.searchInfo.data.works">
              <v-list-item
                @click="useRouterWebtoon(index.id)"
                :key="index"
                three-line
              >
                <v-list-item-avatar
                  style="border-radius:10px"
                  width="150px"
                  height="100px"
                  aspect-ratio="1"
                >
                  <v-img :src="index.workThumbnail" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    ><h2>
                      {{ index.title }}
                    </h2></v-list-item-title
                  >

                  <v-list-item-subtitle>
                    <v-card color="transparent">
                      {{ index.workDescription }}
                    </v-card>
                  </v-list-item-subtitle>
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
import axios from 'axios';
export default {
  name: '',
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
      .then(() => {
        //console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  },
  unmounted() {},
  methods: {
    useRouterWriter(index) {
      this.$router.push({
        name: 'WRITER_Home',
        params: {
          id: index,
        },
      });
    },
    useRouterWebtoon(index) {
      this.$router.push({
        name: 'WEBTOON_HOMR',
        params: {
          id: index,
        },
      });
    },
  },
};
</script>
<style scoped></style>
