<template>
    <v-container fluid>
        <v-row v-for="(toon,index) in webtoon" :key="index">
            <v-col class="col-3"><v-img :src="toon.url" width="150" height="150" /></v-col>
            <v-col class="col-9"><v-card>{{toon.round}} | toon.date</v-card></v-col>
        </v-row>
    </v-container>
</template>
<!-- <div class="Webtoon-sort">
        <div v-for="(toon,index) in webtoon" :key="index" class="Webtoon-sort wid">
            <div class="sortLeft"><img :src="toon.url" alt="" width="150" height="150"></div>
            <div class="sortmsg">{{toon.round}} | {{toon.date}}</div>
        </div>
    </div> -->
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