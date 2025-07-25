import { SModal, SBtn, SSubHeader, SFormTable, SFormItem } from '@/components';
import { ref } from 'vue';

export default {
  title: 'Modal/SModal',
  component: SModal,
  tags: ['autodocs'],
  decorators: [
    () => ({
        template: '<div id="destination"><story/></div>'
    })
  ],
  parameters: {
    docs: {
      description: {
        component: 'Modal component with various sizes and configurations'
      }
    }
  }
};

const Template = (args) => ({
    components: { SModal, SBtn },
    setup() {
        const isOpen = ref(false);
        return { args, isOpen };
    },
    template: `
      <div>
        <SBtn title="Open Modal" @click="isOpen = true" />
        <SModal
          v-model="isOpen"
          v-bind="args"
          @update:model-value="isOpen = $event"
        >
          <template #footer>
            <div class="form__btn-wrapper">
              <SBtn title="Close" @click="isOpen = false" />
            </div>
          </template>
        </SModal>
      </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    title: 'Modal Title',
    size: 'medium'
};

const newModalTemplate = `
  <div>
    <SBtn title="Open Modal" @click="isOpen = true" />
    <SModal
      v-model="isOpen"
      v-bind="args"
      @update:model-value="isOpen = $event"
    >
      <div class="view-wrapper">
        <div class="form-wrapper">
          <SSubHeader title="기본 정보" :show-cnt="false" class-name="sub-title" />
        </div>
      </div>
      <template #footer>
        <div class="form__btn-wrapper">
          <SBtn title="저장" @click="isOpen = false" />
          <SBtn title="취소" variant="outlined" @click="isOpen = false" />
        </div>
      </template>
    </SModal>
  </div>
`;

export const NewModal = (args) => ({
  components: { SModal, SBtn, SSubHeader },
  setup() {
    const isOpen = ref(false);
    return { args, isOpen };
  },
  template: newModalTemplate,
});

NewModal.args = {
  title: '자원 등록',
  size: 'large'
};

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
  <div>
    <SBtn title="Open Modal" @click="isOpen = true" />
    <SModal
      v-model="isOpen"
      v-bind="args"
      @update:model-value="isOpen = $event"
    >
      <div class="view-wrapper">
        <div class="form-wrapper">
          <SSubHeader title="기본 정보" :show-cnt="false" class-name="sub-title" />
          <SFormTable>
            <SFormItem label="이름">
              <VTextField v-model="name" variant="outlined" density="compact" hide-details="auto" v-if="editMode" />
              <div v-else>{{ name }}</div>
            </SFormItem>
          </SFormTable>
        </div>
      </div>
      <template #footer>
        <div class="form__btn-wrapper">
          <SBtn title="수정" v-if="!editMode" @click="editMode = true" />
          <SBtn title="저장" v-else @click="editMode = false" />
          <SBtn title="취소" variant="outlined" @click="onClose" />
        </div>
      </template>
    </SModal>
  </div>
`;

const editModalScript = `
<script setup>
import { ref } from 'vue'

const isOpen = ref(false);
const editMode = ref(false);
const name = ref('이름');

const onClose = () => {
  if (editMode.value) {
    editMode.value = false;
  } else {
   editMode.value = false;
    isOpen.value = false;
  }
}
</script>
`;

export const DetailEditModal = (args) => ({
  components: { SModal, SBtn, SSubHeader, SFormTable, SFormItem },
  setup() {
    const isOpen = ref(false);
    const editMode = ref(false);
    const name = ref('이름');

    const onClose = () => {
      if (editMode.value) {
        editMode.value = false;
      } else {
        editMode.value = false;
        isOpen.value = false;
      }
    }
    return { args, isOpen, editMode, onClose, name };
  },
  template: editModalTemplate,
});

DetailEditModal.args = {
  title: '자원 상세',
  size: 'large'
};

DetailEditModal.parameters = {
  docs: {
    source: {
      code: `<template>${editModalTemplate}</template>\n${editModalScript}`,
      language: 'html',
      type: 'auto',
    },
  },
};
