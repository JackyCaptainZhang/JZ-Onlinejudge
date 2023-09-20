import store from "@/store/index";
import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "Login",
      //Change this parameter to give user permission
      userRole: accessEnum.NOT_LOGIN,
    },
  }),
  //todo use store.dispatch to call this action in any other functions
  actions: {
    getLoginUser({ commit, state }, payload) {
      //todo change it to the online SQL data fetch
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
