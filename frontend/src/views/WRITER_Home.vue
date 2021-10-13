<template>
  <div class="WRITER_Home">
    <div class="status_thm"><p>등록 에피 소드 상태</p>
      <p>총 승인 대기작 : 4 | 심사중 : 3 | 승인완료 : 1</p>
    </div>
    <div class="plus_Thumbnail">+</div>
    <Writerprofile />
    <div>작가 승인 완료</div>
    <div class="Thumnail_all">
      <div><img src="../img/nft.png" alt="" height="150px;" width="150px;"></div>
      <div class="Thumnail_into">
        <div class="Thumnail_name">작품명</div>
        <div class="Thumnail_info">
          <p>작품소개</p>
          <p>회차 수</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Writerprofile from '../components/Writer-profile.vue'
export default {
  name: "WRITER_Home",
  components: {
    Writerprofile,
  },
};
</script>

<style scoped>
@import "../css/WRITER_Home.css"
</style>