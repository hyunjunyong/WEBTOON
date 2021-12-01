<template>
  <!-- 
    내가 찜한 작픔를 보는 컴포넌트
    자신의 코맨트를 적을 수 있어야함
    코맨트를 적는 부분을 단순하게 text-area 라고 하면 안되고 수정하는 버튼이 있어야 한다고 생각됨

    지금은 modal창에 뜨도록 할 예정
 -->

  <v-card elevation="0" class="overflow-y-auto" height="500">
    <v-list>
      <template v-for="i in webtoons">
        <v-list-item @click="useRouter(i.work.id)" :key="i.id" three-line>
          <v-list-item-avatar
            style="border-radius:10px"
            width="200px"
            height="150px"
            aspect-ratio="1"
          >
            <v-img :src="i.work.workThumbnail" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <h2>
                {{ i.work.title }}
              </h2>
            </v-list-item-title>

            <v-list-item-subtitle>
              <v-card color="transparent">
                {{ i.work.workDescription }}
              </v-card>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-dialog v-model="dialog" width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  cols="1"
                  dark
                  small
                  right
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  >삭제</v-btn
                >
              </template>

              <v-card>
                <v-card-title class="text-h6 grey lighten-2">
                  관심 작품 목록에서 삭제 하시겠습니까?
                </v-card-title>
                <v-divider />
                <v-spacer></v-spacer>
                <v-btn
                  block
                  color="primary"
                  text
                  @click="[deleteLike(i.work.id)]"
                >
                  확인
                </v-btn>
              </v-card>
            </v-dialog>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="`Divider_` + i.id"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    webtoonInfo: Array,
    webtoons: Array,
  },
  data() {
    return {
      // dialog: false,
    };
  },
  methods: {
    deleteLike(workId) {
      axios
        .post(
          'http://localhost:5000/user/like',
          {
            workId,
          },
          { withCredentials: true }
        )
        .then((res) => {
          this.dialog = false;
          console.log(res);
          this.$router.go();
        });
    },
    // title_Order(a, b) {
    //   return a.round < b.round ? -1 : a.round > b.round ? 1 : 0;
    // },
    // date_Order(a, b) {
    //   var dateA = new Date(a['date']).getTime();
    //   var dateB = new Date(b['date']).getTime();
    //   return dateA < dateB ? 1 : -1;
    // },
    // useRouter(index) {
    //   this.$router.push({
    //     name: 'Webtoon',
    //     params: {
    //       id: index,
    //     },
    //   });
    // },
    /*   getWriterList() {
      //내가 찜한 작가 리스트를 받아서
      //data의 writers 넣어야함...
      //던져줄 데이터는 나의 id
      //받는 데이터는 {작가id, 작가 이름, 내가 적은 코맨트}
      axios
        .get('http://localhost:5000/', {}, { withCredentials: true })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, */
  },
};
</script>
