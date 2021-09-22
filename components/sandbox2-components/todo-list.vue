<template>
  <div class="container">
    <p>todolist :</p>
    <ul>
      <li class="pt-2" v-for="(todo, i) in todos" :key="i">
        <input type="checkbox" class="form-check-input" />
        {{ todo }}
        <button @click="removeTodo(todos)" class="float-right btn">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todo: { type: String, default: "" },
    todos: { type: String, default: [] }
  },
  methods: {
    removeTodo(todos) {
      this.$emit("removeTodo", todos);
    }
  }
};
</script>
