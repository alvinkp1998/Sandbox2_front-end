<template>
  <div>
    <h4>Belajar Watcher</h4>
    <input type="text" class="form-control" v-model="question">
    <h5>{{answer}}</h5>
    <img :src="img" class="w-100" alt="" srcset="">

    <h4>
      GB: <input type="number" v-model="gb">
      MB: <input type="number" v-model="mb">
    </h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: "",
      question: "",
      answer: "hhmmmm.... apa ya?",
      gb: null,
      mb: null
    };
  },
  watch: {
    question(newValue, oldValue) {
      if (newValue.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
    gb(newValue){
      this.mb = newValue * 1024
    },
    mb(newValue){
      this.gb = newValue / 1024
    }
  },
  methods: {
    getAnswer() {
      this.answer = "....bentar masih mikir";
      this.$axios.$get("https://yesno.wtf/api").then((response) => {
        console.log(response);
        this.answer = response.answer;
        this.img = response.image;
      });
    },
  },
};
</script>