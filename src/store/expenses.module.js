const state = {
  transactions: []
};

const actions = {
  addTransaction({ commit }, data) {
    commit("addTransaction", data);
  },
  deleteTransaction({ commit }, index) {
    commit("deleteTransaction", index);
  }
};

const mutations = {
  addTransaction(state, { text, amount }) {
    state.transactions.push({
      id: Date.now(),
      text,
      amount: parseInt(amount)
    });
  },
  deleteTransaction(state, index) {
    state.transactions.splice(index, 1);
  }
};

// Exporting the expenses module
export const expenses = {
  namespaced: true,
  state,
  actions,
  mutations
};
