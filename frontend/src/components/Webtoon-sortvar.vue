<template>
<!-- 웹툰 홈에 들어갈 웹툰 썸네일과 화수, 등록일자 -->
    <div id="app">
      <v-app id="inspire">
        <v-card
          v-scroll.self="onScroll"
          class="overflow-y-auto"
          max-height="400"
        >
          <v-banner
            class="justify-center text-h5 font-weight-light"
            sticky
          >
            최신화부터 | 1화부터
      
            <span
              class="font-weight-bold"
              v-text="scrollInvoked"
            ></span>
          </v-banner>
      
          <v-card-text>
            <div
              :key="n"
              class="mb-4"
            >
                <v-row v-for="(toon,index) in webtoon" :key="index">
                    <v-col cols="3"><router-link to="/viewer"><v-img :src="toon.url" width="150" height="150" /></router-link></v-col>
                    <v-col cols="9"><v-card>{{toon.round}} | {{toon.date}}</v-card></v-col>
                </v-row>
            </div>
          </v-card-text>
        </v-card>
  </v-app>
</div>    
</template>

<script>

export default {
    name:'Webtoon-sortvar',
    components: {},
    data(){
        return{
            webtoon:[
                {url:require("../img/nft2.png"), round:"3화", date:"2021-10-13"},
                {url:require("../img/nft2.png"), round:"2화", date:"2021-10-6"},
                {url:require("../img/nft2.png"), round:"1화", date:"2021-10-1"},
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
<style scoped>

</style>