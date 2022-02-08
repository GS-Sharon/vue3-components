<template>
  <el-table :data="props.data" style="width: 100%">
    <el-table-column v-for="item in props.tableOptions" :prop="item.prop" :label="item.label" :width="item.width" />
  </el-table>
</template>
<script lang="ts" setup>
import { PropType, defineProps } from 'vue';
import { TableOption } from './type';

const props = defineProps({
  tableOptions: {
    type: Array as PropType<TableOption[]>,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})
console.log(props.tableOptions)
</script>
<style lang="scss" scoped>
</style>