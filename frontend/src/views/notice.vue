<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="10">
                <v-card class="text-center text-h4" > 공지 </v-card>
            </v-col>
        </v-row>    
        <listwriter />
        
    
            <v-row justify="center" >
            <v-spacer></v-spacer>
            <router-link to="/Notice_list">
            <v-btn > 취소 </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/Notice_list">
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