import {SNavi} from '@';

export default {
    title: 'Layout/SNavi',
    component: SNavi,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SNavi },
    setup() { return { args }; },
    template: `
      <div :style="{padding: '24px 48px'}">
        <SNavi v-bind="args" />
      </div>`,
});

export const Default = Template.bind({});
Default.args = {};
