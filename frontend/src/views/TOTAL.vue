<template>
  <v-container class="TOTAL">
    <!-- 장르선택  -->
    <v-row no-gutters justify="center">
        <Genre :item="n" v-for="n in genre" :key="n.id" />
    </v-row>

    <v-row no-gutters justify="center">
      <!-- <v-col cols="8"> -->
      <Thumbnail :webtoon="i" v-for="i in webtoon" :key="i.id" />
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import Thumbnail from "../components/Thumbnail";
import Genre from "../components/genre";
import axios from "axios";

export default {
  name: "TOTAL",
  components: {
    Thumbnail,
    Genre,
  },
  created() {
    this.getThumbnails();
  },
  methods: {
    async getThumbnails() {
      await axios
        .get("http://localhost:5000/user/works")
        .then((req) => {
          this.webtoon = req.data;
        })
        .catch((err)=>{
          console.log(err);
        });
    },
  },
  data() {
    return {
      webtoon: {},
      genre: [
        { index: "1", name: "일  상" },
        { index: "2", name: "개  그" },
        { index: "3", name: "액  션" },
        { index: "4", name: "판타지" },
        { index: "5", name: "드라마" },
        { index: "6", name: "로맨스" },
        { index: "7", name: "공포/스릴러" },
      ],
    };
  },
};
</script>
