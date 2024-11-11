import {SModal, SBtn, SSubHeader} from '@';
import { ref } from 'vue';

export default {
    title: 'Modal/SModal',
    component: SModal,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SModal },
    setup() { return { args }; },
    template: `
      <SModal v-bind="args" @update:modelValue="args.modelValue = $event">
        Modal Contents
      </SModal>
    `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: false,
    title: 'Modal Title',
    teleportId: 'storybook-root',
};


const newModalTemplate = `
  <SModal v-bind="args" @update:modelValue="args.modelValue = $event">
    <div class="view-wrapper">
      <div class="form-wrapper">
        <SSubHeader title="기본 정보" :show-cnt="false" class-name="sub-title" />
      </div>
    </div>
    <template #footer>
      <div class="form__btn-wrapper">
        <SBtn title="저장" v-else @click="args.modelValue = false" />
        <SBtn title="취소" variant="outlined" @click="args.modelValue = false" />
      </div>
    </template>
  </SModal>
  <SBtn title="열기" @click="args.modelValue = true" />
`;
export const NewModal = (args) => ({
  components: { SModal, SBtn, SSubHeader },
  setup() {
    return { args };
  },
  template: newModalTemplate,
});

NewModal.args = {
  className: 'md',
  title: '자원 등록',
}

NewModal.parameters = {
  docs: {
    source: {
      code: `<template>${newModalTemplate}</template>`,
      language: 'html',
      type: 'auto',
    },
  },
};


const editModalTemplate = `
  <SModal v-bind="args" @update:modelValue="args.modelValue = $event">
    <div class="view-wrapper">
      <div class="form-wrapper">
        <SSubHeader title="기본 정보" :show-cnt="false" class-name="sub-title" />
      </div>
    </div>
    <template #footer>
      <div class="form__btn-wrapper">
        <SBtn title="수정" v-if="!editBtn" @click="editBtn = true" />
        <SBtn title="저장" v-else @click="editBtn = false" />
        <SBtn title="취소" variant="outlined" @click="args.modelValue = false" />
      </div>
    </template>
  </SModal>
  <SBtn title="열기" @click="args.modelValue = true" />
`;

const editModalScript = `
<script setup>
import { ref } from 'vue'

const editBtn = ref(false);
</script>
`;

export const DetailEditModal = (args) => ({
  components: { SModal, SBtn, SSubHeader },
  setup() {
    const editBtn = ref(false);
    return { args, editBtn };
  },
  template: editModalTemplate,
});

DetailEditModal.args = {
  className: 'md',
  title: '자원 상세',
}

DetailEditModal.parameters = {
  docs: {
    source: {
      code: `<template>${editModalTemplate}</template>\n${editModalScript}`,
      language: 'html',
      type: 'auto',
    },
  },
};
