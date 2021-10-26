<template>
  <!-- 특정 웹툰의 화수를 보여주는 컴포넌트 입니다.
    상태 관리를 통해 수정 가능합니다.
 -->
  <div class="webtoon_round">
    <!-- 가장 기본적인 웹툰 화수를 표현하는 컴포넌트 -->
    <v-app v-if="webtoon_round_State == 0" id="inspire">
      <v-card v-scroll.self="onScroll" class="overflow-y-auto" max-height="400">
        <v-banner class="justify-center text-h5 font-weight-light" sticky>
          최신화부터 | 1화부터
          <span class="font-weight-bold" v-text="scrollInvoked"></span>
        </v-banner>

        <v-card-text>
          <div :key="n" class="mb-4">
            <v-row v-for="(toon, index) in webtoon" :key="index">
              <v-col cols="3"
                ><router-link to="/viewer"
                  ><v-img
                    :src="toon.url"
                    width="150"
                    height="150"/></router-link
              ></v-col>
              <v-col cols="9"
                ><v-card>{{ toon.round }} | {{ toon.date }}</v-card></v-col
              >
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-app>
    <!--  
            작가 사용자에게 보이는 작품 홈 페이지 에피소드 컴포넌트
            
            수정 버튼이 있으며 상단 EDIT 클릭시 에피소드 작성 페이지로 이동

            에피소드 옆 연필 버튼 클릭시 에피소드 수정 페이지 모달 생성
            
            -->
    <v-container fluid v-if="webtoon_round_State == 1">
      <v-app id="inspire">
        <v-card
          v-scroll.self="onScroll"
          class="overflow-y-auto"
          max-height="400"
        >
          <v-banner class="justify-center font-weight-light text-end" sticky>
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
      </v-app>
    </v-container>
    <!--  
        승인 페이지 에피소드 컴포넌트
        
        올린 에피소드 상태 확인

        상태는 심사 중 / 반려 / 승인 이 있음
        
        -->
    <v-container fluid v-if="webtoon_round_State == 2">
      <v-row v-for="(toon, index) in webtoon" :key="index">
        <v-col class="col-3"
          ><v-img :src="toon.url" width="150" height="150"
        /></v-col>
        <v-col class="col-7"
          ><v-card>{{ toon.round }} | {{ toon.date }}</v-card></v-col
        >
        <v-col class="col-1">
          <v-flex xs1>
            <v-btn class="col-1" dark small color="green" height="150"
              >심사 중</v-btn
            >
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: ["webtoon_round_State"],
  data() {
    return {
      webtoon: [
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
