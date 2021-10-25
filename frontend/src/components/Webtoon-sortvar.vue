<template>
  <!-- 웹툰 홈에 들어갈 웹툰 썸네일과 화수, 등록일자 -->
  <v-container>
    <v-card v-scroll.self="onScroll" class="overflow-y-auto" max-height="450">
      <v-banner class="justify-center font-weight-light white" sticky>
        최신화부터 | 1231화부터
      </v-banner>

      <v-card-text>
        <div :key="n" class="mb-4">
          <v-row v-for="(toon, index) in webtoon" :key="index">
            <!-- 여기 컴포넌트로 분리 해야합니다. -->

            <v-col cols="3">
              <v-img :src="toon.url" width="150" height="150" />
            </v-col>

            <v-col cols="9">
              <v-card> {{ toon.round }} | toon.date </v-card>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Webtoon-sortvar",
  components: {},
  data() {
    return {
      webtoon: [
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },
        { url: require("../img/nft2.png"), round: "3화", date: "2021-10-13" },

        { url: require("../img/nft2.png"), round: "2화", date: "2021-10-6" },
        { url: require("../img/nft2.png"), round: "1화", date: "2021-10-1" },
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
<style scoped></style>
