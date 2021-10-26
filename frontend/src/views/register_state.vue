<template>
    <v-container>
        <v-card class="mb-5 text-h4 pa-2" height="60">작품 등록 상태</v-card>
        <webtoonround :webtoon_round_State="2" />
    </v-container>
</template>
<script>
import webtoonround from "../components/webtoon-round.vue"

export default {
    name:'',
    components: {
        webtoonround,
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