<template>
  <div>
    <article-body></article-body>
  </div>
</template>

<script>
export default {
  name: "ArticleDetail",
  components: {
    ArticleBody:()=> import("@/components/Article")
  },
};
</script>

<style scoped></style>
