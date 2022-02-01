<template>
    <div>
      <p>省市级选择：</p>
      <m-area-choose @changeArea="getArea"></m-area-choose>
    </div>
</template>
<script lang="ts" setup>
import mAreaChoose from '@/components/areaChoose/src/index.vue'
type AreaItem = {
  code: string,
  name: string,
  children?: AreaItem[]
}
interface AreaResult {
  province: AreaItem,
  district: AreaItem,
  city: AreaItem
}
const getArea = (val: AreaResult) => {
  console.log(val)
}
</script>