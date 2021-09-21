<template>
  <div>
    <h2>STATE MANAGEMENT</h2>
    <div class="row">
      <div class="col-md-4" v-for="(item, i) in listClass" :key="i">
        <class-item
          :name="item.name"
          :desc="item.description"
          :img="item.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //     return {
  //         listClass: this.$store.state.class.listClass
  //     }
  // },
  computed: {
    listClass() {
      return this.$store.state.class.listClass;
    }
  },
  mounted() {
    this.GET_CLASS;
  },
  methods: {
    async addRandomNumber() {
      const data = await this.$axios.$get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      console.log(data);
    }
  }
};
</script>
