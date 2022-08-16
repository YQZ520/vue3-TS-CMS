<template>
  <div class="login-account">
    <el-form
      ref="elFormRef"
      label-width="60px"
      :rules="accountFormRules"
      :model="accountForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="accountForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { useStore } from "vuex";

  import { FormInstance } from "element-plus";

  import { accountFormRules } from "../config/login-account";
  import { localCache } from "@/utils/cache";

  const store = useStore();
  const elFormRef = ref<FormInstance>();

  const accountForm = reactive({
    username: localCache.getCache("username") ?? "",
    password: localCache.getCache("password") ?? "",
  });

  const accountLogin = (isKeepPassword: boolean) => {
    elFormRef.value?.validate((validate) => {
      if (validate) {
        /* 是否保存密码 */
        if (isKeepPassword) {
          localCache.setCache("username", accountForm.username);
          localCache.setCache("password", accountForm.password);
        } else {
          localCache.deleteCache("username");
          localCache.deleteCache("password");
        }

        /* 开始进行登录 */
        store.dispatch("loginModule/accountLoginAction", { ...accountForm });
      }
    });
  };

  defineExpose({
    accountLogin,
  });
</script>

<style scoped></style>
