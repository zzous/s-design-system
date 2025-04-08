<template>
  <section class="s-detail-tooltip">
    <div class="label">
      <a class="label--text" variant="plain">
        <v-icon v-if="props.label === 'Label'" icon="mdi-dots-vertical" />
        <span v-else>{{ props.label }}</span>
        <v-overlay
          absolute
          v-model="isOpen"
          activator="parent"
          scrim
          location-strategy="connected"
          scroll-strategy="reposition"
        >
          <v-card class="s-detail-tooltip__content" v-if="isOpen">
            <v-icon class="close-Btn" icon="mdi-close" @click="toggle" />
            <v-chip
              v-for="(item, index) in props.list"
              :key="props.keyId || index"
              variant="text"
              size="small"
              ><span class="detail-item mr-2">
                <SSimpleTooltip
                  :uuid="uuid"
                  :title="displayText(item)"
                  :text="displayText(item)"
                  titleWidth="360"
                />
              </span>
              <v-icon
                v-if="props.icon !== ''"
                :icon="props.icon"
                @click="
                  props.icon === 'mdi-content-copy'
                    ? copyText(item)
                    : props.itemClick(item)
                "
              />
            </v-chip>
          </v-card>
        </v-overlay>
      </a>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import SSimpleTooltip from './SSimpleTooltip.vue'

const uuid = new Date().getTime().toString()

const props = defineProps({
  label: { type: String, default: 'Label' }, // 기존에 보이는 텍스트
  itemId: { type: String, default: '' }, // v-for key 및 Item 텍스트에 표시
  itemName: { type: String, default: '' }, // Item 텍스트에 표시
  list: { type: Array, default: () => [] }, // 상세에 보일 리스트
  icon: { type: String, default: '' }, // 상세 아이템 옆에 보일 아이콘
  itemClick: { type: Function, default: () => {} }, // 상세 아이템 클릭 이벤트
  copyText: { type: Function, default: (item) => { new Function(item) } }, // 상세 아이템 복사 버튼 클릭 이벤트
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

watch(isOpen, (nv, ov) => {
  if (nv && !props.list?.length) isOpen.value = ov
})

const displayText = computed(() => {
  return item => {
    return typeof item === typeof {}
      ? `${item[props.itemName] || '-'} / ${item[props.itemId]}`
      : item
  }
})
</script>
<style lang="scss">
.s-detail-tooltip {
  position: relative;

  & > .label {
    height: 100%;
    color: #1a3350;
    text-decoration: underline;
    cursor: pointer;
  }
}

.s-detail-tooltip__content {
  position: absolute;
  top: calc(100% + 8px);
  left: -80px;
  display: flex;
  flex-direction: column;
  width: auto;
  border: 1px solid #7c7c7c;
  background: #fff;
  padding: 10px 22px 10px 10px;
  z-index: 99999;

  .detail-item {
    max-width: 360px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .close-Btn {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
  }
}
</style>
