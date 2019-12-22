<template>
  <v-container class="pa-2">
    <v-layout wrap>
      <v-flex text-left class="d-flex justify-center">
        <v-card id="BlogList"  >
          <v-card-title class="pl-2"><primary>最近的笔记</primary></v-card-title>
          <v-list three-line class="pb-0">
            <BlogItem v-for="(item, key) in items" :article="item" :key="key">
              <v-divider class="pa-0"></v-divider>
            </BlogItem>
          </v-list>
          <v-pagination v-if="total > size"
             v-model="page"
            :length="6"
          ></v-pagination>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BlogItem from "./BlogItem";

export default {
  components: { BlogItem },
  data: () => ({
    page:1,
    size: 10,
    total:0,
  }),
  props:{
    items:Object
  },
  comments: {
    BlogItem
  },
};
</script>
<style lang="scss" scoped>
#BlogList{
  width:1000px;
}
</style>
