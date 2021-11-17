<template>
  <!-- 특정 웹툰의 화수를 보여주는 컴포넌트 입니다.
    상태 관리를 통해 수정 가능합니다.
 -->
  <v-container class="webtoon_round">
    <!-- 작가홈의 에피소드 화수를 표현하는 컴포넌트 -->
    <v-card
      v-if="webtoon_round_State == 0"
      class="overflow-y-auto"
      max-height="600"
      elvation="0"
    >
      <v-banner class="justify-center white text-end" sticky>
        <v-btn @click="webtoons.sort(round_Order)" color="black" text>
          최신화부터
        </v-btn>
        /
        <v-btn
          @click="webtoons.sort(date_Order)"
          color="black"
          text
          class="ml-4"
        >
          1화부터
        </v-btn>
        <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
      </v-banner>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                이미지
              </th>
              <th class="text-left">
                화 | 등록일
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(toon, index) in webtoons" :key="index">
              <td>
                <router-link to="/episode"
                  ><v-img :src="toon.url" width="50" height="50"
                /></router-link>
              </td>
              <td>
                <router-link
                  to="/episode"
                  style="text-decoration: none; color: inherit;"
                  >{{ toon.round }} | {{ toon.date }}</router-link
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <!--  
            작가 사용자에게 보이는 작품 홈 페이지 에피소드 컴포넌트
            
            수정 버튼이 있으며 상단 EDIT 클릭시 에피소드 작성 페이지로 이동

            에피소드 옆 연필 버튼 클릭시 에피소드 수정 페이지 모달 생성
            
            -->

    <v-card
      v-if="webtoon_round_State == 1"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-banner class="justify-center white text-end" sticky>
        <router-link style="text-decoration:none" to="/webtoon/add">
          <v-btn class="ma-2" color="#388E3C" dark>
            웹툰추가하기
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </router-link>
        <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
      </v-banner>

      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  수정 버튼
                </th>
                <th class="text-left">
                  이미지
                </th>
                <th class="text-left">
                  화 | 등록일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(toon, index) in webtoons" :key="index">
                <td>
                  <v-btn dark small color="green" width="50" height="50">
                    <v-icon dark>mdi-pencil</v-icon></v-btn
                  >
                </td>
                <td>
                  <router-link to="/webtoon_home_writer"
                    ><v-img :src="toon.url" width="50" height="50"
                  /></router-link>
                </td>
                <td>
                  <router-link
                    to="/webtoon_home_writer"
                    style="text-decoration: none; color: inherit;"
                    >{{ toon.round }} | {{ toon.date }}</router-link
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <!--  
        승인 페이지 에피소드 컴포넌트
        
        올린 에피소드 상태 확인

        상태는 심사 중 / 반려 / 승인 이 있음
        
        -->
    <v-card fluid v-if="webtoon_round_State == 2">
      <v-row v-for="(toon, index) in webtoon" :key="index">
        <v-col class="col-3"
          ><v-img :src="toon.url" width="150" height="150"
        /></v-col>
        <v-col class="col-7"
          ><v-card>{{ toon.round }} | {{ toon.date }}</v-card></v-col
        >
        <v-col class="col-1">
          <v-flex xs1>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="col-1"
                  dark
                  small
                  color="green"
                  height="150"
                  v-bind="attrs"
                  v-on="on"
                  >{{ toon.state }}</v-btn
                >
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  작품 반려 사유
                </v-card-title>
                <v-card-text height="40"> 사유 <br />작품 중복 </v-card-text>
                <v-divider />
                <v-spacer></v-spacer>
                <v-btn block color="primary" text @click="dialog = false">
                  확인
                </v-btn>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-col>
      </v-row>
    </v-card>
    <!--  
        찜한 작가 페이지 작가 목록 컴포넌트
        
        찜한 작가 확인

        작가별 코멘트 작성 가능
        
        -->
    <v-card
      fluid
      v-if="webtoon_round_State == 3"
      v-scroll.self="onScroll"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-row v-for="(toon, index) in webtoon" :key="index">
        <v-col cols="3"
          ><v-img :src="toon.url" width="150" height="150"
        /></v-col>
        <v-col cols="7">
          <v-card>{{ toon.round }} | {{ toon.date }}</v-card>
          <v-divider />
          <v-card>{{ toon.comment }}</v-card>
        </v-col>
        <v-col cols="1">
          <v-flex xs1>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  cols="1"
                  dark
                  small
                  color="green"
                  height="150"
                  v-bind="attrs"
                  v-on="on"
                  >{{ toon.delete }}</v-btn
                >
              </template>

              <v-card>
                <v-card-title class="text-h6 grey lighten-2">
                  관심 작가 목록에서 삭제 하시겠습니까?
                </v-card-title>
                <v-divider />
                <v-spacer></v-spacer>
                <v-btn block color="primary" text @click="dialog = false">
                  확인
                </v-btn>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-col>
      </v-row>
    </v-card>
    <!--  
        찜한 작가 페이지 작가 목록 컴포넌트
        
        찜한 작가 확인

        작가별 코멘트 작성 가능
        
        -->
    <v-card
      fluid
      v-if="webtoon_round_State == 4"
      v-scroll.self="onScroll"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                이미지
              </th>
              <th class="text-left">
                정보
              </th>
              <th class="text-left">
                승인
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(toon, index) in webtoon" :key="index">
              <td>
                <router-link to="/apply/episode">
                  <v-img :src="toon.url" width="100" height="100"
                /></router-link>
              </td>
              <td>{{ toon.title }} | {{ toon.round }} | {{ toon.date }}</td>
              <td>
                <v-flex xs1>
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        cols="1"
                        dark
                        color="green"
                        v-bind="attrs"
                        v-on="on"
                        >{{ toon.apply }}</v-btn
                      >
                    </template>

                    <v-card>
                      <v-card-title class="text-h6 grey lighten-2">
                        작품을 승인 하시겠습니까?
                      </v-card-title>
                      <v-divider />
                      <v-spacer></v-spacer>
                      <v-btn block color="primary" text @click="dialog = false">
                        승인
                      </v-btn>
                    </v-card>
                  </v-dialog>
                </v-flex>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <!-- Writer_home에 연결하는 컴포넌트 기본적이 만화를 클릭하게되면
        webtoon_HOMR 작품에 에피소드 화면을 출력해줌
     -->
    <v-card
      v-if="webtoon_round_State == 5"
      class="overflow-y-auto"
      max-height="600"
    >
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
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  이미지
                </th>
                <th class="text-left">
                  작품명
                </th>
                <th class="text-left">
                  등록일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(toon, index) in webtoons" :key="index">
                <td>
                  <router-link to="/webtoon"
                    ><v-img :src="toon.url" width="50" height="50"
                  /></router-link>
                </td>
                <td>
                  <router-link
                    to="/episode"
                    style="text-decoration: none; color: inherit;"
                    >{{ toon.round }}
                  </router-link>
                </td>
                <td>
                  <router-link
                    to="/episode"
                    style="text-decoration: none; color: inherit;"
                  >
                    {{ toon.date }}</router-link
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <!-- 작가입장에서 보는 에피소드 작가홈 -->
    <v-card
      v-if="webtoon_round_State == 6"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-banner class="justify-center white text-end" sticky>
        <v-btn @click="webtoons.sort(round_Order)" color="black" text>
          최신화부터
        </v-btn>
        /
        <v-btn
          @click="webtoons.sort(date_Order)"
          color="black"
          text
          class="ml-4"
        >
          1화부터
        </v-btn>
        <!-- <span class="font-weight-bold" v-text="scrollInvoked"></span> -->
      </v-banner>

      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  수정 버튼
                </th>
                <th class="text-left">
                  이미지
                </th>
                <th class="text-left">
                  화 | 등록일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(toon, index) in webtoons" :key="index">
                <td>
                  <v-btn dark small color="green" width="50" height="50">
                    <v-icon dark>mdi-pencil</v-icon></v-btn
                  >
                </td>
                <td>
                  <router-link to="/webtoon_home_writer"
                    ><v-img :src="toon.url" width="50" height="50"
                  /></router-link>
                </td>
                <td>
                  <router-link
                    to="/webtoon_home_writer"
                    style="text-decoration: none; color: inherit;"
                    >{{ toon.round }} | {{ toon.date }}</router-link
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "",
  components: {},
  props: ["webtoon_round_State", "webtoons"],
  data() {
    return {
      webtoon: [
        {
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/05.jpg"),
          round: "5화",
          date: "2021-10-27",
          state: "승인대기중",
          comment: "2순위",
          delete: "삭제",
          title: "작품 명",
          apply: "승인",
        },
        {
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/04.jpg"),
          round: "4화",
          date: "2021-10-20",
          state: "승인완료",
          comment: "성장 중",
          delete: "삭제",
          title: "작품 명",
          apply: "승인",
        },
        {
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/03.jpg"),
          round: "3화",
          date: "2021-10-13",
          state: "승인완료",
          comment: "1순위",
          delete: "삭제",
          title: "작품 명",
          apply: "승인",
        },
        {
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/02.jpg"),
          round: "2화",
          date: "2021-10-6",
          state: "반려중",
          comment: "성장 가능성 있음",
          delete: "삭제",
          title: "작품 명",
          apply: "승인",
        },
        {
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/01.jpg"),
          round: "1화",
          date: "2021-10-1",
          state: "승인대기중",
          comment: "제안 완료",
          delete: "삭제",
          title: "작품 명",
          apply: "승인",
        },
      ],
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {
    title_Order(a, b) {
      return a.round < b.round ? -1 : a.round > b.round ? 1 : 0;
    },
    date_Order(a, b) {
      var dateA = new Date(a["date"]).getTime();
      var dateB = new Date(b["date"]).getTime();
      return dateA < dateB ? 1 : -1;
    },
    round_Order(a, b) {
      return (
        Number(a.round.match(/(\d+)/g)[0]) - Number(b.round.match(/(\d+)/g)[0])
      );
    },
  },
};
</script>
<style scoped></style>
