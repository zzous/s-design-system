import {CustomConfirm} from '@';

export default {
    title: 'Modal/CustomConfirm',
    component: CustomConfirm,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { CustomConfirm },
    setup() { return { args }; },
    template: `<CustomConfirm v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: false,
    contents: 'Confirm Text',
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    teleportId: 'storybook-root',
};
