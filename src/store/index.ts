import { createStore, Store, useStore as useVuexStore } from "vuex";

import IRootStore, { IStoreTypes } from "./types";

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

store.dispatch("loginModule/initLoginModuleAction");

export function useStore(): Store<IStoreTypes> {
  return useVuexStore<IStoreTypes>();
}

export default store;
