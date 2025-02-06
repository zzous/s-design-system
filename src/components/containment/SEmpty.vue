<template>
  <div class="s-empty">
    <v-sheet class="s-empty__card" :elevation="elevation" border rounded :shadowed="shadowed">
      <div v-if="title" class="s-empty__card-title">
        {{ title }}
      </div>
      <div class="s-empty__card-content">
        <v-btn flat @click="onClick" v-if="onClick">
          <span style="color: #007bff; font-size: 18px">{{ description }}</span>
        </v-btn>
        <template v-else>{{ description }}</template>
      </div>
      <slot name="default" />
    </v-sheet>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
    description: 'empty 제목',
  },
  description: {
    type: String,
    default: '',
    description: 'empty 내용',
  },
  elevation: {
    type: [Number, String],
    description: '카드의 입체감 조절 0~24까지 가능',
    default: undefined,
  },
  outlined: {
    type: Boolean,
    description: '카드의 외곽선 설정',
    default: true,
  },
  shadowed: {
    type: Boolean,
    description: '카드에 그림자 효과 부여 on/off',
    default: true,
  },
  onClick: {
      type: Function,
      description: 'description 클릭 이벤트',
      default: () => {
        return () => {}
      },
    },
})
</script>

<style lang="scss" scoped>
@import url('./SEmpty.scss');
</style>
