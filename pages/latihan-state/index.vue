<template>
  <div class="text-center">
    <h2>Counter</h2>
    <h2>{{ counter }}</h2>
    <button
      @click="substractFromCounter(parseInt(value))"
      class="btn btn-primary"
    >
      -
    </button>
    <input class="text-center" v-model="value" type="number" />
    <button @click="addToCounter(parseInt(value))" class="btn btn-primary">
      +
    </button>
    <!-- <div>
      <button @click="addRandomNumber" class="btn btn-success mt-3">
        Add Random Number
      </button>
    </div> -->
    <latihanStateComponents-history />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      value: 1
    };
  },
  computed: {
    // ...mapState("increment", ["counter", "counter2"])
    ...mapState("increment", ["counter"])
  },
  methods: {
    ...mapMutations("increment", ["addToCounter", "substractFromCounter"])
    // ...mapActions("increment", ["addRandomNumber"])
  }
};
</script>
