import {SFooter} from '@/components';

export default {
    title: 'Layout/SFooter',
    component: SFooter,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SFooter },
    setup() { return { args }; },
    template: `
      <div :style="{padding: '24px 48px'}">
        <SFooter v-bind="args" />
      </div>`,
});

export const Default = Template.bind({});
Default.args = {};
