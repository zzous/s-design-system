<template>
  <div class="sp-empty">
    <v-card
      class="empty__card-wrapper"
      :elevation="elevation"
      :outlined="outlined"
      :shadowed="shadowed"
    >
      <div class="empty__title-wrapper">
        {{ title }}
      </div>
      <div class="empty__desc-wrapper">
        {{ description }}
      </div>
      <slot name="default" />
    </v-card>
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
  }
})
</script>

<style lang="scss">
@import '@/assets/style/_mixin.scss';
.sp-empty {
  $this: 'empty';
  display: flex;
  width: 100%;
  height: 120px;
  .#{$this}__card-wrapper {
    width: 100%;
    height: 100%;
    border: thin dotted $s-text__gray-5;
    display: flex;
    background-color: $s-text__gray-6;

    > .v-row .v-col {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .#{$this}__title-wrapper {
      @include set-text(bold, 16, rgba($color: $s-primary, $alpha: 1));
      margin-bottom: 4px;
      text-align: center;
      display: flex;
    }
    .#{$this}__desc-wrapper {
      @include set-text(light, 13, rgba($color: $s-primary, $alpha: 1));
      text-align: center;
    }
  }
}
</style>
