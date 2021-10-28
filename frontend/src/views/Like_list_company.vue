<template>
        <v-container>
        <v-row>
            <v-col >
                <v-card class="text-center text-h4">찜한 작가</v-card>
            </v-col>
        </v-row>

        <v-col align="center">
            <webtoonround :webtoon_round_State="3" />
        </v-col>
      </v-container>
</template>



<script>
import webtoonround from "../components/webtoon-round.vue"

export default {
  name: "",
  components: {
    webtoonround,
  },
};
</script>

<style scoped>

</style>
