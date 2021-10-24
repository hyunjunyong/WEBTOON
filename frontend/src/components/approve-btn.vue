<template>
  <!--  
  승인 버튼 컴포넌트
  
  심사 중  
  
-->
    <v-container>
        <v-flex xs1>
        <v-btn class="col-1" dark small color="green" height="150">심사 중</v-btn>
        </v-flex>
    </v-container>
</template>

<script>


export default {
    name:'approve-btn',
    components: {},
    data(){
        return{
            webtoon:[
                
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