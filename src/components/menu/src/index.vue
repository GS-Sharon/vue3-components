<!-- 通过template生成二级菜单 -->
<template>
  <el-menu
    :default-active="props.defaultActive"
    class="el-menu-vertical-demo"
    v-bind="$attrs"
  >
    <template v-for="item in props.data" :key="item.index">
      <el-menu-item :index="item.index" v-if="!item.children || !item.children.length">
        <el-icon v-if="!item.children || !item.children.length">
          <component :is="item.icon"></component>
        </el-icon>
        <template #title v-if="!item.children || !item.children.length">
          <span>{{item.name}}</span>
        </template>
      </el-menu-item>
      <el-sub-menu :index="item.index" v-else>
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{item.name}}</span>
        </template>
        <template v-if="item.children && item.children.length">
          <el-menu-item v-for="item1 in item.children" :index="item1.index">
            <el-icon>
              <component :is="item1.icon"></component>
            </el-icon>
            <template #title>{{item1.name}}</template>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
import { MenuItem } from './type';
import { PropType } from 'vue';

const props = defineProps({
  defaultActive: {
    type: String,
    default: ''
  },
  data: {
    type: Array as PropType<MenuItem[]>,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
