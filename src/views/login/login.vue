<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts" setup>
  import LoginPanel from "./cpns/login-panel.vue";
</script>

<style scoped>
  .login {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(~@/assets/images/login-bg.svg);
  }
</style>
