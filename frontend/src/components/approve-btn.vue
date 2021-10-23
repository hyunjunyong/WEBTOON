<template>
    <v-container>
        <v-flex xs1>
        <v-btn :label="approve" class="col-1" dark small color="green" height="150">{{approve}}</v-btn>
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
                {approve:"심사 중"},
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