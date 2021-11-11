<template>
  <v-container class="TOTAL">
    <v-row justify="center" no-gutters>
      <v-col cols="8">
        <Genre />
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col v-for="i in webtoon" :key="i.idx" cols="3">
        <Thumbnail :webtoon="i" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";
import Genre from "../components/Genre";

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
          idx: 1,
          title: 1,
          url: require("../img/nums/1.png"),
        },
        { idx: 2, title: 2, url: require("../img/nums/2.png") },
        { idx: 3, title: 3, url: require("../img/nums/3.png") },
        { idx: 4, title: 4, url: require("../img/nums/4.png") },
        { idx: 5, title: 5, url: require("../img/nums/5.png") },
        { idx: 6, title: 6, url: require("../img/nums/6.png") },
        {
          idx: 7,
          title: 7,
          url: require("../img/nums/7.png"),
        },
        {
          idx: 8,
          title: 8,
          url: require("../img/nums/8.png"),
        },
        {
          idx: 9,
          title: 9,
          url: require("../img/nums/9.png"),
        },
        {
          idx: 10,
          title: 10,
          url: require("../img/nums/10.png"),
        },
        {
          idx: 11,
          title: 11,
          url: require("../img/nums/11.png"),
        },
        {
          idx: 12,
          title: 12,
          url: require("../img/nums/12.png"),
        },
        {
          idx: 13,
          title: 13,
          url: require("../img/nums/13.png"),
        },
        {
          idx: 14,
          title: 14,
          url: require("../img/nums/14.png"),
        },
        {
          idx: 15,
          title: 15,
          url: require("../img/nums/15.png"),
        },
        {
          idx: 16,
          title: 16,
          url: require("../img/nums/16.png"),
        },
        {
          idx: 17,
          title: 17,
          url: require("../img/nums/17.png"),
        },
        {
          idx: 18,
          title: 18,
          url: require("../img/nums/18.png"),
        },
        {
          idx: 19,
          title: 19,
          url: require("../img/nums/19.png"),
        },
        {
          idx: 20,
          title: 20,
          url: require("../img/nums/20.png"),
        },
      ],
    };
  },
};
</script>
