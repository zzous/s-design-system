<template>
  <div class="view-wrapper">
    <ListViewHeaderComponent title="파일" :show-cnt="false" />
    <div class="contents">
      <div class="mt-2">
        <v-btn class="mr-1" :active-color="btnActiveColor" base-color="#E4E6EF" variant="flat" to="file">파일</v-btn>
        <v-btn class="mr-1" :active-color="btnActiveColor" base-color="#E4E6EF" variant="flat" to="commit">커밋</v-btn>
        <v-btn class="mr-1" :active-color="btnActiveColor" base-color="#E4E6EF" variant="flat" to="branch">브랜치</v-btn>
        <v-btn class="mr-1" :active-color="btnActiveColor" base-color="#E4E6EF" variant="flat" to="merge-request">병합 요청</v-btn>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import ListViewHeaderComponent from '@/components/_common/ListViewHeaderComponent.vue'
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts.js'
import { ref } from 'vue'
const btnActiveColor = ref(DEFAULT_BUTTON_COLOR)
</script>
<style scoped></style>
