import {CustomModal} from '@';

export default {
    title: 'Modal/CustomModal',
    component: CustomModal,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { CustomModal },
    setup() { return { args }; },
    template: `
      <CustomModal v-bind="args">
        Modal Contents
      </CustomModal>
    `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: false,
    modalWidth: '760px',
    title: 'Modal Title',
    teleportId: 'storybook-root',
};
