<template>
  <v-container>
    <viewerend />
    <rejectreason />
  </v-container>
</template>

<script>
import viewerend from '../components/viewer-end.vue';
import rejectreason from '../components/reject-reason.vue'
export default {
  name: "WRITER_Home",
  components: {
    viewerend,
    rejectreason
  },
};
</script>

<style scoped>

</style>