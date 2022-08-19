<template>
  <div class="main">
    <el-container class="container">
      <el-aside class="container__aside" style="width: 210px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="container__page">
        <el-header class="container__page__header">header</el-header>
        <el-main class="container__page__content">main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import NavMenu from "@/components/nav-menu";
</script>

<style scoped lang="less">
  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
    .container__aside {
      background-color: #001529;
      overflow: hidden;
    }

    .container__page {
      .container__page__header {
        background-color: orange;
      }
      .container__page__content {
        background-color: aqua;
      }
    }
  }
</style>
