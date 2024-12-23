import {SConfirm} from '@';

export default {
    title: 'Modal/SConfirm',
    component: SConfirm,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SConfirm },
    setup() { return { args }; },
    template: `<SConfirm v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: false,
    contents: 'Confirm Text\nConfirm Text',
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    teleportId: 'storybook-root',
};
