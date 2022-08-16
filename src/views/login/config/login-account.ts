import { FormRules } from "element-plus";

export const accountFormRules: FormRules = {
  username: [
    {
      required: true,
      message: "请输入账号",
      trigger: "blur",
    },
  ],

  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
};
