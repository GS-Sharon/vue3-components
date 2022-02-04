<script setup lang="ts">
</script>

<template>
  <router-view/>
</template>

<style lang='scss'>
html, body,
#app {
  height: 100%;
  .el-container,
  .el-aside .el-scrollbar__view,
  .el-aside .el-menu {
    height: 100%;
  }
}
html, body, ul {
  padding: 0;
  margin: 0
}
</style>
