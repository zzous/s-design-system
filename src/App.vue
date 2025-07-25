<script setup>
import { SBtn, SDataTable, SFilterSelect, SNavi } from '@/components.js';
import { ref } from 'vue';

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
  {
    name: null,
    age: null,
  },
];

const selected = ref([]);

const nullTitle = '빈 값';

const handleSortBy = (key) => {
  console.log(key);
};
</script>

<template>
<div>
  <s-btn>버튼</s-btn>

  <s-data-table :headers="headers" :items="items" @update:sortBy="handleSortBy" />

  <hr />

  <br />

  <s-filter-select
    v-model="selected"
    density="comfortable"
    variant="outlined"
    hide-details
    multiple
    width="230px"
    :items="items"
    item-title="name"
    item-value="age"
    :null-title="nullTitle"
    has-null-value
    :display-text="`선택된 항목 ${selected.length}개`"
  />
</div>
</template>

<style scoped lang="scss">
</style>
