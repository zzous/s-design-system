import {SConfirm} from '@';
import {ref} from 'vue';
import SBtn from '@/components/button/SBtn.vue';
export default {
    title: 'Modal/SConfirm',
    component: SConfirm,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'boolean',
            description: '모달 표시 여부',
            defaultValue: false
        },
        contents: {
            control: 'text',
            description: '확인 모달 내용',
        },
        confirmButtonText: {
            control: 'text',
            description: '확인 버튼 텍스트',
            defaultValue: '확인'
        },
        cancelButtonText: {
            control: 'text',
            description: '취소 버튼 텍스트',
            defaultValue: '취소'
        },
        teleportId: {
            control: 'text',
            description: '모달이 렌더링될 DOM 요소의 ID',
            defaultValue: 'app'
        },
        width: {
            control: 'text',
            description: '모달 너비',
            defaultValue: '400px'
        },
        hideCancel: {
            control: 'boolean',
            description: '취소 버튼 숨김 여부',
            defaultValue: false
        }
    },
};

const Template = (args) => ({
    components: { SConfirm, SBtn },
    setup() {
        const isOpen = ref(false);
        return {
            args,
            isOpen,
            toggle: () => isOpen.value = !isOpen.value
        };
    },
    template: `
        <div>
            <s-btn variant="outlined" @click="toggle">모달 {{ isOpen ? '닫기' : '열기' }}</s-btn>
            <s-confirm v-bind="args" v-model="isOpen" />
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: false,
    contents: 'Confirm Text\nConfirm Text',
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    teleportId: 'storybook-root',
    width: '400px',
    hideCancel: false
};

export const SingleButton = Template.bind({});
SingleButton.args = {
    modelValue: false,
    contents: '확인 버튼만 있는 모달입니다.',
    confirmButtonText: '확인',
    teleportId: 'storybook-root',
    hideCancel: true
};

export const LongContent = Template.bind({});
LongContent.args = {
    modelValue: false,
    contents: '첫 번째 줄\n두 번째 줄\n세 번째 줄\n네 번째 줄\n다섯 번째 줄',
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    teleportId: 'storybook-root',
    width: '500px'
};
