<template>
  <div>
    <h3 class="text-center">HTTP REQUEST : AXIOS</h3>
    <!-- Pakai @click.native untuk komponen -->
    <items-button @click.native="addClass" />
    <div class="row">
      <div class="col-md-3" v-for="(item, i) in listClass" :key="i">
        <class-item
          @refresh="GET_LIST_CLASS"
          :id="item.id"
          :name="item.name"
          :desc="item.description"
          :img="item.img"
          @click.native="editClass(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import request from "../../../mixins/request.vue"
export default {
  // mixins: [request],
  data() {
    return {
      listClass: []
    };
  },
  mounted() {
    this.GET_LIST_CLASS();
    // this.GET_ID_CLASS(2)
  },
  methods: {
    addClass() {
      // Push ke halaman baru
      this.$router.push("/example/http-request/add");
    },
    editClass(id) {
      this.$router.push(`/example/http-request/${id}`);
    },
    async GET_LIST_CLASS() {
      // const LIST_CLASS= await this.$axios.$get("api/class")
      const LIST_CLASS = await this.requestGet("api/class");
      console.log(LIST_CLASS);
      this.listClass = LIST_CLASS.data;
    }
  }
};
</script>
