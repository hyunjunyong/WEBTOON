<template>
  <!-- 
  작가의 작품리스트를 출력함.
  /writer에서 사용됨
  해당 작품홈으로 이동해야함
-->
  <v-card max-height="auto" elevation="0">
    <v-card-text>
      <v-list>
        <router-link style="text-decoration:none" to="/add/webtoon/">
          <v-btn
            depressed
            class="ma-2"
            color="#388E3C"
            dark
            block
            height="50px"
          >
            웹툰 추가
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </router-link>
        <template v-for="webtoon in webtoons">
          <v-list-item
            :key="webtoon.id"
            height="100px"
            @click="useRouter(webtoon.id)"
          >
            <v-list-item-avatar
              width="200px"
              height="100px"
              style="border-radius:5px"
            >
              <v-img :src="webtoon.workThumbnail" style="border-radius:10px" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                <h3>{{ webtoon.title }}</h3>
              </v-list-item-title>
              <v-list-item-subtitle>{{
                webtoon.workDescription
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="webtoon.id"></v-divider>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
// import axios from "axios";
// asdf
export default {
  name: 'webtoonList',
  data() {
    return {};
  },
  props: {
    webtoons: Object,
  },
  methods: {
    useRouter(index) {
      this.$router.push({
        name: 'WEBTOON_Home_WRITER',
        params: {
          id: index,
        },
      });
    },
  },
};
</script>
