<template>
  <div>
    <v-dialog v-model="dialog" max-width="height:100%;width: 100%">
      <v-card>
      <v-toolbar dense floating>
        <div class="markdown_title " >
          <v-icon @click="dialog = false" class="mr-3">reply</v-icon>
          <primary class="headline">Markdown Edit</primary>
        </div>
      </v-toolbar>
        <div class="ma-3" >
          <div>
            <v-text-field color="primary" label="标题" placeholder="请输入标题" :rules="rules">
            </v-text-field>
            <v-text-field :rules="rules"
              color="primary"
              label="文章简介"
              placeholder="请输入简介"
            >
            </v-text-field>
            <v-text-field color="primary" label="标签" placeholder="请输入简介" :rules="rules">
            </v-text-field>
            <v-select v-model="category" label="种类" :rules="rules"></v-select>
          </div>
          <mavon-editor v-model="markdown" style="min-height:380px;" />
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MarkdownModal",
  components: {},
  data: () => ({
    dialog: false,
    rules:[
      value => !!value || 'Required.',
    ]
  }),
  methods: {},
  mounted() {
    this.dialog = true;
  }
};
</script>

<style lang="scss" scoped>
.markdown_title{
  width: 100%;
  display: flex;
}
</style>
