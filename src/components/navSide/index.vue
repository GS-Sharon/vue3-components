<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="props.collapse"
  >
    <el-menu-item index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>图标选择器</span>
      </template>
    </el-menu-item>
    <el-menu-item index="3">
      <template #title>
        <el-icon><location /></el-icon>
        <span>趋势标记</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue'
let props = defineProps<{
  collapse: boolean
}>()
</script>
