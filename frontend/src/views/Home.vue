<template>
  <!-- 
  맨 처음 화면으로 인기, 신작, 추천, 내가 본 웹툰을 보여준다.
  썸네일을 누르면 해당 작품페이지로 바로 이동한다.
 -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            인기 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 4" :key="n" cols="3">
        <Thumbnail />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            신작 웹툰
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title>
            추천 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 4" :key="n" cols="3">
        <Thumbnail />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            내가 본 웹툰
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters v-for="m in 3" :key="m">
      <v-col v-for="n in 4" :key="n" cols="3">
        <Thumbnail />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";

export default {
  name: "Home",
  components: {
    Thumbnail,
  },
};
</script>
