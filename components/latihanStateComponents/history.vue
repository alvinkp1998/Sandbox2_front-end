<template>
  <div>
    <h4 class="mt-4">History</h4>
    <div class="kolom">
      <span
        v-for="(number, index) in history"
        :key="index"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
      >
        {{ number }}
      </span>
    </div>
    <input
      class="text-center"
      placeholder="Search by Index"
      type="number"
      v-model="value"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: 0
    };
  },
  computed: {
    ...mapState("increment", ["history"]),
    ...mapGetters("increment", ["activeIndexes"])
  }
};
</script>

<style scoped>
.kolom {
  display: flex;
  width: 20rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.kolom span {
  margin: 1rem;
}
.bold {
  border: 1px solid black;
  padding: 5px;
  font-weight: 900;
}
</style>
