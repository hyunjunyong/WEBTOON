<template>
  <!-- 
  작가의 작품리스트를 출력함.
  /writer에서 사용됨
  해당 작품홈으로 이동해야함
-->
  <v-card elevation="0" class="overflow-y-auto" max-height="600">
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
    <v-list>
      <template v-for="webtoon in writerHomeInfo.work">
        <v-list-item @click="useRouter(webtoon.id)" :key="webtoon.id">
          <v-list-item-avatar
            style="border-radius:10px"
            width="200px"
            height="150px"
          >
            <v-img :src="webtoon.workThumbnail" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              ><h3>
                {{ webtoon.title }} | {{ webtoon.workDescription }}
              </h3></v-list-item-title
            >
            <!-- <v-list-item-subtitle>{{
              episode.updatedAt.slice(0, 10)
            }}</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="`Divider_` + webtoon.id"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
// import axios from "axios";

export default {
  name: 'webtoonList',
  props: {
    writerHomeInfo: Object,
  },
  data() {
    return {
      webtoons: [
        {
          id: 1,
          name: 'helloWorld',
          date: '2008.1.3',
          thumbnail: require('../../img/nums/1.png'),
        },
      ],
    };
  },
  mounted() {},
  methods: {
    title_Order(a, b) {
      return a.round < b.round ? -1 : a.round > b.round ? 1 : 0;
    },
    date_Order(a, b) {
      var dateA = new Date(a['date']).getTime();
      var dateB = new Date(b['date']).getTime();
      return dateA < dateB ? 1 : -1;
    },
    useRouter(index) {
      this.$router.push({
        name: 'WEBTOON_HOMR',
        params: {
          id: index,
        },
      });
    },
    // getWebtoonList() {
    //   해당 작가의 작품 리스트를 받아서
    //   data의 webtoon에 넣어야함...
    //   던져줄 데이터는 작가 id
    //   받는 데이터는 {작품id, 작품 이름, 작품 썸네일, 작품 승인날짜}
    //   axios
    //     .get("http://localhost:5000/", {}, { withCredentials: true })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>
