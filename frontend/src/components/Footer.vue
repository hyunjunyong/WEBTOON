<template>
  <v-footer dark padless >

      <v-card class="flex tile text-center">
      <v-col cols="12">
        <router-link to="/Notice_list" class="ma-2"  style="text-decoration:none">
          <span class="white--text">공지</span>
        </router-link>

        <router-link to="/Tos" class="ma-2" style="text-decoration:none">
          <span class="white--text">이용약관</span>
        </router-link>

        <router-link to="/개인정보처리방침" class="ma-2"  style="text-decoration:none">
          <span class="white--text"> 개인정보처리방침</span>
        </router-link>
      </v-col>

        <v-card-text class="grey--text">
          개발자의 품격 웹툰 플랫폼 <br />대표 개발자의 품격 3기 1팀<br />사업자등록번호 111-11-11111 통신판매업 신고번호 제2021-서울강서-00001호<br />대표번호 070-0000-0000 FAX 02-0000-0000 주소 서울특별시 강서구 행복로 1
        </v-card-text>

        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 grey--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        
      </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
    ],
  }),
};
</script>