<template>
  <div class="s-notification" :class="isMore ? 'more' : ''">
    <div class="s-notification__header-box">{{ notificationName }}</div>
    <template v-if="items.length">
      <div class="s-notification__contents-box" :class="isMore ? 'more' : ''">
        <div
          class="s-notification__content"
          v-for="noti in items"
          :key="noti.idx"
          @mouseenter="toggleDeleteButton(noti.notificationIdx)"
          @mouseleave="showDeleteButtonIdx = ''"
          @click="onClickContent(noti)"
          @keyup.enter="onClickContent(noti)"
        >
          <div class="s-notification__prefix">
            <v-icon>{{ setItemIcon(noti) }}</v-icon>
          </div>
          <div class="s-notification__title-wrapper">
            <div class="title--left">
              <div class="s-notification__title">
                <span>
                  {{ setEnglishNoti(noti, 'msgTitle') }}
                </span>
                <span class="created">{{
                  createdAt(noti.createdAt) || '-'
                }}</span>
              </div>
              <div class="s-notification__message-box">
                <div class="s-notification__message">
                  <div>
                    <span>{{ setEnglishNoti(noti, 'msgContent') }}</span>
                  </div>
                </div>
                <div class="s-notification__delete-box">
                  <div
                    v-if="showDeleteButtonIdx === noti.notificationIdx"
                    class="s-notification__delete-wrapper"
                    @click.stop="onClickDeleteNoti(noti)"
                  >
                    <v-icon class="s-notification__delete-icon" contain
                      >mdi-close</v-icon
                    >
                  </div>
                </div>
              </div>
              <div class="s-notification__additional-box">
                <p>{{ setEnglishNoti(noti, 'msgAdditional') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="s-notification__footer-box"
        v-if="!isMore"
        @click="onClickMore"
        @keypress="onClickMore"
      >
        ...
      </div>
    </template>
    <div class="s-notification-no-item" v-else>{{ noItemText }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const emits = defineEmits(['click:delete', 'click:content'])

const props = defineProps({
  notificationName:{
    type: String,
    default: 'Notifications',
  },
  items: {
    type: Array,
    default: () => {
      return []
    },
  },
  noItemText: {
    type: String,
    default: '알림 내역이 없습니다.',
  },
  languageCode: {
    type: String,
    default: 'ko',
  },
})

const isMore = ref(false)
const showDeleteButtonIdx = ref('')

const createdAt = computed(() => {
  // return value => (value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : '')
  return value => value
})

const setItemIcon = noti => {
  switch (noti.notificationType) {
    case 'SUCCESS':
      return 'mdi-check-circle'
    case 'ERROR':
      return 'mdi-close-octagon'
    default:
      return 'mdi-alert-circle'
  }
}

const onClickMore = () => {
  isMore.value = true
}

const toggleDeleteButton = notiIdx => {
  showDeleteButtonIdx.value = notiIdx
}

const onClickContent = noti => {
  emits('click:content', noti)
}

const onClickDeleteNoti = noti => {
  emits('click:delete', noti)
}

// 영문 버전이 없는 경우 한글 버전을 반환
const setEnglishNoti = (noti, item) => {
  if (props.languageCode === 'en') {
    const enItem = `${item}En`
    return noti[enItem] || noti[item]
  }
  return noti[item]
}

</script>

<style lang="scss">
@import url('./SNotification.scss');
</style>
