<template>
  <v-container>
    <viewerend />
    <rejectreason />
    <oneonone />
    <approvethumnail />
  </v-container>
</template>

<script>
import viewerend from '../components/viewer-end.vue';
import rejectreason from '../components/reject-reason.vue'
import oneonone from '../components/oneonone-question.vue'
import approvethumnail from "../components/approve-thumbnail.vue";

export default {
  name: "WRITER_Home",
  components: {
    viewerend,
    rejectreason,
    oneonone,
    approvethumnail,
  },
};
</script>

<style scoped>

</style>