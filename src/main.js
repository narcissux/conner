import Vue from "vue";
import "./plugins/axios";
import mavon from "./plugins/mavon";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import primary from "./components/common/Primary";
import "@babel/polyfill";
import 'mavon-editor/dist/css/index.css'

// 注册全局主题字体颜色组件
Vue.component('primary', primary)

// 加载mavon插件
mavon(Vue);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
