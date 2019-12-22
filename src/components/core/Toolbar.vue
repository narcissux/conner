<template>
  <v-app-bar app>
    <v-toolbar-title
      class="headline text-uppercase d-flex align-start flex-column mr-6  "
      @click="change"
    >
      <primary class="font-weight-light">Corner</primary>
    </v-toolbar-title>
    <v-list expand="true" class="ml-6">
      <v-btn
        text
        class="ml-0 hidden-sm-and-down"
        v-for="(item, i) in links"
        :key="i"
        :to="`/${item.link}`"
      >
        <primary class="mr-4">{{ item.title }}</primary>
      </v-btn>
    </v-list>
    <v-spacer />
    <v-text-field
      append-icon="mdi-magnify"
      flat
      hide-details
      background-color="#DEDEDE"
      solo
      color="primary"
      style="max-width: 300px;"
    />
  </v-app-bar>
</template>

<script>
// Utilities
import {} from "vuex";

export default {
  data: () => ({
    links: [{ title: "学习笔记", link: "" }, { title: "分类", link: "/categories" }, { title: "关于", link: "about" }]
  }),
  computed: {},

  methods: {
    change() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
