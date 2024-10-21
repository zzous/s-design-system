<template>
  <div class="mt-4 mb-3">
    <span>
      size :
      <v-icon icon="mdi-file-outline" />
      0.06MB
    </span>
  </div>
  <div class="branch-select">
    <v-row class="">
      <v-col class="pb-0">
        <v-select
          v-model="selectedBranch"
          width="240"
          :items="branchList"
          item-title="name"
          item-value="id"
          density="compact"
          variant="outlined"
        />
      </v-col>
      <v-col class="text-end" cols="4">
        <v-text-field
          variant="outlined"
          class="position-absolute"
          placeholder="파일 검색"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          width="250px"
        />
        <v-btn variant="flat" base-color="#ecf5ff" class="clone-btn mr-1" :height="40">
          복제 또는 다운로드
          <v-icon icon="mdi-arrow-down-thin" />
        </v-btn>
        <default-button-component title="새파일" :height="40" />
      </v-col>
    </v-row>
  </div>
  <div class="pt-1">
    <v-data-table :headers="fileTableHeader" :items="fileList" :items-per-page="-1" :hide-default-footer="true">
      <template #headers="props">
        <tr>
          <th v-for="header in props.headers[0]" :key="header.value" class="file-table-header">
            {{ header.title }}
          </th>
        </tr>
      </template>
      <template #[`item.fileName`]="{ item }">
        <v-icon v-if="item.fileType === 'folder'" class="mr-2">mdi-folder</v-icon>
        <v-icon v-else class="mr-2">mdi-file</v-icon>
        {{ item.fileName }}
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'

const branchList = ref([
  { id: 'dev', name: 'dev' },
  { id: 'stg', name: 'stg' },
  { id: 'prod', name: 'prod' },
])

const fileTableHeader = ref([
  { title: '파일명', value: 'fileName' },
  { title: '마지막 커밋', value: 'commitDate' },
  { title: '마지막 업데이트', value: 'updatedAt' },
])

const fileList = ref([
  { fileName: 'gradle', fileType: 'folder', updatedAt: 'a few seconds ago', commitDate: '' },
  { fileName: 'src', fileType: 'folder', updatedAt: 'a few seconds ago', commitDate: '' },
  { fileName: '.gitignore', fileType: 'file', updatedAt: 'a few seconds ago', commitDate: '' },
  { fileName: 'build.gradle', fileType: 'file', updatedAt: 'a few seconds ago', commitDate: '' },
  { fileName: 'gradlew', fileType: 'file', updatedAt: 'a few seconds ago', commitDate: '' },
  { fileName: 'gradlew.bat', fileType: 'file', updatedAt: 'a few seconds ago', commitDate: '' },
  { fileName: 'settings.gradle', fileType: 'file', updatedAt: 'a few seconds ago', commitDate: '' },
])

const selectedBranch = ref('dev')
</script>

<style lang="scss" scoped>
.clone-btn {
  border: 1px solid #b3d8ff;
  color: #409eff !important;
}

.branch-select {
  border-bottom: 1px solid;
}

.file-table-header {
  background: #f7f9fa;
  color: #666;
}
</style>
