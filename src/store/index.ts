/* eslint-disable no-param-reassign */
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
  actions: {
    user(context, user) {
      context.commit('user', user)
    },
    logout(context) {
      context.commit('user', null);
      if (localStorage.getItem('jwt')) {
        localStorage.removeItem('jwt');
      }
    },
  },
  modules: {
  },
});
