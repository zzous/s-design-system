<template>
  <v-btn class="s-btn" elevation="0" :s-color="color" :size="size" :to="to" :height="height">
    <template v-if="title">
      {{ title }}
    </template>
    <slot v-else/>
  </v-btn>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  to: {
    type: String,
    required: false,
    default: null,
  },
  height: {
    type: [String, Number],
    required: false,
    default: null,
  },
  size: {
    type: String,
    default: undefined, //기본 medium
    validator: value => {
      return [undefined, 'x-small', 'small', 'large', 'x-large'].includes(value);
    },
  },
  color: {
    type: String,
    default: 'blue',
  },
});
</script>

<style lang="scss">
a.s-btn {
  min-width: 110px;
}
.s-title-area__content .s-title-area__buttons a:not(:first-child) {
  margin-left: 10px;
}
.s-btn {

  &.v-btn--variant-elevated {
    &[s-color='blue'] {
      background: $s-btn--blue-1;
      color: white;
    }
    &[s-color='red'] {
      background: $s-btn--red-1;
      color: white;
    }
    &[s-color='black'] {
      background: black;
      color: white;
    }
  }

  &.v-btn--variant-outlined {
    opacity: 1;
    background-color: white;

    &[s-color='blue'] {
      border-color: $s-btn--blue-1;
      color: $s-btn--blue-1;
      &:hover .v-btn__overlay {
        background: $s-btn--blue-1;
      }
    }
    &[s-color='red'] {
      border-color: $s-btn--red-1;
      color: $s-btn--red-1;
      &:hover .v-btn__overlay {
        background: $s-btn--red-1;
      }
    }
    &:disabled {
      border-color: $s-default--gray-5;
      color: $s-default--gray-5;
    }
  }
}
</style>
