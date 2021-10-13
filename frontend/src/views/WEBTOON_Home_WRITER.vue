<template>
  <div class="WEBTOON_Home_WRITER">
    <WriterWebtoonIntro />
    <Writerprofile />
    <div class="plus_Thumbnail">+</div>
    <editThumbnail />
    <editThumbnail />
  </div>
</template>

<script>
import editThumbnail from "../components/edit-thumbnail.vue";
import WriterWebtoonIntro from "../components/WriterWebtoon-intro.vue";
import Writerprofile from "../components/Writer-profile.vue";

export default {
  name: "WEBTOON_Home_WRITER",
  data: () => ({
    //
  }),
  components: {
    editThumbnail,
    WriterWebtoonIntro,
    Writerprofile,
  },
};
</script>

<style scoped>
@import "../css/WEBTOON_Home_WRITER.css";
</style>
