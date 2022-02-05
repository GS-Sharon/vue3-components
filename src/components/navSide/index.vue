<template>
  <m-menu :data="menuData" :collapse="collapse" router></m-menu>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue'
let props = defineProps<{
  collapse: boolean
}>()
const menuData = [
  {
    name: '首页',
    icon: 'location',
    index: '/'
  }, {
    name: '图标选择器',
    icon: 'location',
    index: '/chooseIcon'
  }, {
    name: '省市区选择',
    icon: 'location',
    index: '/areaChoose'
  }, {
    name: '菜单',
    icon: 'location',
    index: '/menu'
  }
]
</script>
