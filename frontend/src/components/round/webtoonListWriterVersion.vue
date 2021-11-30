<template>
  <!-- 
  작가의 작품리스트를 출력함.
  /writer에서 사용됨
  해당 작품홈으로 이동해야함
-->
  <v-card class="overflow-y-auto" max-height="600" elevation="0">
    <v-banner class="justify-center white" sticky>
      <h3>작가의 작품</h3>
      <v-btn @click="webtoons.sort(title_Order)" color="black" text>
        제목순
      </v-btn>
      /
      <v-btn @click="webtoons.sort(date_Order)" color="black" text>
        날짜 순
      </v-btn>
      <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
    </v-banner>

    <v-card-text>
      <v-list height="200px">
        <router-link style="text-decoration:none" to="/add/webtoon/">
          <v-btn class="ma-2" color="#388E3C" dark block height="50px">
            웹툰 추가
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </router-link>
        <template v-for="webtoon in webtoons" @click="useRouter(webtoon.id)">
          <v-list-item :key="webtoon.id" height="100px">
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
              <v-list-sub-title>{{ webtoon.workDescription }}</v-list-sub-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="webtoon.id"></v-divider>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';
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
    getWebtoonList() {
      //해당 작가의 작품 리스트를 받아서
      //data의 webtoon에 넣어야함...
      //던져줄 데이터는 작가 id
      //받는 데이터는 {작품id, 작품 이름, 작품 썸네일, 작품 승인날짜}
      axios
        .get('http://localhost:5000/', {}, { withCredentials: true })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
