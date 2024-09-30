<template>
  <div class="mt-6 pb-4 border-b text-end">
    <DefaultButtonComponent> <v-icon icon="mdi-plus" />신규 브랜치 </DefaultButtonComponent>
  </div>
  <div>
    <div class="border-b">
      <!--   TODO: 나중에 v-data-table 로 바꾸는게 좋을지 확인 해 볼것   -->
      <table class="branch-wrapper mt-5 mb-5">
        <tbody>
          <tr>
            <td class="branch-name">
              <v-icon>mdi-monitor</v-icon>&nbsp;master <v-badge color="info" content="Default" inline />
            </td>
            <td rowspan="2" class="branch-extra text-end">
              <DefaultButtonComponent title="삭제" />
            </td>
          </tr>
          <tr>
            <td class="branch-info">
              <v-icon class="rotate-90">
                mdi-source-commit
              </v-icon>1ed5149a60b79d3551f549860d704290decdb64d / 8 days ago
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination v-model="page" :length="pageCnt" />
  </div>
</template>

<script setup>
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import { computed, ref } from 'vue'

const itemsPerPage = ref(10)
const branchList = ref([1])
const pageCnt = computed(() => Math.ceil(branchList.value.length / itemsPerPage.value))
const page = ref(1)
</script>

<style scoped>
.branch-wrapper {
  width: 100%;
  font-size: 13px;
}
.rotate-90 {
  rotate: 90deg;
}
</style>
