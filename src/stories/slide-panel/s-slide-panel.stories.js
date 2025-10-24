import { SSlidePanel } from '@/components';

export default {
    title: 'Layout/SSlidePanel',
    component: SSlidePanel,
    tags: ['autodocs'],
    decorators: [
        () => ({
            template: '<story/>'
        })
    ],
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <s-slide-panel v-bind="slidePanelProps">
        슬라이드 패널 컨텐츠
    </s-slide-panel>
<template>

<script setup>
import { useSlidePanel } from '@strato/components'

const { slidePanelProps, openSlidePanel, closeSlidePanel } = useSlidePanel({ title: '슬라이드 패널 제목' })
</script>
                `,
            },
        },
    },
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: '슬라이드 패널의 열림/닫힘 상태를 제어합니다.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        onClose: {
            action: 'onClose',
            description: '패널이 닫힐 때 호출되는 콜백 함수입니다.',
        },
        onMinimize: {
            action: 'onMinimize',
            description: '패널이 최소화될 때 호출되는 콜백 함수입니다.',
        },
        onRestore: {
            action: 'onRestore',
            description: '패널이 복원될 때 호출되는 콜백 함수입니다.',
        },
        title: {
            control: 'text',
            description: '패널 헤더에 표시될 제목입니다.',
            table: {
                type: { summary: 'string' },
            },
        },
        isBackdrop: {
            control: 'boolean',
            description: '패널 뒷배경에 반투명 막을 표시할지 여부를 결정합니다.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
        },
        size: {
            control: 'text',
            description: '패널의 너비를 설정합니다. (예: "300px").',
            table: {
                type: { summary: 'string' },
            },
        },
        top: {
            control: 'text',
            description: '패널 스타일의 top 속성을 설정합니다.',
            table: {
                type: { summary: 'string' },
            },
        },
        isMinimized: {
            control: 'boolean',
            description: '패널의 최소화 상태를 제어합니다.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        showMinimizeButton: {
            control: 'boolean',
            description: '최소화 버튼 표시 여부를 제어합니다.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
        },
    },
};

export const Default = {
    args: {
        isOpen: false,
        title: 'Title',
        isBackdrop: false,
        size: '480px',
        isMinimized: false,
        showMinimizeButton: true,
    },
};

export const Minimized = {
    args: {
        isOpen: true,
        title: 'Minimized Panel',
        isBackdrop: false,
        size: '480px',
        isMinimized: true,
        showMinimizeButton: true,
    },
};

export const WithoutMinimizeButton = {
    args: {
        isOpen: true,
        title: 'Panel without Minimize',
        isBackdrop: false,
        size: '480px',
        isMinimized: false,
        showMinimizeButton: false,
    },
};
