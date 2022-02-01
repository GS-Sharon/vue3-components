<template>
  <el-container>
    <el-aside width="auto">
      <el-scrollbar>
        <nav-side :collapse="isCollapse">></nav-side>
      </el-scrollbar>
    </el-aside>
    <el-container class="main">
      <nav-header v-model:collapse="isCollapse"></nav-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>
<script lang='ts' setup>
  import { ref, defineComponent } from 'vue'
  import navHeader from '../navHeader/index.vue'
  import navSide from '../navSide/index.vue'
  const isCollapse = ref<boolean>(false)
</script>
<style labg='scss' scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-container.main {
  flex-direction: column;
}
</style>
