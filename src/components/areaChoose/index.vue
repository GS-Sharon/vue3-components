<template>
  <div>
    <el-select v-model="province" class="m-2" placeholder="省" size="large">
      <el-option
        v-for="item in areaData"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      >
      </el-option>
    </el-select>
    <el-select v-model="city" class="m-2" placeholder="市" size="large" :disabled="!province">
        <el-option
          v-for="item in cityOptions"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        >
        </el-option>
    </el-select>
    <el-select v-model="district" class="m-2" placeholder="区" size="large" :disabled="!city">
        <el-option
          v-for="item in districtOptions"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        >
        </el-option>
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import {ref, computed, watch, defineEmits} from 'vue'
import areaData from './area.json'
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
const province = ref<string>('')
const city = ref<string>('')
const district = ref<string>('')
const emits = defineEmits(['changeArea'])
watch(province, () => {
  city.value = ''
  district.value = ''
})
watch(city, () => {
  district.value = ''
})
const cityOptions = computed(() => {
  return areaData.find(item => item.code === province.value)?.children
})
const districtOptions = computed(() => {
  if(!cityOptions.value) return []
  return cityOptions.value.find(item => item.code === city.value)?.children
})
watch(district, () => {
  let provinceData:AreaItem = areaData.find(item => item.code === province.value) || {code: '', name: ''}
  let cityData:AreaItem = cityOptions.value ? (cityOptions.value.find(item => item.code === city.value) || {code: '', name: ''}) : {code: '', name: ''}
  let districtData:AreaItem = districtOptions.value ? (districtOptions.value.find(item => item.code === district.value) || {code: '', name: ''}) : {code: '', name: ''}
  let result:AreaResult = {
    province: {
      code: provinceData.code,
      name: provinceData.name,
    },
    city: {
      code: cityData.code,
      name: cityData.name,
    },
    district: {
      code: districtData.code,
      name: districtData.name,
    }
  }
  emits('changeArea', result)
})
</script>
<style lang="scss" scoped>
.el-select {
  margin: 0 10px;
}
</style>