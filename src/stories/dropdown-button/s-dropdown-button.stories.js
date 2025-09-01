import { SDropdownButton } from '@/components';

export default {
    title: 'Button/SDropdownButton',
    component: SDropdownButton,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        list: { control: 'object' },
        whiteList: { control: 'object' },
    },
};

export const Default = {
    args: {
        label: '인증키 관리',
        disabled: false,
        whiteList: ['keypair:new'],
        list: [
            {
                actionCode: 'keypair:new',
                label: '생성',
                type: 'none',
                onClick: () => alert('생성 실행됨'),
            },
            {
                actionCode: 'keypair:delete',
                label: '삭제',
                type: 'multiple',
                onClick: () => alert('삭제 실행됨'),
            },
        ],
        selectedList: []
    },
};
