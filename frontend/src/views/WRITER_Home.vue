<template>
  <v-container>
    <viewerend />
    <rejectreason />
    <oneonone />
  </v-container>
</template>

<script>
import viewerend from '../components/viewer-end.vue';
import rejectreason from '../components/reject-reason.vue'
import oneonone from '../components/oneonone-question.vue'
export default {
  name: "WRITER_Home",
  components: {
    viewerend,
    rejectreason,
    oneonone,
  },
};
</script>

<style scoped>

</style>