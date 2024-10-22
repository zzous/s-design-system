<template>
  <s-modal
    :model-value="modelValue"
    class-name="sm"
    :title="$t('빌드 승인 프로세스 설정')"
    @update:model-value="updateModal"
  >
    <template #default>
      <div class="form-wrapper">
        <s-sub-header :title="$t('빌드 승인 프로세스 목록')" class-name="sub-title" :list-cnt="datas.length" />
        <div class="layout__list-contents">
          <div class="search">
            <v-text-field
              v-model="search"
              class="search__text-field"
              variant="outlined"
              density="compact"
              hide-details
              prepend-inner-icon="mdi-magnify"
              :placeholder="$t('검색할 키워드를 입력하세요')"
            />
          </div>
          <div>
            <s-data-table
              :model-value="selected"
              :search="search"
              :headers="headers"
              :items="datas"
              item-value="flowId"
              show-select
              hide-default-footer
              @update:model-value="updateModelValue"
            />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="form__btn-wrapper">
        <s-btn @click="sendDatas">
          {{ $t('확인') }}
        </s-btn>
        <s-btn variant="outlined" @click="updateModal">
          {{ $t('취소') }}
        </s-btn>
      </div>
    </template>
  </s-modal>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useI18n } from '@/_setting/i18n'
import { useSmcStore } from '@/stores/devops/smc'

const { tt } = useI18n()
const smcStore = useSmcStore()

const search = ref('')
const { buildFlows: datas } = storeToRefs(smcStore)

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Array,
    default: () => [],
  },
})

const headers = [
  {
    title: tt('빌드 승인 프로세스'),
    key: 'flowName',
    align: 'center',
  },
]

const lazySelected = ref([])

const emits = defineEmits(['update:model-value', 'update:selected'])

const updateModal = () => {
  emits('update:model-value', false)
}

const updateModelValue = value => {
  lazySelected.value = value
}

const sendDatas = () => {
  const selectedItems = lazySelected.value.map(flowId => datas.value.find(item => item.flowId === flowId))
  emits('update:selected', [...selectedItems])
  emits('update:model-value', false)
}

watch(
  () => props.selected,
  () => {
    lazySelected.value = props.selected
  },
)

onMounted(() => {
  smcStore.getSmcFlows()
})
</script>

<style lang="scss" scoped></style>
