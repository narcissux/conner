<template>
  <v-layout wrap>
    <v-flex text-left class="d-flex justify-center">
      <v-content class="px1200" v-show="showContent">
        <v-container class="d-flex justify-space-between pa-1" >
          <div>
            <h3 class="d-flex align-start ">{{ article.title }}</h3>
            <v-content class="d-flex align-start flex-column pa-0 body-2">
              <primary class="mr-2"> {{ article.updateTime }}</primary>
              <primary class="mr-2"> 3评论</primary>
              <primary> {{ article.viewNum }}阅读</primary>
            </v-content>
          </div>
          <v-btn
            class="align-self-end"
            tile
            outlined
            color="primary"
            @click="edit"
          >
            <v-icon>mdi-pencil</v-icon>{{ setButtonLable }}</v-btn
          >
        </v-container>
        <mavon-editor
          class="pa-0 markdown"
          id="markdown"
          v-model="article.content"
          :subfield="subfield"
          :defaultOpen="defaultOpen"
          :toolbarsFlag="toolbarsFlag"
          :scrollStyle="scrollStyle"
          :codeStyle="codeStyle"
          :navigation="navigation"
        ></mavon-editor>
      </v-content>
    </v-flex>
  </v-layout>
  <!-- <v-tooltip v-model="msgShow" bottom>
      <primary>{{ returnMsg }}</primary>
    </v-tooltip>-->
</template>
<script>
import request from "@/consts/api/interface";
const blogRequest = request().blogRequest;
export default {
  name: "Article",
  components: {},
  data: () => ({
    value: "",
    subfield: false, // 单双栏模式
    defaultOpen: "preview", // edit： 默认展示编辑区域 ， preview： 默认展示预览区域
    editable: false,
    toolbarsFlag: false,
    scrollStyle: true,
    navigation: false,
    codeStyle: "tomorrow-night-eighties",
    isEdit: false,
    article: {},
    returnMsg: "",
    msgShow: false,
    showContent: false
  }),
  computed: {
    setButtonLable() {
      return this.isEdit ? "保存" : "编辑";
    }
  },
  methods: {
    edit() {
      this.subfield = !this.subfield;
      this.toolbarsFlag = !this.toolbarsFlag;
      this.isEdit = !this.isEdit;
      if (!this.isEdit) {
        blogRequest
          .update({ content: this.article.content, id: this.article.id })
          .then(resp => {
            let returnCode = Object.assign([], resp.data.code);
            if (returnCode == 0) {
              this.returnMsg = "更新成功";
              this.msgShow = true;
            } else {
              this.returnMsg = "更新成功";
              this.msgShow = true;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  created() {
    blogRequest
      .retrieve({ uuid: this.$router.currentRoute.params.articleId })
      .then(resp => {
        console.log(this.article);
        this.article = Object.assign({}, this.article, resp.data.data);
        this.showContent = true;
        console.log(this.article);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss" scoped>
.markdown {
  z-index: 0;
  height: 100%;
}
.px1200 {
  flex: none;
  width: 1200px;
}
</style>
