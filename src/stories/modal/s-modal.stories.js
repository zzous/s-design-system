import { SModal, SBtn, SSubHeader } from '@/components';
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
        const mode = ref('detail');

        return { args, isOpen, mode };
    },
    template: `
      <div>
        <SBtn title="Open Modal" @click="isOpen = true" />
        <SModal
          v-model="isOpen"
          v-bind="args"
          :mode="mode"
          @update:model-value="isOpen = $event"
        >
          <div class="view-wrapper">
            <div class="form-wrapper">
              <SSubHeader title="기본 정보" :show-cnt="false" class-name="sub-title" />
            </div>
          </div>
        </SModal>
      </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    title: '기본 모달',
    mode: 'detail',
    hideEditButton: true,
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
          <s-text-field />
        </div>
      </div>
    </SModal>
  </div>
`;

export const NewModal = (args) => ({
  components: { SModal, SBtn, SSubHeader },
  setup() {
    const isOpen = ref(false);
    const onSave = () => { isOpen.value = false }
    return { args: { ...args, onSave} , isOpen };
  },
  template: newModalTemplate,
});

NewModal.args = {
  title: '자원 등록',
  mode: 'new',
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


const Template2 = (args) => ({
  components: { SModal, SBtn },
  setup() {
    const isOpen = ref(false)
    const mode = ref(args.mode ?? 'detail')

    const changeMode = (newMode) => {
      mode.value = newMode
    }
    const onUpdate = () => {
      changeMode('detail')
    }

    return { args: { ...args, onUpdate }, isOpen, mode, changeMode }
  },
  template: `
    <div>
      <SBtn title="Open modal" @click="isOpen = true" />

      <SModal
        v-model="isOpen"
        v-bind="args"
        :mode="mode"
        :title="mode === 'detail' ? '상세 모달' : '수정 모달'"
        :changeMode="changeMode"
      >
        <template #default>
          <div style="padding: 20px">
            모달 내부 콘텐츠입니다.<br>
            현재 모드: <b>{{ mode }}</b>
          </div>
        </template>
      </SModal>
    </div>
  `,
})

export const DetailEditModal = Template2.bind({})
DetailEditModal.args = {
  languageCode: 'ko',
  mode: 'detail',
}
