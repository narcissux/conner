//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      "vuetify":"Vuetify",
      axios: "axios",
      "mavon-editor": "MavonEditor"
    },
    plugins: [
     // new BundleAnalyzerPlugin()
    ],
  }
};
