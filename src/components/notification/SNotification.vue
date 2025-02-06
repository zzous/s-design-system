<template>
  <div class="s-notification" :class="isMore ? 'more' : ''">
    <div class="notification__header-box">{{ notificationName }}</div>
    <template v-if="items.length">
      <div class="notification__contents-box" :class="isMore ? 'more' : ''">
        <!-- @click="onClickNotification(noti)" -->
        <div
          class="notification__content"
          v-for="noti in items"
          :key="noti.idx"
          @mouseenter="toggleDeleteButton(noti.notificationIdx)"
          @mouseleave="showDeleteButtonIdx = ''"
          @click="onClickContent(noti)"
          @keyup.enter="onClickContent(noti)"
        >
          <div class="notification__prefix">
            <v-icon>mdi-alert-circle</v-icon>
          </div>
          <div class="notification__title-wrapper">
            <div class="title--left">
              <div class="notification__title">
                <span> {{ noti.msgTitle }}</span>
                <span class="created">{{
                  createdAt(noti.createdAt) || '-'
                }}</span>
              </div>
              <div class="notification__message-box">
                <div class="notification__message">
                  <div>
                    <span>{{ noti.msgContent }}</span>
                  </div>
                </div>
                <div class="notification__delete-box">
                  <div
                    v-if="showDeleteButtonIdx === noti.notificationIdx"
                    class="notification__delete-wrapper"
                    @click.stop="onClickDeleteNoti(noti)"
                  >
                    <v-icon class="notification__delete-icon" contain
                      >mdi-close</v-icon
                    >
                  </div>
                </div>
              </div>
              <div>
                <p>{{ noti.msgAdditional }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="notification__footer-box"
        v-if="!isMore"
        @click="onClickMore"
        @keypress="onClickMore"
      >
        ...
      </div>
    </template>
    <div class="notification-no-item" v-else>{{ noItemText }}</div>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue';
import SBtn from '../button/SBtn.vue';

const emits = defineEmits(['onToggleNoti', 'onClickDeleteNoti', 'onClickContent'])

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
})

const isMore = ref(false)
const showDeleteButtonIdx = ref('')

const createdAt = computed(() => {
  // return value => (value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : '')
  return value => value
})

const onClickMore = () => {
  isMore.value = true
}

const toggleDeleteButton = notiIdx => {
  showDeleteButtonIdx.value = notiIdx
}

const onClickContent = noti => {
  emits('onClickContent', noti)
}

const onClickDeleteNoti = noti => {
  emits('onClickDeleteNoti', noti)
}

</script>

<style lang="scss">
@import url('./SNotification.scss');
</style>
