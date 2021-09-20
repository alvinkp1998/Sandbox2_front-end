export const state = () => {
  return {
    listClass: [],
  }
}

export const actions = {
  setClass({
    commit
  }, listClass) {
    console.log("MASUK ACTIONS")
    commit("setClass", listClass)
  },
}

export const mutations = {
  setClass(state, data) {
    console.log("MASUK MUTATIONS")
    state.listClass = data
  },
}
