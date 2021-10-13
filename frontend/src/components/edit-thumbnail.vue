<template>
    <div class="edit-thumbnail">
        <div class="ebutton"><button v-on:click="click">{{msg}}</button></div>
        <div class="wbutton">
            <img width="150" height="150" float="left" src="../img/nft.png">
        </div>
        <div class="mbutton"><p>{{msg_round}} </p></div>
    </div>
</template>
<script>
export default {

    name:'',
    components: {},
    data(){
        return{
            msg:"수정",
            msg_round:"회차 - 등록일"
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
@import "../css/edit-thumbnail.css"
</style>
