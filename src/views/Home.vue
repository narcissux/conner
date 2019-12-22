<template>
  <v-content>
    <BlogList :items="items" />
    <MarkdownModal v-if="showMavonEdit" ref="modal" />
    <v-btn
      id="float-btn"
      @click.stop="showDialog"
      fab
      fixed
      small
      color="primary"
    >
      <v-icon class="pb-2 ">+</v-icon>
    </v-btn>
  </v-content>
</template>

<script>
import BlogList from "@/components/home/BlogList";
import request from "@/consts/api/interface";
const blogRequest = request().blogRequest;
export default {
  data: () => ({
    items: {},
    showMavonEdit: false
  }),
  components: {
    BlogList,
    MarkdownModal:()=>import("@/components/home/MarkdownModal")
  },
  methods: {
    showDialog() {
      this.showMavonEdit = true;
      if (this.$refs.modal) {
      this.$refs.modal.dialog = true;
      }
    }
  },
  created() {
    blogRequest
      .list({ page: 1, size: 10 })
      .then(resp => {
        this.items = Object.assign([], resp.data.data);
        this.total = resp.data.total;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss">

@media screen and (min-device-width: 0px) {
  #float-btn {
    right: 13px;
    bottom: 25px;
  }
}

/*分辨率高于1000，采用下面的样式*/
@media screen and (min-device-width: 1200px) {
  #float-btn {
    right: 200px;
    bottom: 60px;
  }
}
</style>
