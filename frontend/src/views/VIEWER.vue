<template>
  <div class="VIEWER">
    <div class="VIEWER pre"><button ><img src="../img/pre.png" alt="" width="65px" height="65px"></button></div>
    <div><Webtoonimage /></div>
    <div class="VIEWER home"><button><img src="../img/home.png" alt="" width="65px" height="65px"></button></div>
  </div>
</template>

<script>
import Webtoonimage from "../components/Webtoon-image";

export default {
  name: "VIEWER",
  data: () => ({
    //
  }),
  components: {
    Webtoonimage,
  },
};
</script>

<style lang="scss" scoped>
  @import "../css/VIEWER.css"
  
</style>