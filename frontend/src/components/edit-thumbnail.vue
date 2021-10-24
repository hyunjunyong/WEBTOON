<template>
  <!--  
  작가 사용자에게 보이는 작품 홈 페이지 에피소드 컴포넌트
  
  수정 버튼이 있으며 상단 EDIT 클릭시 에피소드 작성 페이지로 이동

  에피소드 옆 연필 버튼 클릭시 에피소드 수정 페이지 모달 생성
  
-->
  <v-container>
    <v-card v-scroll.self="onScroll" class="overflow-y-auto" max-height="400">
      <v-banner class="justify-center font-weight-light white" sticky>
        최신화부터 | 1화부터
      </v-banner>

      <router-link to="/EDIT_EPISODE" class="ma-2">
        <v-btn block height="100">
          <v-icon>
            mdi-pencil
          </v-icon>
          Edit
        </v-btn>
      </router-link>

      <v-card-text>
        <div :key="n" class="mb-4">
          <v-row v-for="(toon, index) in webtoon" :key="index">
            <v-btn class="col-1" dark small color="green" height="150">
              <v-icon dark>mdi-pencil</v-icon></v-btn
            >
            <v-col class="col-3"
              ><v-img :src="toon.url" width="150" height="150"
            /></v-col>
            <v-col class="col-7"
              ><v-card>{{ toon.round }} | {{ toon.date }}</v-card></v-col
            >
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "adit-thumbnail",
  components: {},
  data() {
    return {
      webtoon: [
        { url: require("../img/nft.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft.png"), round: "2화", date: "2021-10-6" },
        { url: require("../img/nft.png"), round: "1화", date: "2021-10-1" },
      ],
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
