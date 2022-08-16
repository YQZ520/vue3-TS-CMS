import { createStore } from "vuex";

import IRootStore from "./types";

import loginModule from "./login/login";

const store = createStore<IRootStore>({
  state: {
    name: "Mio",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { loginModule },
});

export default store;
