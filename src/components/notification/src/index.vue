<template>
  <el-popover
    placement="bottom-start"
    :width="300"
    trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge :value="props.value" class="item">
        <el-icon :size="props.size">
          <component :is="props.iconName"></component>
        </el-icon>
      </el-badge>
    </template>
  </el-popover>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue'
const props = defineProps({
  iconName: {
    type: String,
    default: 'bell'
  },
  size: {
   type: [String, Number],
   default: 24
  },
  value: {
    type: [String, Number],
    default: ''
  }
})
</script>