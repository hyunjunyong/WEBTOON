<template>
  <v-container>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../img/개발자의품격로고.png"
          transition="scale-transition"
          width="40"
        />

        <div>개발자의 품격</div>
      </div>

      <p class="ma-4">
        <router-link to="/"
          ><strong class="router-text">홈</strong></router-link
        >
        <span class="router-text"> | </span>
        <router-link to="/total"
          ><strong class="router-text">전체만화</strong></router-link
        >
      </p>

      <v-spacer></v-spacer>

      <v-row class="red ma-3 serchInput">
        <v-img
          src="../img/free-icon-detective-magnifying-glass-14877.png"
          max-width="30"
          class="ma-1 radius"
        ></v-img>

        <input />
      </v-row>

      <v-img src="../img/premium-icon-user-5461392.png" max-width="40" />
    </v-app-bar>
  </v-container>
</template>

<style>
.router-text {
  color: black;
}
.serchInput {
  border-radius: 5px;
}
</style>
