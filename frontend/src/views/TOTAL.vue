<template>
  <v-container class="TOTAL">
    <v-col>
      <Genre />
    </v-col>
    <v-row v-for="m in 4" :key="m" no-gutters>
      <v-col v-for="n in 6" :key="n" cols="2">
        <Thumbnail :webtoon="webtoon[n]" />
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
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/01.jpg"),
        },
        {
          id: "1",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/02.jpg"),
        },
        {
          id: "2",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/03.jpg"),
        },
        {
          id: "3",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/04.jpg"),
        },
        {
          id: "4",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/05.jpg"),
        },
        {
          id: "5",
          title: "눈내리는소리",
          url: require("../img/webtoon/눈내리는소리1화(식자간격수정판)/06.jpg"),
        },
      ],
    };
  },
};
</script>
