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
            <v-col class="col-1">
                <v-flex xs1>
                <v-btn class="col-1" dark small color="green" height="150">심사 중</v-btn>
                </v-flex>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>

export default {
    name:'approve-thumbnail',
    components: {
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