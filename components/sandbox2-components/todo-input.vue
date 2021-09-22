<template>
  <div>
    <div class="card-body">
      <input
        class="mt-3 form-control"
        type="text"
        placeholder="note"
        v-model="todo"
      />
      <button @click="addTodo" class="btn btn-outline-primary float-right">
        Tambah Todo
      </button>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  props: {
    todo: { type: String, default: "" }
  },
  methods: {
    addTodo() {
      this.$emit("addTodo", this.todo);
    }
  }
  //   methods: {
  //     ...mapActions("todos", ["addTodo"])
  //   }
};
</script>
