<template>
<el-popover
  placement="bottom-start"
  :width="360"
  trigger="click"
  v-model:visible="visible"
>
  <template #reference>
    <span style="cursor: pointer;" @click="() => {visible = !visible}">
      {{selectedValue ? selectedValue : props.placeholder}}
      <el-icon :class="['rotate', visible ? 'rotate180' : 'rotate0']">
        <arrow-up/>
      </el-icon>
    </span>
  </template>
  <div class="container">
    <div class="header">
      <el-radio-group v-model="ifCity" style="margin-bottom: 20px" size="small">
        <el-radio-button :label="true">按城市</el-radio-button>
        <el-radio-button :label="false">按省份</el-radio-button>
      </el-radio-group>
      <el-select
        v-model="value"
        filterable
        :filter-method="filterOptions"
        allow-create
        default-first-option
        size="small"
        :reserve-keyword="false"
        placeholder="请选择城市"
        @change="selectChange"
      >
        <el-option
          v-for="item in cityOptions"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>
    <div class="main">
      <template v-if="ifCity">
        <ul class="charList">
          <li v-for="(item, char) in city.cities" :key="char" @click="() => {clickChar(char)}">{{char}}</li>
        </ul>
        <el-scrollbar height="400px">
          <ul class="showList">
            <template v-for="(item, char) in city.cities" :key="char">
              <li :id="char">{{char}}:&nbsp; <span v-for="city in item" :key="city.id" @click="() => {clickCityItem(city)}">{{city.name}}</span></li>
            </template>
          </ul>
        </el-scrollbar>
      </template>
      <template v-else>
        <ul class="charList">
          <li v-for="(item, char) in provinces" :key="char" @click="() => {clickChar(char)}">{{char}}</li>
        </ul>
        <el-scrollbar height="400px">
          <ul class="showList">
            <template v-for="(item, index) in Object.values(provinces)" :key="index">
              <li v-for="province in item" :key="province.name" :id="province.id">{{province.name}}:&nbsp; <span v-for="city in province.data" :key="city" @click="clickCityItem(city)">{{city}}</span></li>
            </template>
          </ul>
        </el-scrollbar>
      </template>
    </div>
  </div>
</el-popover>
</template>
<script lang="ts" setup>
import { defineProps, ref, onMounted, watch } from 'vue'
import city from '../lib/city'
import provinces from '../lib/province.json'
import { City } from './type';
const props = defineProps({
  placeholder: {
    type: String,
    default: '请选择'
  }
})
const emits = defineEmits(['cityChange', 'provinceChange', 'selectChange'])
const visible = ref<boolean>(true)
const ifCity = ref<boolean>(true)
const value = ref<string[]>([])
const selectedValue = ref<string>('')
const cityOptions = ref<City[]>([])
const allCities = ref<City[]> (Object.values(city.cities).flat())
onMounted(() => {
  cityOptions.value = allCities.value
})
// 自定义搜索框筛选opitons
const filterOptions = (val:string) => {
  //城市根据拼音或文字搜索
  if(ifCity.value) {
    cityOptions.value = allCities.value.filter(item => item.name.includes(val) || item.spell.includes(val))
  } else {
    // 省份根据文字搜索(没必要)
    cityOptions.value = allCities.value.filter(item => item.name.includes(val))
  }
}
const clickCityItem = (city: City | string) => {
  if(ifCity.value) {
    emits('cityChange', city)
  } else {
    emits('provinceChange', city)
  }
  selectedValue.value = typeof city === 'string' ? city : city.name
  visible.value = false
}
const selectChange = (val:number) => {
  const selected = allCities.value.filter(item => item.id === val)[0]
  selectedValue.value = selected.name;
  visible.value = false
  emits('selectChange', selected)
}
const clickChar = (char: string) => {
  // 找到字母所在的列表区域并通过dom方式进行跳转
  const el = document.getElementById(char);
  if(el) el.scrollIntoView()
}
</script>
<style lang="scss" scoped>
.rotate {
  transition: .5s;
}
.rotate180 {
  animation: rotate180 .5s;
  animation-fill-mode: forwards;
}
.rotate0 {
  animation: rotate0 .5s;
  animation-fill-mode: forwards;
}
@keyframes rotate180 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
  }
}
@keyframes rotate0 {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.container {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .el-radio-group {
      margin-bottom: 0!important;
    }
  }
  .main {
    .charList {
      display: flex;
      flex-wrap: wrap;
      li {
        list-style: none;
        border: solid 1px;
        min-width: 18px;
        height: 18px;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 3px;
        cursor: pointer;
      }
    }
    .showList {
      li {
        list-style: none;
        margin-top: 10px;
        span {
          margin-right: 4px;
          line-height: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>