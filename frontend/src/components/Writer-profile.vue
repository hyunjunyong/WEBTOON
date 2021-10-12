<template>
  <div class="profile_all">
    <div class="profile_img">
        <img src="../img/setting.png" class="profile_img setting" alt="" height="50px" width="50px">
        <img src="../img/writer_profile.png" class="profile_img main" alt="" height="150px" width="150px">
        <img src="../img/like.png" class="profile_img like" alt="" height="50px" width="50px">    
    </div>

    <div class="profile_border">
        <p>작가명</p>
    </div>
    <div class="profile_border">
        <p>작가의 말</p>
        <p>가입날짜</p>
    </div>

    <div>
        <div class="profile_border">획득 뱃지</div>
        <img src="../img/badge.png" alt="" height="65px" width="65px">
    </div>
  </div>
</template>

<script>
export default {
  name: "Writer_profile",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
    @import "../css/Writer-profile.css"
</style>