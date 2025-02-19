<script setup>
import { SBtn, SDataTable } from './index.js';

const headers = [
  {
    title: '이름',
    key: 'name',
  },
  {
    title: '나이',
    key: 'age',
  },
];

const items = [
  {
    name: '홍길동',
    age: 20,
  },
  {
    name: '이순신',
    age: 30,
  },

];

const handleSortBy = (key) => {
  console.log(key);
};
</script>

<template>
<div>
  <s-btn>버튼</s-btn>

  <s-data-table :headers="headers" :items="items" @update:sortBy="handleSortBy" />
</div>
</template>

<style scoped lang="scss">
</style>
