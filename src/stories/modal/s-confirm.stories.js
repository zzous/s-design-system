import { SConfirm } from '@/components/modal/SConfirm';
import { SBtn } from '@/components/button/SBtn';

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

export const Default = {
    args: {
        modelValue: false,
        contents: 'Confirm Text\nConfirm Text',
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        teleportId: 'storybook-root',
        width: '400px',
        hideCancel: false
    },
};

export const SingleButton = {
    args: {
        modelValue: false,
        contents: '확인 버튼만 있는 모달입니다.',
        confirmButtonText: '확인',
        teleportId: 'storybook-root',
        hideCancel: true,
        noCancel: true
    },
};

export const LongContent = {
    args: {
        modelValue: false,
        contents: '첫 번째 줄\n두 번째 줄\n세 번째 줄\n네 번째 줄\n다섯 번째 줄',
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        teleportId: 'storybook-root',
        width: '500px'
    },
};
