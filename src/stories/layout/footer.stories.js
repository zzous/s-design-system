import {Footer} from '@';

export default {
    title: 'Layout/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { Footer },
    setup() { return { args }; },
    template: `
      <div :style="{padding: '24px 48px'}">
        <Footer v-bind="args" />
      </div>`,
});

export const Default = Template.bind({});
Default.args = {};
