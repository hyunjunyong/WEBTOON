<template>
  <v-container>
    <viewerend />
    <rejectreason />
    <approveThumbnail />
  </v-container>
</template>

<script>
import viewerend from '../components/viewer-end.vue';
import rejectreason from '../components/reject-reason.vue';
import approveThumbnail from '../components/approve-thumbnail';


export default {
  name: "WRITER_Home",
  components: {
    viewerend,
    rejectreason,
    approveThumbnail,
  },
};
</script>

<style scoped>

</style>