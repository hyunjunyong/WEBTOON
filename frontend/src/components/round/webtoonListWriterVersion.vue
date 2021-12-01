<template>
  <!-- 
  작가의 작품리스트를 출력함.
  /writer에서 사용됨
  해당 작품홈으로 이동해야함
-->
  <v-card max-height="auto" elevation="0">
    <v-banner class="white text-end" sticky>
      <v-btn @click="webtoons.sort(title_Order)" color="black" text>
        제목순
      </v-btn>
      /
      <v-btn @click="webtoons.sort(date_Order)" color="black" text>
        업데이트 순
      </v-btn>
      <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
      <router-link style="text-decoration:none" to="/add/webtoon">
        <v-btn class="ma-2" color="green" dark rounded>
          작품 추가
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </router-link>
    </v-banner>

    <v-list>
      <template v-for="webtoon in webtoons">
        <v-list-item :key="webtoon.id" @click="useRouter(webtoon.id)" two-line>
          <v-list-item-avatar
            width="200px"
            height="150px"
            style="border-radius:10px"
            aspect-ratio="1"
          >
            <v-img :src="webtoon.workThumbnail" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <h4>
                {{ webtoon.title }}
              </h4>
            </v-list-item-title>

            <v-list-item-subtitle>
              <v-card color="transparent">
                {{ webtoon.workDescription }}
              </v-card>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="webtoon.id"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
// import axios from "axios";

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
