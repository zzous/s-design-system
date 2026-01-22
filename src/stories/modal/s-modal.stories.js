import { SModal } from '@/components/modal/SModal';

export default {
    title: 'Modal/SModal',
    component: SModal,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'boolean',
            description: '모달 표시 여부',
            defaultValue: false
        },
        width: {
            control: 'text',
            description: '모달 너비',
            defaultValue: '500px'
        },
        height: {
            control: 'text',
            description: '모달 높이',
            defaultValue: 'auto'
        },
    },
};

export const Default = {
    args: {
        modelValue: false,
        width: '500px',
        height: 'auto',
    },
};
