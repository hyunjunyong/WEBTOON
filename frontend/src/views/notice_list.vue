<template>
<!--
1:1 문의 나 공지 등 일반 게시판 화면
-->
    <v-container>
        <v-row justify="center">
        <v-col cols="10">
            <v-card class="text-center text-h4">공지 사항</v-card>
        </v-col>
        <list />
        </v-row>
        <v-col>
        <v-row justify="center" >
            <router-link to="/Notice" class="ma-2">
            <v-btn > 글쓰기 </v-btn>
            </router-link>
        </v-row>
        </v-col>
    </v-container>

</template> 


<script>
import list from "../components/list"

export default { 
    name: 'Boardlist', 
    components: {
        list,
    },
};
</script>