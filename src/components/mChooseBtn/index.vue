<template>
  <el-button @click="toggleVisible">
    <slot></slot>
  </el-button>
</template>
<script lang="ts" setup>
import {defineProps, defineEmits} from 'vue'
const props = defineProps<{
  visible: boolean
}>()
const emits = defineEmits(['update:visible'])
const toggleVisible = () => {
  emits('update:visible', !props.visible)
}
</script>
