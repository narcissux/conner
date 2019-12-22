<template>
  <v-app>
    <core-toolbar></core-toolbar>
    <v-container>
      <router-view />
    </v-container>
    <v-footer app>
      <primary class="px-4 text-primary">&copy; {{ new Date().getFullYear() }} power by Vuetify</primary>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    CoreToolbar: () => import("@/components/core/Toolbar")
  },
};
</script>

<style lang="scss">
  // 屏蔽vuetify 默认code标签的阴影
.hljs code{
    box-shadow: 0 0 0 0;
    font-weight: 300;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
