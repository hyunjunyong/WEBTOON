<template>
    <v-container fluid>
        <v-app id="inspire">
        <v-card
          v-scroll.self="onScroll"
          class="overflow-y-auto"
          max-height="400"
        >
          <v-banner
            class="justify-center font-weight-light text-end"
            sticky 
          >
            최신화부터 | 1화부터
          </v-banner>
            <v-btn
            block
            height="100"
            >
                <v-icon>
                    mdi-pencil
                </v-icon>
                    Edit
            </v-btn>
          <v-card-text>
            <div
              :key="n"
              class="mb-4"
            >
                 <v-row v-for="(toon,index) in webtoon" :key="index">
                    <v-btn class="col-1" dark small color="green" height="150"> <v-icon dark>mdi-pencil</v-icon></v-btn>
                    <v-col class="col-3"><v-img :src="toon.url" width="150" height="150" /></v-col>
                    <v-col class="col-7"><v-card>{{toon.round}} | {{toon.date}}</v-card></v-col>
                </v-row>
            </div>
          </v-card-text>
        </v-card>
        </v-app>
    </v-container>
</template>

<script>

export default {
    name:'adit-thumbnail',
    components: {},
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