<template>
  <div class="container">
    <div class="card">
      <h2 class="text-center">SANDBOX FRONTEND 2</h2>
      <sandbox2-components-todo-input :todo="todo" @addTodo="addTodo" />
      <sandbox2-components-todo-list
        :todos="todos"
        :todo="todo"
        @removeTodo="removeTodo(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      todo: ""
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.card {
  width: 700px;
}
</style>
