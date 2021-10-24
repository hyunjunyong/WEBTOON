<template>
<!-- 만화 보는 페이지에 하단 
작가의 다른작품 추천과 다음화 이전화로 넘어갈 수 있게함 -->
      <v-container>
    <v-row dense>
      <v-col>
        <v-card class="text-center">작가의 다른 작품 추천</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 4" :key="n" cols="3" class="pa-0">
        <Thumbnail />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <v-btn block>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col class="pa-0">
        <v-btn block>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Thumbnail from "./Thumbnail.vue"
export default {
    name:'',
    components: {
        Thumbnail,
    },
    data(){
        return{}
    },
    setup(){},
    create(){},
    mounted(){},
    unmounted(){},
    methods: {}
}
</script>
<style scoped></style>