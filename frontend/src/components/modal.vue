<template>
  <!-- 
modalState에 따라서 버튼 색, 글자색, 내부 용어?, 크기, 구조가 변경 될 수 있도록 진행해야한다.

0 : 기본
1 : 삭제
2 : 수정
3 : 이미지선택
4 : 반려사유
 -->

  <div class="modal">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          {{ btnName[modalState] }}
        </v-btn>
      </template>

      <!-- 기본 모달창 -->
      <v-card v-if="modalState == 0">
        <v-card-title class="text-h5 grey lighten-2">
          {{ modalTitle[modalState] }}
        </v-card-title>

        <v-card-text>
          {{ modalText[modalState] }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="dialog = false">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- 삭제 모달창 
      작품삭제와 에피소드 삭제를 추가해야한다.
      -->
      <v-card v-if="modalState == 1">
        <v-card-title class="text-h5 grey lighten-2">
          {{ modalTitle[modalState] }}
        </v-card-title>

        <v-card-text v-html="modalText[modalState]"> </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red" text @click="dialog = false">
            삭제하기
          </v-btn>
          <v-btn color="primary" text @click="dialog = false">
            취소
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- 수정 모달창
      작품 수정과 에피소드 수정을 추가해야한다.
      -->
      <v-card v-if="modalState == 2">
        <v-card-title class="text-h5 grey lighten-2">
          {{ modalTitle[modalState] }}
        </v-card-title>

        <v-card-text v-html="modalText[modalState]"> </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red" text @click="dialog = false">
            수정하기
          </v-btn>
          <v-btn color="primary" text @click="dialog = false">
            취소
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- 이미지선택 모달창 -->
      <v-card v-if="modalState == 3">
        <v-card-title class="text-h5 grey lighten-2">
          {{ modalTitle[modalState] }}
        </v-card-title>

        <v-card-text v-html="modalText[modalState]"> </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red" text @click="dialog = false">
            저장하기
          </v-btn>
          <v-btn color="primary" text @click="dialog = false">
            취소
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- 반려사유 모달창 -->
      <v-card v-if="modalState == 4">
        <v-card-title class="text-h5 grey lighten-2">
          {{ modalTitle[modalState] }}
        </v-card-title>

                <v-row>
            <v-col
            cols="12"
            sm="12"
            >
                <v-text-field
                    label="txst"
                    single-line
                    solo
                    height="100"
                >
                    반려사유작성
                </v-text-field>
            </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red" text @click="dialog = false">
            확인
          </v-btn>
          <v-btn color="primary" text @click="dialog = false">
            취소
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["modalState"],
  data() {
    return {
      dialog: false,
      btnName: ["btn_TMP", "삭제하기", "수정하기", "이미지선택", "반려사유"],
      modalTitle: [
        "modalTitle",
        "작품삭제",
        "수정하기",
        "이미지선택",
        "반려사유작성",
      ],
      modalText: [
        "modalText",
        `한 번 삭제한 작품은 복구하기 어렵습니다. <br /> 다시한번 확인해주시기 바랍니다`,
        "확인을 누르면 즉시 수정됩니다",
        "이미지선택 모달창 화면입니다.",
        "반려사유 모달창 화면입니다.",
      ],
    };
  },
};
</script>
