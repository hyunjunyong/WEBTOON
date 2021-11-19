<template>
  <!-- 
    내가 찜한 작가리스트를 보는 컴포넌트
    자신의 코맨트를 적을 수 있어야함
    코맨트를 적는 부분을 단순하게 text-area 라고 하면 안되고 수정하는 버튼이 있어야 한다고 생각됨

    지금은 modal창에 뜨도록 할 예정
 -->

  <v-card fluid v-scroll.self="onScroll" class="overflow-y-auto" height="800">
    <v-row v-for="writer in writers" :key="writer.id">
      <v-col cols="3">
        <v-img :src="writer.profile" width="150" height="150"
      /></v-col>

      <v-col cols="5">
        <v-row>
          {{ writer.name }}
        </v-row>

        <v-row>
          {{ writer.comment }}
        </v-row>
      </v-col>

      <v-col cols="1">
        <v-flex xs1>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                cols="1"
                dark
                small
                color="green"
                height="150"
                v-bind="attrs"
                v-on="on"
                >{{ toon.delete }}</v-btn
              >
            </template>

            <v-card>
              <v-card-title class="text-h6 grey lighten-2">
                관심 작가 목록에서 삭제 하시겠습니까?
              </v-card-title>
              <v-divider />
              <v-spacer></v-spacer>
              <v-btn block color="primary" text @click="dialog = false">
                확인
              </v-btn>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      writers: [
        {
          id: 1,
          name: "작가1",
          profile: require("../../img/nums/1.png"),
          comment: "html is not programming language1",
        },
        {
          id: 2,
          name: "작가2",
          profile: require("../../img/nums/2.png"),
          comment: "html is not programming language2",
        },
        {
          id: 3,
          name: "작가3",
          profile: require("../../img/nums/3.png"),
          comment: "html is not programming language3",
        },
      ],
    };
  },
  methods: {
    useRouter(index) {
      this.$router.push({
        name: "WRITER_Home",
        params: {
          id: index,
        },
      });
    },
    getWriterList() {
      //내가 찜한 작가 리스트를 받아서
      //data의 writers 넣어야함...
      //던져줄 데이터는 나의 id
      //받는 데이터는 {작가id, 작가 이름, 내가 적은 코맨트}
      axios
        .get("http://localhost:5000/", {}, { withCredentials: true })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
