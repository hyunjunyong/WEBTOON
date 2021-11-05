<template>
<!--
1:1 문의 나 공지 등 일반 게시물 작성 컴포넌트 
-->
    <v-form>
        <v-container>
            <v-row dense justify="center">
            <v-col cols="10">
                <v-text-field
                    :counter="50"
                    label="제목"
                    name="title"
                    required
                    v-model="title"
                    maxlength="50" >
                </v-text-field>
            </v-col>
            <v-col cols="10">
                <v-textarea
                    filled name="context"
                    hint="내용을 입력해주세요."
                    v-model="context"
                    :counter="1000"
                    maxlength="1000" >
                </v-textarea>
            </v-col>
            <v-col cols="7">
                <v-file-input
                    truncate-length="15"
                    class="align-center"
                ></v-file-input>
            </v-col>
            </v-row>
        </v-container>
    </v-form>
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