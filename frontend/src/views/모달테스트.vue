<template>
  <!-- 
    모달 종류를 테스트 하는 페이지
    실제 운영에는 반영되지 않는다.

    동일한 컴포넌트를 호출하지만 eventbus 혹은 
-->
  <v-container class="TOTAL">
    <v-row>
      <v-col>
        <Modal :modalState="0" />
      </v-col>
      <v-col>
        <Modal :modalState="1" />
      </v-col>
      <v-col>
        <Modal :modalState="2" />
      </v-col>
      <v-col>
        <Modal :modalState="3" />
      </v-col>
      <v-col>
        <Modal :modalState="4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Modal from "../components/modal";

export default {
  name: "테스트",
  components: {
    Modal,
  },
};
</script>
