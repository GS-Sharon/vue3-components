<template>
  <m-menu :data="data"></m-menu>
  <hr>
  <m-infinite-menu :data="data"></m-infinite-menu>
</template>
<script lang="ts" setup>
import { MenuItem } from "./type";

const data:MenuItem[] = [
  {
    index: '1',
    name: '菜单1',
    icon: 'location',
    children: [
      {
        index: '1-1',
        name: '菜单1-1',
        children: [
          {
            index: '1-1-1',
            name: '菜单1-1-1'
          }
        ]
      }
    ]
  }, {
    index: '2',
    name: '菜单2',
    icon: 'location'
  }, {
    index: '3',
    name: '菜单3',
    icon: 'setting'
  }
]
</script>