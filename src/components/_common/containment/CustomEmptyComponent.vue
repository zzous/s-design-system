<template>
  <div class="s-empty">
    <v-card
      class="s-empty__card"
      :elevation="elevation"
      :outlined="outlined"
      :shadowed="shadowed"
    >
      <div v-if="title" class="s-empty__card-title">
        {{ title }}
      </div>
      <div class="s-empty__card-content">
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
.s-empty {
  $this: 's-empty';
  display: flex;
  width: 100%;
  height: 80px;

  .#{$this}__card {
    width: 100%;
    height: 100%;
    border: thin dotted $s-default--gray-5;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    .#{$this}__card-title {
      @include set-text(bold, 14, rgba($color: $s-primary, $alpha: 1));
      margin-bottom: 4px;
      text-align: center;
      display: flex;
    }
    .#{$this}__card-content {
      @include set-text(500, 12, rgba($color: $s-primary, $alpha: 1));
      text-align: center;
    }
  }
}
</style>
