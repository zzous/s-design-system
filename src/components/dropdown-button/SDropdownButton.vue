<template>
  <v-menu v-if="list.length" offset-y>
    <template #activator="{ props: menuActivatorProps }">
      <s-btn
          v-bind="menuActivatorProps"
          :disabled="disabled"
          class="d-flex align-center"
      >
        <s-icon :name="iconName" :size="16" class="mr-1" />
        {{ label }}
      </s-btn>
    </template>
    <v-list>
      <v-list-item
          v-for="(item, idx) in list"
          :key="item?.actionCode || idx"
          :disabled="isItemDisabled(item)"
          @click="handleClick(item)"
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>


<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  list: {
    type: Array,
    default: () => [],
    description: '드롭다운 항목 리스트',
  },
  whiteList: {
    type: Array,
    default: () => [],
    description: 'RBAC 화이트리스트',
  },
  selectedList: {
    type: Array,
    default: () => [],
    description: '테이블 등에서 선택된 항목들',
  },
  iconName: {
    type: String,
    default: () => 'manage',
    description: '아이콘 이름',
  }
})

// permittedItems 로직을 제거하고, isItemDisabled 함수를 수정
const isItemDisabled = (item) => {
  // 1. `whiteList`에 포함되지 않으면 비활성화
  const isPermitted = props.whiteList.includes(item.actionCode)
  if (!isPermitted) return true

  // 2. 기존 로직 유지
  if (item.disabled === true) return true

  const count = props.selectedList.length

  switch (item.type) {
    case 'multiple':
      return count === 0
    case 'single':
      return count !== 1
    case 'none':
    case null:
    case undefined:
      return false
    default:
      return false
  }
}

const handleClick = async item => {
  await item.onClick?.()
}
</script>
