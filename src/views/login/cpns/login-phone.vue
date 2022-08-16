<template>
  <div class="login-phone">
    <el-form>
      <el-form-item label="手机号">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="验证码">
        <div class="verify-code-control">
          <el-input></el-input>
          <el-button type="primary">点击发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  .verify-code-control {
    display: flex;
    gap: 15px;
  }
</style>
