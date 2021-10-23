<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <WriterWebtoonIntro />
        <Webtoonsortvar />
      </v-col>

      <v-col cols="4">
        <Writerprofile />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue";
import Writerprofile from "../components/Writer-profile.vue";
import Webtoonsortvar from "../components/Webtoon-sortvar.vue";

export default {
  name: "WEBTOON_Home",
  data: () => ({
    //
  }),
  components: {
    Webtoonsortvar,
    WriterWebtoonIntro,
    Writerprofile,
  },
};
</script>
<style scoped></style>
