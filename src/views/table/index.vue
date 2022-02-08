<template>
  <m-table :data="tableData" :tableOptions="columns"></m-table>
</template>
<script lang="ts" setup>
const columns = [
  {
    prop: 'date',
    label: 'Date',
    width: '180'
  }, {
    prop: 'name',
    label: 'Name',
    width: '180'
  }, {
    prop: 'address',
    label: 'Address'
  }
]
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>