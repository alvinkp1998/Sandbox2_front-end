export const state = () => {
  return {
    counter: 0,
    history: [0]
  };
};

export const mutations = {
  addToCounter(state, payload) {
    state.counter = state.counter + payload;
    state.history.push(state.counter);
  },
  substractFromCounter(state, payload) {
    state.counter = state.counter - payload;
    state.history.push(state.counter);
  }
};

export const getters = {
  activeIndexes: state => payload => {
    let indexes = [];
    state.history.forEach((number, index) => {
      if (number === payload) {
        indexes.push(index);
      }
    });
    return indexes;
  }
};

// export const actions = {
//   async addRandomNumber(context) {
//     const data = await this.$axios.$get(
//       "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
//     );
//     console.log(data);
//     context.commit("addToCounter", data.data);
//   }
// };
