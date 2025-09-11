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
            description: '패널의 너비를 설정합니다. (예: "300px", "50%").',
        },
    },
};

export const Default = {
    args: {
        isOpen: true,
        title: 'Slide Panel Title',
        isBackdrop: false,
        size: '300px',
    },
};
