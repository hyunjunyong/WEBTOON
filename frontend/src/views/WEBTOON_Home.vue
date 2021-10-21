<template>
  <div class="WRITER_Home">
    <WriterWebtoonIntro />
    <Writerprofile />
    <Webtoonsortvar />
  </div>
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
<style scoped>
@import "../css/WEBTOON_Home.css";
</style>
