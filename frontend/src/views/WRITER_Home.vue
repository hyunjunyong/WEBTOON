<template>
  <v-container>
    <viewerend />
    <rejectreason />
    <oneonone />
    <approvethumbnail />
  </v-container>
</template>

<script>
import viewerend from '../components/viewer-end.vue';
import rejectreason from '../components/reject-reason.vue'
import oneonone from '../components/oneonone-question.vue'
import approvethumbnail from '../components/approve-thumbnail.vue'


export default {
  name: "WRITER_Home",
  components: {
    viewerend,
    rejectreason,
    oneonone,
    approvethumbnail,

  },
};
</script>

<style scoped>

</style>