<template>
  <el-button @click="toggleVisible">
    <slot></slot>
  </el-button>
  <el-dialog v-model="visible" title="选择图标" width="50%">
    <el-scrollbar height="400px">
      <ul>
        <li
          v-for="item in ElIcons"
          :key="item.name"
          @click="
            () => {
              copy(item.name);
            }
          "
        >
          <el-icon :size="30">
            <component :is="item"></component>
          </el-icon>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </el-scrollbar>
  </el-dialog>
</template>
<script lang="ts" setup>
import * as ElIcons from "@element-plus/icons-vue";
import { defineEmits, ref} from 'vue'
import { useCopy } from "@/hooks/useCopy/index";

const emits = defineEmits(['update:visible'])
const toggleVisible = () => {
  visible.value = !visible.value
}
const visible = ref<boolean>(false);

const copy = (item: string) => {
  useCopy(`
  <el-icon :size='30'>
    <component :is="${item}"></component>
  </el-icon>`);
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline-start: 0;
}
li {
  list-style: none;
  width: 20%;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
  p {
    margin-top: 4px;
  }
}
</style>
