<template>
  <s-modal
    :model-value="modelValue"
    class-name="sm"
    :title="$t('빌드 승인 프로세스 설정')"
    @update:model-value="updateModal"
  >
    <template #default>
      <s-sub-header :title="$t('빌드 승인 프로세스 목록')" class-name="sub-title" />
      <div class="layout__list-contents">
        <div class="search">
          <v-text-field
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
            v-model="selected"
            :header="headers"
            :items="datas"
            item-value="buildId"
            show-select
            hide-default-footer
          />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="form__btn-wrapper">
        <s-btn>
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
import { useI18n } from '@/_setting/i18n'

const { tt } = useI18n()

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const headers = [
  {
    title: tt('빌드 승인 프로세스'),
    key: 'projectType',
    align: 'center',
    width: 180
  }
]

const emits = defineEmits(['update:model-value'])

const updateModal = () => {
  emits('update:model-value', false)
}
</script>

<style lang="scss" scoped>

</style>