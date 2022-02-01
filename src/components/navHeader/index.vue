<template>
  <el-header>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label='!isCollapse' @click="toggle">{{isCollapse ? '展开' : '收起'}}</el-radio-button>
    </el-radio-group>
  </el-header>
</template>
<script lang="ts" setup>
import {defineProps, defineEmits, ref} from 'vue'
let props = defineProps<{
  collapse: boolean
}>();
const emits = defineEmits(['update:collapse'])
let isCollapse = ref<boolean>(props.collapse)
const toggle = () => {
  emits('update:collapse', !isCollapse.value)
}
</script>
<style lang="scss" scoped>
.el-header {
  width: 100%;
  border-bottom: 1px solid #eee;
}
</style>