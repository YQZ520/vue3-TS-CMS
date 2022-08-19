<template>
  <div class="nav-menu">
    <!-- logo start -->
    <div class="logo">
      <img src="~@/assets/images/logo.svg" class="logo__img" />
      <div class="logo__span">Vue3+TS</div>
    </div>
    <!-- logo end -->

    <!-- menu start -->
    <el-menu
      :unique-opened="true"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item of userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <template v-if="item.icon">
                <el-icon>
                  <component :is="item.icon"></component>
                </el-icon>
              </template>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subItem of item.children" :key="subItem.id">
              <template v-if="subItem.type === 2">
                <el-menu-item :index="subItem.id + ''">
                  <template #title>
                    <template v-if="subItem.icon">
                      <el-icon>
                        <component :is="subItem.icon"></component>
                      </el-icon>
                    </template>
                    <span>{{ subItem.name }}</span>
                  </template>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
    <!-- menu end -->
  </div>
</template>

<script lang="ts" setup>
  import { computed } from "vue";
  import { useStore } from "@/store";

  const store = useStore();

  const userMenus = computed(() => store.state.loginModule.userMenus);
</script>

<style scoped lang="less">
  .el-menu {
    border: none;
    overflow: hidden;
  }

  .nav-menu {
    height: 100%;
  }

  .logo {
    height: 28px;
    padding: 10px 20px 20px 10px;
    display: flex;
    align-items: center;
    .logo__img {
      height: 100%;
      margin: 0 10px;
    }
    .logo__span {
      color: #fff;
      font-weight: 700;
    }
  }
</style>
