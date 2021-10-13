<template>
    <div class="Webtoon-sort">
        <div class="Webtoon-sort wid">
            <div class="sortLeft"><img src="../img/pic.png" width="150" height="150" ></div>
            <div class="sortmsg">{{msg}}</div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Webtoonsort',
    components: {},
    data(){
        return{
            msg:"회차 - 등록일",
            
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
@import "../css/Webtoon-sort.css"
</style>