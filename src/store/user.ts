import store from "@/store/index";
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "Login",
      role: "NotAdmin",
    },
  }),
  //todo use store.dispatch to call this action in any other functions
  actions: {
    getLoginUser({ commit, state }, payload) {
      //todo change it to the online SQL data fetch
      commit("updateUser", { userName: "Jacky Captain" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
