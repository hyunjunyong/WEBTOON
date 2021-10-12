<template>
  <div class="WRITER_Home">
    <WriterWebtoonIntro />
    <Writerprofile />
  </div>
</template>

<script>
import WriterWebtoonIntro from '../components/WriterWebtoon-intro.vue';
import Writerprofile from '../components/Writer-profile.vue'
export default {
  name: "WEBTOON_Home",
  data: () => ({
    //
  }),
  components: {
    WriterWebtoonIntro,
    Writerprofile,
  },
};
</script>
