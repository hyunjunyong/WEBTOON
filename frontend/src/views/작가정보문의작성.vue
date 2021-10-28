<template>
<!-- 관리자 공지 작성 페이지 -->
    <v-container>
            <v-col>
                <v-card class="text-center text-h4" > 작가에게 제안하기 </v-card>
            </v-col>        
        <listwriter />
    
            <v-row justify="center" >
            <v-spacer></v-spacer>
            <router-link to="/writer_home_company">
            <v-btn > 취소 </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/writer_home_company">
            <v-btn > 등록 </v-btn>
            </router-link>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template> 


<script>
import listwriter from "../components/list-writer"

export default { 
    name: '', 
    components: {
        listwriter,
    },
};
</script>