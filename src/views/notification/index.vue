<template>
  <m-notification :value="12">
    <m-list :list="list" @clickItem="clickItem" @clickAction="clickAction"></m-list>
  </m-notification>
</template>
<script lang="ts" setup>
import { ActionsOption } from '@/components/list/types';
import {ref} from 'vue'
import {ListItem} from './type'
const clickItem = (item:ListItem, index: number) => {
  console.log(item, index)
}
const clickAction = (action:ActionsOption) => {
  console.log(action)
}
const list = ref([
  {
    title: '通知',
    content: [
      {
        avator: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic%2Fc4%2F9f%2F09%2Fc49f090757360f843141fe2bab2cfc8f_1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646509875&t=cedc3c65777c1f0da533d17d0be6913d',
        title: '姆蒂.库克 回复了你的邮件',
        time: '2019-5-08 14:33:18'
      }, {
        avator: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fcc%2Fa2%2F2e%2Fcca22e5c77e7fdd386751b11acc368f8.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646510013&t=7402df901a42f6487b8ee59dce59d857',
        title: '乔纳森.伊夫 邀请你参加会议',
        time: '2019-5-08 14:33:18'
      }, {
        avator: 'https://img1.baidu.com/it/u=2726114610,3596967274&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        title: '斯蒂夫.沃兹尼亚克 已批准你的休假申请',
        time: '2019-5-08 14:33:18'
      }
    ],
    actions: [
      {
        icon: 'delete',
        text: '清空待办',
        click: (list: ListItem[],activeName:string) => {
          console.log(list)
          // list.find((listItem) => listItem.title === activeName.value)?.content = []
        }
      }, {
        icon: 'edit',
        text: '查看更多'
      }
    ]
  },{
    title: '关注',
    content: [
      {
        avator: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic%2Fc4%2F9f%2F09%2Fc49f090757360f843141fe2bab2cfc8f_1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646509875&t=cedc3c65777c1f0da533d17d0be6913d',
        title: '曲丽丽 评论了你',
        desc: '描述信息描述信息',
        time: '3小时前'
      }, {
        avator: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fcc%2Fa2%2F2e%2Fcca22e5c77e7fdd386751b11acc368f8.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646510013&t=7402df901a42f6487b8ee59dce59d857',
        title: '曲丽丽 评论了你',
        desc: '描述信息描述信息',
        time: '3小时前'
      }, {
        avator: 'https://img1.baidu.com/it/u=2726114610,3596967274&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        title: '曲丽丽 评论了你',
        desc: '描述信息描述信息',
        time: '3小时前'
      }
    ], 
    actions: [
      {
        icon: 'delete',
        text: '清空待办'
      }, {
        icon: 'edit',
        text: '查看更多'
      }
    ]
  },{
    title: '代办',
    content: [
      {
        avator: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic%2Fc4%2F9f%2F09%2Fc49f090757360f843141fe2bab2cfc8f_1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646509875&t=cedc3c65777c1f0da533d17d0be6913d',
        title: '任务名称',
        desc: '任务需要在2017-01-12 20:00 前启动',
        tag: '未开始',
        tagType: ''
      }, {
        avator: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fcc%2Fa2%2F2e%2Fcca22e5c77e7fdd386751b11acc368f8.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646510013&t=7402df901a42f6487b8ee59dce59d857',
        title: '第三方紧急代码变更',
        desc: '关林提交于 2017-01-06，需在2017-01-07前完成代码变更任务',
        tag: '马上到期',
        tagType: 'danger'
      }, {
        avator: 'https://img1.baidu.com/it/u=2726114610,3596967274&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        title: '信息安全考试',
        desc: '指派于 2017-01-09 前完成更新并发布',
        tag: '已耗时8天',
        tagType: 'warning'
      }
    ], 
    actions: [
      {
        icon: 'delete',
        text: '清空待办'
      }, {
        icon: 'edit',
        text: '查看更多'
      }
    ]
  }
  
])
</script>