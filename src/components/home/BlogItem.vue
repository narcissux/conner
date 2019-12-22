<template>
  <div id="BlogItem">
    <v-list-item class="pa-2" :to="`article/${article.id}`">
      <v-list-item-content class="pa-0">
        <v-list-item-title
          v-text="article.title"
          class="mb-1 font-weight-bold"
        ></v-list-item-title>
        <v-list-item-subtitle v-if="article.content != ''" v-text="article.content"></v-list-item-subtitle>
        <v-content class="d-flex align-start flex-column pa-0 mt-1 body-2">
          <primary> {{article.updateTime}}</primary>
          <primary> 3评论</primary>
          <primary> {{article.viewNum}}阅读</primary>
        </v-content>
      </v-list-item-content>
    </v-list-item>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BlogItem",
  data: () => ({
  }),
  props: {
    article: Object
  }
};
</script>
<style lang="scss">
#BlogItem:hover {
  background-color: #e0e0e0;
}
</style>
