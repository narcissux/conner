<template>
  <div class="">
    <v-content >
      <p class="elevation-0">你c好呢 <code>代码</code></p>
      <mavon-editor class="elevation-0"
        v-model="article.content"
        :subfield="subfield"
        :defaultOpen="defaultOpen"
        :toolbarsFlag="toolbarsFlag"
        :scrollStyle="scrollStyle"
        :codeStyle="codeStyle"
        :navigation="navigation"
        style="height:1000px"
      ></mavon-editor>
    </v-content>
  </div>
</template>
<script>
import request from "@/consts/api/interface";
const blogRequest = request().blogRequest;
export default {
  name: "Article",
  components: {
  },
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
    msgShow: false
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
      .retrieve({ uuid: 11 })
      .then(resp => {
        console.log(this.article);
        this.article = Object.assign({}, this.article, resp.data.data);
        console.log(this.article);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss">

</style>
