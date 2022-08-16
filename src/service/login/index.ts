import yqzRequest from "..";
import IRequestResult from "../types";
import { IAccountForm, ILoginResult } from "./types";

enum LoginAPI {
  AccountLogin = "/login",
  UserInfo = "/users/" /* 用法：/users/1 */,
  UserMenus = "/role/" /* 用法： role/1/menu */,
}

/**
 * 用户登录接口
 * @param account
 * @returns
 */
export function accountLoginRequest(account: IAccountForm) {
  return yqzRequest.post<IRequestResult<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}

/**
 * 通过登录的用户id获取用户信息
 * @param id
 * @returns
 */
export function userInfoByIDRequest(id: number) {
  return yqzRequest.get<IRequestResult>({
    url: LoginAPI.UserInfo + id,
  });
}

/**
 * 通过用户信息接口中的角色ID获取用户拥有的菜单权限
 * @param roleID
 * @returns
 */
export function userMenusByRoleIDRequest(roleID: number) {
  return yqzRequest.get<IRequestResult>({
    url: LoginAPI.UserMenus + roleID + "/menu",
  });
}
