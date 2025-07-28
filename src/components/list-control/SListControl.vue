<template>
  <div class="list-controls">
    <SRefreshBtn
        :on-click-refresh="onRefresh"
        :refresh-date="refreshDate"
        :refresh-date-title="refreshDateTitle"
    />
    <v-select
        :model-value="perPages"
        :items="perPageList || PER_PAGES"
        item-title="text"
        item-value="value"
        @update:model-value="onChangePerPages"
    />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import SRefreshBtn from "@/components/button/SRefreshBtn.vue";

const PER_PAGES = Object.freeze([
  { text: '10', value: 10 },
  { text: '15', value: 15 },
  { text: '20', value: 20 },
])

const emit = defineEmits(['on-refresh', 'set-per-pages'])
const props = defineProps({
  list: { type: Array, default: () => [] },
  perPages: { type: Number, default: 10 },
  perPageList: { type: Array, default: () => null },
  refreshDateTitle: { type: String, default: 'Date' }
})

const refreshDate = ref(new Date())

const onRefresh = () => {
  emit('on-refresh')
}

const onChangePerPages = (val) => {
  emit('set-per-pages', val)
}

const initializeDate = () => {
  refreshDate.value = new Date()
}

watch(() => props.list, initializeDate)
</script>
