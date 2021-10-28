<template>
<!--
1:1 문의 나 공지 등 일반 게시판 화면  'list' 컴포넌트 수정 중
-->
    <v-container>
        <v-col>
            <v-card class="text-center text-h4" height="50">공지 사항</v-card>
        </v-col>
        <list />
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