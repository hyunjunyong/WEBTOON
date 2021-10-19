<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <router-link to="/webtoon_home">
          <v-card max-width="250" v-cl v-on:click="testF">
            <v-img max-height="150" max-width="250" src="../img/leon.jpg" />

            <v-card-title md> 개발자의 품격 </v-card-title>

            <v-card-subtitle>
              <v-row align="center" class="ml-1">
                <div>{{ testData }}</div>
              </v-row>
            </v-card-subtitle>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Thumbnail",
  data() {
    return {
      testData: "testing",
    };
  },
  methods: {
    testF: function() {
      this.testData = "abc";
    },
  },
};
</script>
