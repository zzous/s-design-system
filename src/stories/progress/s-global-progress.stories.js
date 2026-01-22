import { SGlobalProgress } from '@/components/progress/SGlobalProgress';

export default {
    title: 'Progress/SGlobalProgress',
    component: SGlobalProgress,
    tags: ['autodocs'],
    argTypes: {
        loadingMessage: {
            control: 'text',
            description: '로딩창 메시지 값',
        },
        modelValue: {
            control: 'boolean',
            description: '로딩 오픈 여부',
        },
        teleportId: {
            control: 'text',
            description: '로딩 바를 최상단에서 띄우기 위한 id(스토리북에서 글로벌 로딩바를 제거하려면 새로고침을 하세요.)',
        },
    },
};

export const Default = {
    args: {
        loadingMessage: "Loading Message",
        modelValue: false,
        teleportId: 'storybook-docs',
    },
};
