<template>
<!-- 작품 수정 페이지 -->
    <v-container>
        <v-row>
            <v-col>
                <v-card class="text-center text-h3" height="60">작품 등록하기</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="text-center text-h3" height="60">작품명</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" >
                <v-card class="text-center" height="40">장르 선택</v-card>
            </v-col>
            <v-col v-for="item in genre" :key="item.index">
                <v-btn
                elevation="2"
                rounded
                >
                    {{item.name}}
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            sm="12"
            >
                <v-text-field
                    label="Solo"
                    single-line
                    solo
                    height="200"
                >
                    작품소개 글
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="7">
                <v-file-input
                    truncate-length="15"
                    class="align-center"
                ></v-file-input>
            </v-col>
             <v-spacer></v-spacer>
            <v-col class="text-center" cols="3">
                <img src="../img/nft.png" alt="" width="150px" height="150px">
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <v-btn block>취소</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="text-center">
                <v-btn block>수정</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name:'',
    components: {},
    data(){
        return{
            genre:[
                    {index:"1",name:'일상'},
                    {index:"2",name:'개그'},
                    {index:"3",name:'판타지'},
                    {index:"4",name:'액션'},
                    {index:"5",name:'드라마'},
                    {index:"6",name:'로맨스'},
                    {index:"7",name:'공포/스릴러'},
                ],
        }
    },
    setup(){},
    create(){},
    mounted(){},
    unmounted(){},
    methods: {}
}
</script>
<style scoped></style>