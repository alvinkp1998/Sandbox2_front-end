export const state = () => {
  return {
    todos: [],
    todo: ""
  };
};

export const actions = {
  addTodo({ commit }, todo) {
    commit("addTodo", todo);
  }
};

export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  }
};
