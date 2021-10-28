<template>
  <!-- 
    웹툰에서 특정 화수를 클릭시 보이는 화면

   -->
  <v-container fluid>
    <v-row class="justify-space-between">
      <v-col>
        <v-btn class="mx-2" fab>
          <!-- header show btn -->
          <v-icon dark>
            mdi-format-list-bulleted-square
          </v-icon>
        </v-btn>
      </v-col>
      <v-col><Webtoonimage /> </v-col>
      <!-- 웹툰 특정 화수를 클릭할 때 나타나는 이미지 컴포넌트 -->
      <v-col>
        <v-btn to="/" depressed elevation="5" fab large class="float-right">
          <!-- home btn -->
          <v-icon dark>
            mdi-home
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <viewerend />
    </v-row>
  </v-container>
</template>

<script>
import Webtoonimage from "../components/Webtoon-image";
import viewerend from "../components/viewer-end.vue";
export default {
  name: "VIEWER",
  data: () => ({
    //
  }),
  components: {
    Webtoonimage,
    viewerend,
  },
  method: {},
};
</script>

<style lang="scss" scoped></style>
