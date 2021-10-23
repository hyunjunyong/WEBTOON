<template>
  <!--  
  승인 페이지 에피소드 컴포넌트
  
  올린 에피소드 상태 확인

  상태는 심사 중 / 반려 / 승인 이 있음
  
-->
    <v-container fluid>
        <v-row v-for="(toon,index) in webtoon" :key="index">
            <v-col class="col-3"><v-img :src="toon.url" width="150" height="150" /></v-col>
            <v-col class="col-7"><v-card>{{toon.round}} | {{toon.date}}</v-card></v-col>
            <v-col class="col-1"><approvebtn /></v-col>
        </v-row>
    </v-container>
</template>

<script>
import approvebtn from "../components/approve-btn";

export default {
    name:'approve-thumbnail',
    components: {
        approvebtn,
    },
    data(){
        return{
            webtoon:[
                {url:require("../img/nft.png"), round:"3화", date:"2021-10-13"},
                {url:require("../img/nft.png"), round:"2화", date:"2021-10-6"},
                {url:require("../img/nft.png"), round:"1화", date:"2021-10-1"},
            ]
        }
    },
    setup(){},
    create(){},
    mounted(){},
    unmounted(){},
    methods: {}
}
</script>