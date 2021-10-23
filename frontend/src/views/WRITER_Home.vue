<template>
  <v-container>
    <viewerend />
    <rejectreason />
    <oneonone />
    <approvethumbnail />
    <approvebtn />
    <editthumbnail />

  </v-container>
</template>

<script>
import viewerend from '../components/viewer-end.vue';
import rejectreason from '../components/reject-reason.vue'
import oneonone from '../components/oneonone-question.vue'
import approvebtn from '../components/approve-btn.vue'
import approvethumbnail from '../components/approve-thumbnail.vue'
import editthumbnail from '../components/edit-thumbnail.vue'


export default {
  name: "WRITER_Home",
  components: {
    viewerend,
    rejectreason,
    oneonone,
    approvebtn,
    approvethumbnail,
    editthumbnail,
  },
};
</script>

<style scoped>

</style>