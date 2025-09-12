<template>
  <vuetify-wrapper>
    <s-header></s-header>
    <s-btn @click="openSlidePanel">Open Panel</s-btn>
    <s-slide-panel v-bind="slidePanelProps">
      슬라이드 패널 컨텐츠
    </s-slide-panel>
  </vuetify-wrapper>
</template>


<script setup>
import { SBtn } from '@/components.js'
import { SSlidePanel } from '@/components.js'
import { useSlidePanel } from '@/index.js'
import SHeader from '@/components/layout/SHeader.vue'
import VuetifyWrapper from '../.storybook/VuetifyWrapper.vue'

const { slidePanelProps, openSlidePanel, closeSlidePanel } = useSlidePanel({ title: '슬라이드 패널 제목', direction: 'bottom' })
</script>

<style>
body {
  min-height: 100dvh;
}
</style>
