import { Module } from "vuex";

import IRootStore from "../types";
import ILoginModule from "./types";
import { IAccountForm } from "@/service/login/types";
import { localCache } from "@/utils/cache";
import router from "@/router";

import {
  accountLoginRequest,
  userInfoByIDRequest,
  userMenusByRoleIDRequest,
} from "@/service/login";

const loginModule: Module<ILoginModule, IRootStore> = {
  namespaced: true,
  state: {
    token: "",
    userInfo: {},
    userMenus: [],
    permissions: [],
  },
  mutations: {
    changeToken(state, token) {
      state.token = token;
    },

    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },

    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus;
    },

    changePermissions(state, permissions) {
      state.permissions = permissions;
    },
  },

  actions: {
    async accountLoginAction({ commit }, accountForm: IAccountForm) {
      // 1. 开始登陆
      const loginResult = await accountLoginRequest(accountForm);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      localCache.setCache("token", token);

      // 2. 请求用户信息
      const userInfoResult = await userInfoByIDRequest(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      localCache.setCache("userInfo", userInfo);

      // 3. 通过用户信息中的角色ID请求用户菜单
      const userMenusResult = await userMenusByRoleIDRequest(userInfo.role.id);
      const userMenus = userMenusResult.data;
      commit("changeUserMenus", userMenus);
      localCache.setCache("userMenus", userMenus);

      // 跳转到首页
      router.push("/main");
    },
    initLoginModuleAction({ commit }) {
      const token = localCache.getCache("token");
      token && commit("changeToken", token);

      const userInfo = localCache.getCache("userInfo");
      userInfo && commit("changeUserInfo", userInfo);

      const userMenus = localCache.getCache("userMenus");
      userMenus && commit("changeUserMenus", userMenus);
    },
  },
};

export default loginModule;
