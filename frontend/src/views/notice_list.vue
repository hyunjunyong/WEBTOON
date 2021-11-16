<template>
<!--
1:1 문의 나 공지 등 일반 게시판 화면
-->
    <v-container>
    <v-row justify="center">
      <v-col cols="10" class="mb-3">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold">
              공지 사항
          </v-card-title>
        </v-card>
      </v-col>
        <list />
    </v-row>
        <v-row justify="center" ma="5">
            <router-link to="/Notice" class="ma-2">
              <v-btn
                color="primary"
                depressed
                block
                large >
                 글쓰기
              </v-btn>
            </router-link>
        </v-row>
    </v-container>
</template> 


<script>
import list from "../components/list"

export default { 
    name: 'Boardlist', 
    components: {
        list,
    },
};
</script>