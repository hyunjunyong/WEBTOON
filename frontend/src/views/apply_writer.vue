<template>
<!-- 작가 신청 페이지 -->
    <v-container>
        <v-row>
            <v-col>
                <v-card class="text-center text-h3" height="60">작가 신청</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-card class="text-center text-h5" >작가 필명</v-card>
            </v-col>
                <v-spacer></v-spacer>
            <v-col cols="5">
                <v-text-field label="필명 작성" single-line solo> </v-text-field>
            </v-col>
            <v-col cols="3">
                <v-btn class="text-center text-h7" >중복 확인</v-btn>
            </v-col>
        </v-row>
        <v-row>
                <v-divider></v-divider>
        </v-row>
        <v-row>
            <v-col cols="3" class="d-flex align-center text-center text-h5" >
                <v-card class="ma-auto">
                        작가 소개글 <br>
                        (300자 이상)
                </v-card>
            </v-col>
                    <v-spacer></v-spacer>
            <v-col cols="7">
                <v-text-field label="작가 소개 작성" single-line solo height="200"> </v-text-field>
            </v-col>
                <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-col>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" class="d-flex align-center text-center text-h5" >
                <v-card class="ma-auto">
                        작가 프로필 사진 <br>
                        (250px * 250px)
                </v-card>

            </v-col>
             <v-spacer></v-spacer>
            <v-col cols="5">
                <v-img src="../img/writer_profile.png" alt="" height="250px" width="250px" />  
            </v-col>
            <v-col cols="3" class="d-flex align-center">
                <v-btn class="text-center text-h7" >사진 업로드</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col class="text-center">
                <router-link to="/">
                    <v-btn block>취소</v-btn>
                </router-link>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="text-center">
                <v-btn block>등록</v-btn>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="text-center text-h8" color="black" dark >작가 신청 후 에피소드를 1개 이상 승인 받아야 작가 승인이 완료 됩니다.</v-card>
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