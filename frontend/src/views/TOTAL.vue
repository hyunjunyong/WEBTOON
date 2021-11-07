<template>
  <v-container class="TOTAL">
    <v-row no-gutters justify="center">
      <v-col cols="10">
        <Genre />
      </v-col>
    </v-row>
    <v-row v-for="m in 4" :key="m" no-gutters justify="center">
      <v-col v-for="n in webtoon" :key="n.id" cols="2">
        <Thumbnail :webtoon="n" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";
import Genre from "../components/genre";

export default {
  name: "TOTAL",
  components: {
    Thumbnail,
    Genre,
  },
  data() {
    return {
      webtoon: [
        {
          id: "0",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/01_썸네일.jpg"),
        },
        {
          id: "1",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/02_썸네일.jpg"),
        },
        {
          id: "2",
          title: "물고기인간",
          url: require("../img/webtoon/04. 물고기인간(출판형)/01_03_썸네일.png"),
        },
        {
          id: "3",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/03_썸네일.jpg"),
        },
        {
          id: "4",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/04_썸네일.jpg"),
        },
      ],
    };
  },
};
</script>
