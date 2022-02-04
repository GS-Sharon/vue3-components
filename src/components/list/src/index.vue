<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
  >
    <el-tab-pane v-for="item in props.list" :label="item.title" :name="item.title">
      <div class="notification-panel">
        <el-scrollbar height="200px">
          <ul class="notification-list">
            <li v-for="(item, index) in currentList" @click="() => {clickItem(item, index)}">
              <div class="left">
                <img :src="item.avator" alt="">
              </div>
              <div class="middle">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="time">{{item.time}}</div>
              </div>
              <div class="right" v-if="item.tag">
                <el-tag :type="item.tagType">{{item.tag}}</el-tag>
              </div>
            </li>
          </ul>
        </el-scrollbar>
        <div class="notification-actions" v-if="currentActions.length">
          <ul>
            <li v-for="action in currentActions" @click="() => {clickAction(action)}">
              <el-icon :size="20" v-if="action.icon">
                <component :is="action.icon"></component>
              </el-icon>
              {{action.text}}
            </li>
          </ul>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, ref, computed } from 'vue';
import {ListOptions, ListItem, ActionsOption} from '../types'
const props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    default: () => []
  }
})
const emits = defineEmits(['clickItem', 'clickAction'])
const activeName = ref<string>(props.list[0].title)
const currentList = computed(() => {
  return props.list.find((listItem:ListOptions) => listItem.title === activeName.value)?.content || []
})
const currentActions = computed(() => {
  return props.list.find((listItem:ListOptions) => listItem.title === activeName.value)?.actions || []
})
const clickItem = (item: ListItem, index: number) => {
  emits('clickItem', item, index)
}
const clickAction = (action: ActionsOption) => {
  emits('clickAction', action)
}
</script>
<style lang="scss" scoped>
.notification-panel {
  .notification-list {
    li {
      list-style: none;
      display: flex;
      margin-bottom: 8px;
      cursor: pointer;
      img {
        border-radius: 100%;
        width: 50px;
        height: 50px;
      }
      .middle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10px;
        .title {
          margin-bottom: 2px;
        }
        .desc {
          font-size: 12px;
        }
        .time {
          color: #bbb;
          font-size: 12px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        .el-tag__content {
          font-size: 10px;
        }
      }
    }
  }
  .notification-actions {
    border-top: solid 1px #eee;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        flex: 1;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>