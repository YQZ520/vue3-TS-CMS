<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>

    <el-tabs class="login-tabs" type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <el-icon><UserFilled /></el-icon>
          <span>用户登录</span>
        </template>

        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <el-icon><Iphone /></el-icon>
          <span>手机登录</span>
        </template>

        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="login-options">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">找回密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="onLoginBtnClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  import LoginAccount from "./login-account.vue";
  import LoginPhone from "./login-phone.vue";

  const loginAccountRef = ref<InstanceType<typeof LoginAccount>>();
  const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>();

  const currentTab = ref("account");
  const isKeepPassword = ref(true);

  const onLoginBtnClick = () => {
    if (currentTab.value === "account") {
      loginAccountRef.value?.accountLogin(isKeepPassword.value);
    } else {
      console.log("phone login action");
    }
  };
</script>

<style scoped lang="less">
  .login-panel {
    width: 340px;
    margin-top: -300px;

    text-align: center;

    .login-tabs {
      margin-top: 15px;
    }

    .login-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .login-btn {
      width: 100%;
      margin-top: 5px;
    }
  }

  /* 重置组件内部样式 start */
  .el-icon {
    vertical-align: -2px;
    margin-right: 3px;
  }

  :deep(.el-tabs--border-card > .el-tabs__header .el-tabs__item) {
    border: none;
  }
  /* 重置组件内部样式 ebd  */
</style>
